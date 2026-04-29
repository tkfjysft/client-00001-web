"use client";

const DOT_COUNT = 120;
const items = Array.from({ length: DOT_COUNT }, (_, i) => i);

export const HeroParticles = () => (
  <div className="relative w-0 h-0">
    {items.map((i) => {
      const angle = i * 137.5;
      const radius = Math.sqrt(i) * 35;
      const sx = Math.cos(angle * (Math.PI / 180)) * radius;
      const sy = Math.sin(angle * (Math.PI / 180)) * radius;
      return (
        <div
          key={`p-${i}`}
          className="particle"
          suppressHydrationWarning
          style={{
            width: `${(i % 5) + 2}px`,
            height: `${(i % 5) + 2}px`,
            left: `${sx}px`,
            top: `${sy}px`,
            animationDelay: `${(i % 50) * 0.06}s`,
            "--sx": `${sx}px`,
            "--sy": `${sy}px`,
          } as any}
        />
      );
    })}
  </div>
);