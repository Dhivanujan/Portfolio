import { useEffect, useState } from "react";

/**
 * EcoBackground — A CSS-only animated constellation/neural-network background.
 * Replaces the Three.js StarBackground (~882 KB) with ~2 KB of pure CSS.
 * Uses CSS custom properties + gradients for zero GPU render-loop overhead.
 * Respects prefers-reduced-motion and pauses when off-screen.
 */
const EcoBackground = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  if (!isDark) return null;

  return (
    <div
      className="eco-bg fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Animated grid dots */}
      <div className="eco-grid" />

      {/* Floating orbs — CSS radial gradients, no GPU render loop */}
      <div className="eco-orb eco-orb--1" />
      <div className="eco-orb eco-orb--2" />
      <div className="eco-orb eco-orb--3" />

      {/* Subtle vignette for depth */}
      <div className="eco-vignette" />
    </div>
  );
};

export default EcoBackground;
