import React, { useRef, useState } from 'react';

export default function Interactive3DTilt({ 
  children, 
  className = '', 
  maxTilt = 12, 
  perspective = 1000,
  glare = true 
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`);
  const [glareState, setGlareState] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(
      `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    );

    if (glare) {
      setGlareState({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.35
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    if (glare) {
      setGlareState((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.18s cubic-bezier(0.2, 0.8, 0.4, 1)'
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Holographic Specular Glare Effect */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-20"
          style={{
            opacity: glareState.opacity,
            background: `radial-gradient(circle at ${glareState.x}% ${glareState.y}%, rgba(255, 255, 255, 0.5) 0%, rgba(56, 189, 248, 0.2) 35%, transparent 70%)`
          }}
        />
      )}
    </div>
  );
}
