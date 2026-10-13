import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingCube {
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhysicalMaterial>;
  origin: THREE.Vector3;
  baseSize: number;
  rotation: THREE.Vector3;
  phase: number;
}

export const SceneBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: window.innerWidth >= 768,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (error) {
      console.error('Unable to initialize the portfolio WebGL background.', error);
      return;
    }

    const getPixelRatio = () => Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1 : 1.25);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(getPixelRatio());
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;

    scene.add(new THREE.AmbientLight(0xffffff, 0.48));

    const keyLight = new THREE.DirectionalLight(0xc1a25d, 1.05);
    keyLight.position.set(-4, 5, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xbab6a7, 0.25);
    fillLight.position.set(5, 1, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x777865, 0.45);
    rimLight.position.set(2, -4, -3);
    scene.add(rimLight);

    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubes: FloatingCube[] = [];
    const cubeLayoutOffsetX = 4.7;
    const layouts = [
      { x: -1.8, y: 0.05, z: 0, size: 1.22, speed: [0.14, 0.19, 0.1], phase: 0.2 },
      { x: -3.75, y: 1.45, z: -0.4, size: 0.4, speed: [0.19, -0.13, 0.16], phase: 1.7 },
      { x: -0.55, y: 1.75, z: -1.2, size: 0.31, speed: [-0.12, 0.22, -0.17], phase: 2.8 },
      { x: -4.05, y: -1.45, z: -0.8, size: 0.52, speed: [0.1, 0.17, 0.12], phase: 3.4 },
      { x: -0.55, y: -1.7, z: -0.7, size: 0.45, speed: [-0.16, -0.1, 0.18], phase: 4.6 },
      { x: -3.55, y: 0.25, z: -1.5, size: 0.23, speed: [0.2, -0.15, -0.1], phase: 5.3 },
      { x: -1.25, y: 0.4, z: -1.8, size: 0.26, speed: [-0.14, 0.13, 0.2], phase: 6.1 },
    ] as const;

    for (const layout of layouts) {
      const material = new THREE.MeshPhysicalMaterial({
        color: 0xfff2b0,
        emissive: 0xc6a528,
        emissiveIntensity: 1.05,
        metalness: 0.18,
        roughness: 0.34,
        clearcoat: 0.55,
        clearcoatRoughness: 0.24,
      });
      const mesh = new THREE.Mesh(cubeGeometry, material);
      mesh.position.set(layout.x + cubeLayoutOffsetX, layout.y, layout.z);
      mesh.scale.setScalar(layout.size);
      mesh.rotation.set(layout.phase * 0.21, layout.phase * 0.29, layout.phase * 0.13);
      mesh.castShadow = false;
      scene.add(mesh);
      cubes.push({
        mesh,
        origin: new THREE.Vector3(layout.x + cubeLayoutOffsetX, layout.y, layout.z),
        baseSize: layout.size,
        rotation: new THREE.Vector3(...layout.speed),
        phase: layout.phase,
      });
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let targetProgress = 0;
    let currentProgress = 0;
    let currentBackgroundProgress = 0;
    let frameId = 0;
    const timer = new THREE.Timer();
    timer.connect(document);

    const updateProgress = () => {
      targetProgress = THREE.MathUtils.clamp(window.scrollY / (window.innerHeight * 2.4), 0, 1);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !focusRef.current) return;
      const radius = window.innerWidth < 768 ? 170 : 240;
      focusRef.current.style.setProperty('--focus-x', `${event.clientX}px`);
      focusRef.current.style.setProperty('--focus-y', `${event.clientY}px`);
      focusRef.current.style.maskImage = `radial-gradient(circle ${radius}px at var(--focus-x) var(--focus-y), transparent 0, transparent ${Math.round(radius * 0.32)}px, rgba(0, 0, 0, 0.56) ${Math.round(radius * 0.68)}px, #000 ${radius}px)`;
      focusRef.current.style.webkitMaskImage = focusRef.current.style.maskImage;
      focusRef.current.style.opacity = '1';
    };

    const handlePointerLeave = (event: PointerEvent) => {
      if (event.relatedTarget === null && focusRef.current) {
        focusRef.current.style.opacity = '0';
      }
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(getPixelRatio());
    };

    const animate = (timestamp: number) => {
      frameId = window.requestAnimationFrame(animate);
      timer.update();
      const delta = Math.min(timer.getDelta(), 0.1);
      const easing = reducedMotion.matches ? 1 : 1 - Math.exp(-delta * 4);
      const backgroundEasing = reducedMotion.matches ? 1 : 1 - Math.exp(-delta * 3.8);
      currentProgress += (targetProgress - currentProgress) * easing;
      currentBackgroundProgress += (targetProgress - currentBackgroundProgress) * backgroundEasing;
      if (gradientRef.current) {
        const amount = THREE.MathUtils.smoothstep(currentBackgroundProgress, 0, 0.88);
        const gray = [145, 145, 139];
        const dark = [0, 0, 0];
        const color = gray.map((channel, index) =>
          Math.round(channel + (dark[index] - channel) * amount),
        );
        gradientRef.current.style.backgroundColor = `rgb(${color.join(', ')})`;
        gradientRef.current.style.setProperty('--scene-glow-opacity', String(1 - amount));
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = String(0.82 * (1 - currentBackgroundProgress));
      }

      const expansion = THREE.MathUtils.smoothstep(currentProgress, 0.03, 0.92);
      const elapsedTime = timer.getElapsed();

      if (!reducedMotion.matches) {
        cubes.forEach((cube, index) => {
          const isHeroCube = index === 0;
          const depthShift = isHeroCube ? expansion * 1.5 : expansion * (index % 2 === 0 ? 0.3 : -0.2);
          const groupScale = isHeroCube
            ? 1 + expansion * 0.85
            : 1 + expansion * (index % 2 === 0 ? 0.26 : -0.12);
          const targetX = cube.origin.x
            + (isHeroCube ? -expansion * 0.52 : Math.sin(currentProgress * Math.PI + cube.phase) * 0.16);
          const targetY = cube.origin.y
            + Math.sin(elapsedTime * 0.42 + cube.phase) * (isHeroCube ? 0.1 : 0.16)
            - expansion * (isHeroCube ? 0.08 : 0);

          cube.mesh.position.x += (targetX - cube.mesh.position.x) * backgroundEasing;
          cube.mesh.position.y += (targetY - cube.mesh.position.y) * backgroundEasing;
          cube.mesh.position.z += (cube.origin.z + depthShift - cube.mesh.position.z) * backgroundEasing;
          cube.mesh.scale.setScalar(cube.baseSize * groupScale);
          cube.mesh.rotation.x += (
            cube.phase * 0.21 + elapsedTime * cube.rotation.x + currentProgress * (isHeroCube ? 3.1 : 1.7)
            - cube.mesh.rotation.x
          ) * easing;
          cube.mesh.rotation.y += (
            cube.phase * 0.29 + elapsedTime * cube.rotation.y + currentProgress * (isHeroCube ? 4.2 : 2.1)
            - cube.mesh.rotation.y
          ) * easing;
          cube.mesh.rotation.z += (
            cube.phase * 0.13 + elapsedTime * cube.rotation.z + currentProgress * (isHeroCube ? 1.8 : 1.2)
            - cube.mesh.rotation.z
          ) * easing;
        });
      }

      renderer.render(scene, camera);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerout', handlePointerLeave);
    window.addEventListener('resize', handleResize);
    animate(0);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
      timer.disconnect();
      cubeGeometry.dispose();
      cubes.forEach(({ mesh }) => mesh.material.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <div
        ref={gradientRef}
        className="absolute inset-0 scene-gradient"
      />
      <div ref={spotlightRef} aria-hidden="true" className="scene-wall-spotlight" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
      <div ref={focusRef} className="scene-focus-filter" />
    </div>
  );
};
