import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SceneMode } from '../types';

interface ThreeCanvasProps {
  sceneMode: SceneMode;
  wireframe?: boolean;
  glowIntensity?: number;
  onModelLoaded?: () => void;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  sceneMode,
  wireframe = false,
  glowIntensity = 1,
  onModelLoaded,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sharpCanvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  // References for animation state
  const stateRef = useRef({
    scene: null as THREE.Scene | null,
    camera: null as THREE.PerspectiveCamera | null,
    renderer: null as THREE.WebGLRenderer | null,
    ringGroup: new THREE.Group(),
    ringMesh: null as THREE.Mesh | null,
    pointLight: null as THREE.PointLight | null,
    areaLightMesh: null as THREE.Mesh | null,
    backdropPlane: null as THREE.Mesh | null,
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0, pixelX: 0, pixelY: 0 },
    scrollProgress: 0,
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    manualRotation: { x: 0, y: 0 },
    animFrameId: 0,
    materials: [] as THREE.Material[],
  });

  useEffect(() => {
    if (!containerRef.current || !sharpCanvasRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    stateRef.current.scene = scene;

    // Soft white studio fog
    scene.fog = new THREE.FogExp2(0xf8f9fa, 0.025);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.8);
    stateRef.current.camera = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: sharpCanvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    stateRef.current.renderer = renderer;

    // 4. White Background Studio Wall & Shadow Receiver Plane
    const backdropGeo = new THREE.PlaneGeometry(60, 40);
    const backdropMat = new THREE.MeshStandardMaterial({
      color: 0xfcfdfe,
      roughness: 0.85,
      metalness: 0.05,
    });
    const backdropMesh = new THREE.Mesh(backdropGeo, backdropMat);
    backdropMesh.position.set(0, 0, -4);
    backdropMesh.receiveShadow = true;
    scene.add(backdropMesh);
    stateRef.current.backdropPlane = backdropMesh;
    stateRef.current.materials.push(backdropMat);

    // 5. Lighting Setup
    // Soft Ambient Light for bright white environment
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    // Main Studio Key Light (Directional with soft shadows)
    const dirLightMain = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLightMain.position.set(5, 7, 6);
    dirLightMain.castShadow = true;
    dirLightMain.shadow.mapSize.width = 2048;
    dirLightMain.shadow.mapSize.height = 2048;
    dirLightMain.shadow.camera.near = 0.5;
    dirLightMain.shadow.camera.far = 25;
    dirLightMain.shadow.camera.left = -10;
    dirLightMain.shadow.camera.right = 10;
    dirLightMain.shadow.camera.top = 10;
    dirLightMain.shadow.camera.bottom = -10;
    dirLightMain.shadow.bias = -0.0001;
    scene.add(dirLightMain);

    // Warm Rim/Accent Light
    const rimLight = new THREE.DirectionalLight(0xffecd2, 1.4);
    rimLight.position.set(-8, 3, 2);
    scene.add(rimLight);

    // Dynamic Mouse-Tracking Area / Point Light casting the sheen
    const mousePointLight = new THREE.PointLight(0xffffff, 3.8 * glowIntensity, 16, 1.2);
    mousePointLight.position.set(3, 1, 4.5);
    mousePointLight.castShadow = true;
    mousePointLight.shadow.bias = -0.0002;
    scene.add(mousePointLight);
    stateRef.current.pointLight = mousePointLight;

    // Glowing Soft Disk to visually represent the Area Light source in 3D
    const areaLightDiskGeo = new THREE.CircleGeometry(1.6, 32);
    const areaLightDiskMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.12 * glowIntensity,
      side: THREE.DoubleSide,
    });
    const areaLightDisk = new THREE.Mesh(areaLightDiskGeo, areaLightDiskMat);
    areaLightDisk.position.set(3, 1, 3.5);
    scene.add(areaLightDisk);
    stateRef.current.areaLightMesh = areaLightDisk;
    stateRef.current.materials.push(areaLightDiskMat);

    // 6. The Pure 3D Ring Element (Positioned prominently on the Right Side)
    const ringGroup = stateRef.current.ringGroup;
    scene.add(ringGroup);

    // Create high-precision Torus Ring Geometry
    // Radius: 2.1, Tube thickness: 0.52, RadialSegments: 48, TubularSegments: 160
    const ringGeo = new THREE.TorusGeometry(2.1, 0.52, 48, 160);

    // Luxurious Dark Titanium & Clearcoat Obsidian Material
    const ringMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x18181b),
      emissive: new THREE.Color(0x111111),
      emissiveIntensity: 0.1 * glowIntensity,
      metalness: 0.92,
      roughness: 0.14,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.98,
      ior: 1.55,
      wireframe: wireframe,
      side: THREE.DoubleSide,
    });
    stateRef.current.materials.push(ringMaterial);

    const ringMesh = new THREE.Mesh(ringGeo, ringMaterial);
    ringMesh.castShadow = true;
    ringMesh.receiveShadow = true;
    ringGroup.add(ringMesh);
    stateRef.current.ringMesh = ringMesh;

    // Initial position on the right side
    const isMobile = width < 768;
    ringGroup.position.set(isMobile ? 0.3 : 2.8, isMobile ? 0.6 : 0, 0);

    onModelLoaded?.();

    // 7. Event Listeners
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (!stateRef.current.camera || !stateRef.current.renderer) return;

      stateRef.current.camera.aspect = w / h;
      stateRef.current.camera.updateProjectionMatrix();
      stateRef.current.renderer.setSize(w, h);
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const normX = (clientX / window.innerWidth) * 2 - 1;
      const normY = -(clientY / window.innerHeight) * 2 + 1;

      stateRef.current.mouse.targetX = normX;
      stateRef.current.mouse.targetY = normY;
      stateRef.current.mouse.pixelX = clientX;
      stateRef.current.mouse.pixelY = clientY;

      setMousePos({ x: clientX, y: clientY });
      setIsHovered(true);

      if (stateRef.current.isDragging) {
        const deltaX = clientX - stateRef.current.dragStart.x;
        const deltaY = clientY - stateRef.current.dragStart.y;
        stateRef.current.manualRotation.y += deltaX * 0.008;
        stateRef.current.manualRotation.x += deltaY * 0.008;
        stateRef.current.dragStart = { x: clientX, y: clientY };
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      stateRef.current.isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      stateRef.current.dragStart = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
      stateRef.current.isDragging = false;
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
      stateRef.current.scrollProgress = Math.min(Math.max(progress, 0), 1);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const canvasElem = sharpCanvasRef.current;
    canvasElem.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);
    canvasElem.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchend', handlePointerUp);
    canvasElem.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Initial scroll call
    handleScroll();

    // 8. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      stateRef.current.animFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const st = stateRef.current;

      // Smooth mouse lerp
      st.mouse.x += (st.mouse.targetX - st.mouse.x) * 0.05;
      st.mouse.y += (st.mouse.targetY - st.mouse.y) * 0.05;

      // Dynamic Area Light / Sheen follows mouse smoothly
      if (st.pointLight && st.areaLightMesh) {
        const lightTargetX = st.mouse.x * 6 + 2;
        const lightTargetY = st.mouse.y * 4 + 0.5;
        const lightTargetZ = 4.2;

        st.pointLight.position.x += (lightTargetX - st.pointLight.position.x) * 0.06;
        st.pointLight.position.y += (lightTargetY - st.pointLight.position.y) * 0.06;
        st.pointLight.position.z = lightTargetZ;

        st.areaLightMesh.position.x = st.pointLight.position.x;
        st.areaLightMesh.position.y = st.pointLight.position.y;
        st.areaLightMesh.position.z = st.pointLight.position.z - 0.8;
      }

      const sp = st.scrollProgress;
      const w = window.innerWidth;
      const isMobile = w < 768;

      // Dynamic Transformation based on Scene Mode & Scroll position
      if (sceneMode === 'scroll') {
        // Keep the ring prominently on the RIGHT side, with spatial responsiveness
        // Desktop default anchor is ~2.8 to 3.2 on the right
        let targetPosX = isMobile ? 0.3 : 2.8 + Math.sin(sp * Math.PI * 2) * 0.4;
        let targetPosY = isMobile ? 0.6 - sp * 1.2 : Math.sin(sp * Math.PI * 3) * 0.6;
        let targetPosZ = Math.sin(sp * Math.PI * 2) * 0.8;
        let targetScale = isMobile ? 0.85 + Math.sin(sp * Math.PI) * 0.2 : 1.2 + Math.sin(sp * Math.PI) * 0.25;

        // Apply smooth position lerp
        ringGroup.position.x += (targetPosX - ringGroup.position.x) * 0.08;
        ringGroup.position.y += (targetPosY - ringGroup.position.y) * 0.08;
        ringGroup.position.z += (targetPosZ - ringGroup.position.z) * 0.08;
        ringGroup.scale.setScalar(
          ringGroup.scale.x + (targetScale - ringGroup.scale.x) * 0.08
        );

        // Rotation: Continuous fluid spin + scroll rotation + mouse parallax tilt
        const scrollRotX = sp * Math.PI * 3;
        const scrollRotY = sp * Math.PI * 4;
        const autoSpin = elapsedTime * 0.35;

        ringGroup.rotation.x = scrollRotX * 0.5 + autoSpin * 0.3 + st.mouse.y * 0.4 + st.manualRotation.x;
        ringGroup.rotation.y = scrollRotY * 0.7 + autoSpin * 0.6 + st.mouse.x * 0.55 + st.manualRotation.y;
        ringGroup.rotation.z = Math.sin(sp * Math.PI * 2) * 0.5 + elapsedTime * 0.12;
      } else if (sceneMode === 'orbit') {
        // Free Orbit Mode: Full manual control positioned on the right
        const targetX = isMobile ? 0 : 2.4;
        ringGroup.position.x += (targetX - ringGroup.position.x) * 0.08;
        ringGroup.position.y += (0 - ringGroup.position.y) * 0.08;
        ringGroup.rotation.x = st.manualRotation.x + Math.sin(elapsedTime * 0.8) * 0.1;
        ringGroup.rotation.y = st.manualRotation.y + elapsedTime * 0.2;
        ringGroup.scale.setScalar(isMobile ? 0.95 : 1.25);
      } else if (sceneMode === 'auto') {
        // Auto Turntable Mode
        ringGroup.position.set(isMobile ? 0.2 : 2.7, 0, 0);
        ringGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.25 + st.mouse.y * 0.25;
        ringGroup.rotation.y = elapsedTime * 0.75 + st.mouse.x * 0.35;
        ringGroup.rotation.z = Math.cos(elapsedTime * 0.35) * 0.15;
        ringGroup.scale.setScalar(isMobile ? 0.9 : 1.2);
      }

      if (st.renderer && st.scene && st.camera) {
        st.renderer.render(st.scene, st.camera);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(stateRef.current.animFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);

      if (canvasElem) {
        canvasElem.removeEventListener('mousedown', handlePointerDown);
        canvasElem.removeEventListener('touchstart', handlePointerDown);
      }

      stateRef.current.materials.forEach((m) => m.dispose());
      ringGeo.dispose();
      backdropGeo.dispose();
      areaLightDiskGeo.dispose();
      stateRef.current.renderer?.dispose();
    };
  }, [sceneMode, wireframe, glowIntensity]);

  // Compute CSS mask for the focus point (circle with blur removal at cursor)
  const focusRadius = 170;
  const innerSharpRadius = 55;
  const featherRadius = 140;

  // Mask string: transparent at cursor (reveals sharp 3D ring underneath), black outside (keeps blur overlay active)
  const maskStyle = isHovered
    ? `radial-gradient(circle ${focusRadius}px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, transparent ${innerSharpRadius}px, rgba(0, 0, 0, 0.4) ${featherRadius}px, black ${focusRadius}px)`
    : 'none';

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-auto z-0 overflow-hidden bg-[#fbfbfd]"
      id="three-canvas-container"
      style={{ touchAction: 'none' }}
    >
      {/* 1. Large Hovering Area Light Sheen on the White Surface */}
      <div
        className="pointer-events-none absolute w-[1000px] h-[1000px] rounded-full blur-[140px] opacity-40 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(240, 243, 246, 0.85) 35%, rgba(225, 230, 238, 0.45) 60%, rgba(245, 246, 248, 0) 80%)',
          left: `${(stateRef.current.mouse.x * 0.5 + 0.5) * 100}%`,
          top: `${(-stateRef.current.mouse.y * 0.5 + 0.5) * 100}%`,
        }}
      />

      {/* Secondary Soft Ambient Glow following mouse */}
      <div
        className="pointer-events-none absolute w-[700px] h-[700px] rounded-full blur-[100px] opacity-35 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out"
        style={{
          background:
            'radial-gradient(circle, rgba(245, 245, 247, 0.9) 0%, rgba(230, 235, 242, 0.5) 40%, transparent 75%)',
          left: `${(stateRef.current.mouse.x * 0.5 + 0.5) * 100}%`,
          top: `${(-stateRef.current.mouse.y * 0.5 + 0.5) * 100}%`,
        }}
      />

      {/* 2. Base Sharp WebGL 3D Canvas (Single Ring on the Right) */}
      <canvas
        ref={sharpCanvasRef}
        id="webgl-sharp-canvas"
        className="w-full h-full cursor-grab active:cursor-grabbing block relative z-0"
      />

      {/* 3. Optical Blur Overlay Layer with Dynamic Focus Point Mask */}
      <div
        className="absolute inset-0 pointer-events-none z-10 backdrop-blur-[9px] transition-opacity duration-300"
        style={{
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle,
        }}
      />

      {/* 4. Interactive Focus Point Reticle Indicator */}
      {isHovered && mousePos.x > 0 && mousePos.y > 0 && (
        <div
          className="pointer-events-none fixed z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-200"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: `${focusRadius * 1.5}px`,
            height: `${focusRadius * 1.5}px`,
          }}
        >
          {/* Subtle Focus Ring */}
          <div className="w-14 h-14 rounded-full border border-black/20 animate-pulse flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
          </div>
          {/* Subtle Focus Label Badge */}
          <div className="absolute top-1/2 left-full ml-3 -translate-y-1/2 whitespace-nowrap px-2 py-0.5 rounded-full bg-white/80 border border-black/10 backdrop-blur-md text-[9px] uppercase tracking-widest text-black/60 font-mono shadow-sm">
            Fokus
          </div>
        </div>
      )}
    </div>
  );
};
