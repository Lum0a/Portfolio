import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StudioSection } from './components/StudioSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ResumeSection } from './components/ResumeSection';
import { HorizontalPathSection } from './components/HorizontalPathSection';
import { SkillsSection } from './components/SkillsSection';
import { SoftwareSection } from './components/SoftwareSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
const SceneBackground = lazy(() => import('./components/SceneBackground').then(({ SceneBackground: component }) => ({
  default: component,
})));

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    let targetScroll = window.scrollY;
    let expectedScroll = window.scrollY;
    let frameId = 0;
    let lastFrameTime = 0;
    let isAnimating = false;

    const cancelScrollAnimation = () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      targetScroll = window.scrollY;
      expectedScroll = window.scrollY;
      isAnimating = false;
      frameId = 0;
      lastFrameTime = 0;
    };

    const animateScroll = (timestamp: number) => {
      if (!lastFrameTime) lastFrameTime = timestamp;
      const delta = Math.min((timestamp - lastFrameTime) / 1000, 0.05);
      lastFrameTime = timestamp;

      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - expectedScroll) > 2) {
        targetScroll = currentScroll;
        isAnimating = false;
        frameId = 0;
        lastFrameTime = 0;
        return;
      }
      const remaining = targetScroll - currentScroll;
      if (Math.abs(remaining) < 0.5) {
        window.scrollTo(0, targetScroll);
        expectedScroll = targetScroll;
        isAnimating = false;
        lastFrameTime = 0;
        frameId = 0;
        return;
      }

      expectedScroll = currentScroll + remaining * (1 - Math.exp(-delta * 3));
      window.scrollTo(0, expectedScroll);
      frameId = window.requestAnimationFrame(animateScroll);
    };

    const handleWheel = (event: WheelEvent) => {
      if (
        event.ctrlKey
        || event.shiftKey
        || event.deltaY === 0
        || Math.abs(event.deltaX) > Math.abs(event.deltaY)
        || reducedMotion.matches
        || !(event.target instanceof Element)
      ) {
        return;
      }

      const target = event.target;
      if (target.closest('input, textarea, select, [contenteditable="true"], [data-native-scroll]')) return;

      const scrollableParent = target.closest<HTMLElement>('[data-scrollable]');
      if (scrollableParent) {
        const { overflowY } = window.getComputedStyle(scrollableParent);
        const canScrollVertically = /(auto|scroll)/.test(overflowY)
          && scrollableParent.scrollHeight > scrollableParent.clientHeight
          && (event.deltaY < 0
            ? scrollableParent.scrollTop > 0
            : scrollableParent.scrollTop + scrollableParent.clientHeight < scrollableParent.scrollHeight);
        if (canScrollVertically) return;
      }

      if (!event.cancelable) return;
      event.preventDefault();

      const delta = event.deltaY * (event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? window.innerHeight
          : 1);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (!isAnimating) expectedScroll = window.scrollY;
      targetScroll = Math.max(0, Math.min(maxScroll, (isAnimating ? targetScroll : window.scrollY) + delta));
      isAnimating = true;

      if (!frameId) {
        frameId = window.requestAnimationFrame(animateScroll);
      }
    };

    const syncTargetToNativeScroll = () => {
      if (isAnimating && Math.abs(window.scrollY - expectedScroll) > 2) {
        cancelScrollAnimation();
      } else if (!isAnimating) {
        targetScroll = window.scrollY;
        expectedScroll = window.scrollY;
      }
    };

    window.addEventListener('pointerdown', cancelScrollAnimation, { capture: true });
    window.addEventListener('keydown', cancelScrollAnimation, { capture: true });
    window.addEventListener('touchstart', cancelScrollAnimation, { capture: true, passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', syncTargetToNativeScroll, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', cancelScrollAnimation, { capture: true });
      window.removeEventListener('keydown', cancelScrollAnimation, { capture: true });
      window.removeEventListener('touchstart', cancelScrollAnimation, { capture: true });
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', syncTargetToNativeScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#090908] font-sans text-[#f1efe8] selection:bg-[#c3a04a] selection:text-[#090908]">
      <Suspense fallback={<div aria-hidden="true" className="fixed inset-0 z-0 scene-gradient" />}>
        <SceneBackground />
      </Suspense>
      {/* Main Website Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-grow">
          <div className="intro-sequence relative z-10">
            <HeroSection />
            <StudioSection />
          </div>

          <div className="portfolio-surface relative z-10 w-full shadow-[0_32px_90px_rgba(0,0,0,0.42)]">
            <CaseStudiesSection onOpenContact={() => setIsContactOpen(true)} />
            <SoftwareSection />
            <div hidden>
              <HorizontalPathSection />
              <SkillsSection />
            </div>
            <ResumeSection />
          </div>

          <div className="bg-[#090908]">
            <CtaSection onOpenContact={() => setIsContactOpen(true)} />
          </div>
        </main>

        {/* Footer */}
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </div>

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
