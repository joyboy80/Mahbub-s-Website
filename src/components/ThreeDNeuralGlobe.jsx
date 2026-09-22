import React, { useEffect, useRef } from 'react';

export default function ThreeDNeuralGlobe({ size = 280, className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Retina display resolution scaling
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const radius = size * 0.36;
    const centerX = size / 2;
    const centerY = size / 2;
    const focalLength = 320;

    // Generate 3D nodes using Fibonacci Sphere Algorithm
    const nodeCount = 55;
    const nodes = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < nodeCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
      nodes.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        baseRadius: Math.random() * 1.5 + 1.5,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Generate 3D Orbital Ring Points
    const ringPointCount = 36;
    const ringPoints = [];
    const ringRadius = radius * 1.28;
    for (let i = 0; i < ringPointCount; i++) {
      const angle = (i / ringPointCount) * Math.PI * 2;
      ringPoints.push({
        x: Math.cos(angle) * ringRadius,
        y: Math.sin(angle) * ringRadius * 0.35, // elliptical tilt
        z: Math.sin(angle) * ringRadius * 0.7
      });
    }

    let angleX = 0.003;
    let angleY = 0.007;
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left - centerX) / centerX;
      const y = (e.clientY - rect.top - centerY) / centerY;
      mouseTargetX = y * 0.015;
      mouseTargetY = x * 0.015;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      // Interpolate towards mouse target
      currentMouseX += (mouseTargetX - currentMouseX) * 0.08;
      currentMouseY += (mouseTargetY - currentMouseY) * 0.08;

      const rotX = angleX + currentMouseX;
      const rotY = angleY + currentMouseY;

      frame++;

      // Rotate and project nodes
      const projectedNodes = nodes.map((node) => {
        // Rotate around Y axis
        let x1 = node.x * Math.cos(rotY) - node.z * Math.sin(rotY);
        let z1 = node.z * Math.cos(rotY) + node.x * Math.sin(rotY);

        // Rotate around X axis
        let y2 = node.y * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = z1 * Math.cos(rotX) + node.y * Math.sin(rotX);

        node.x = x1;
        node.y = y2;
        node.z = z2;

        const scale = focalLength / (focalLength + z2);
        const projX = x1 * scale + centerX;
        const projY = y2 * scale + centerY;

        return {
          ...node,
          projX,
          projY,
          projZ: z2,
          scale
        };
      });

      // Sort by depth (Z-order painter's algorithm)
      projectedNodes.sort((a, b) => b.projZ - a.projZ);

      // Draw faint 3D connections
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const dx = projectedNodes[i].x - projectedNodes[j].x;
          const dy = projectedNodes[i].y - projectedNodes[j].y;
          const dz = projectedNodes[i].z - projectedNodes[j].z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < radius * 0.65) {
            const avgZ = (projectedNodes[i].projZ + projectedNodes[j].projZ) / 2;
            const alpha = Math.max(0, (1 - dist3D / (radius * 0.65)) * 0.25 * ((avgZ + radius) / (2 * radius)));

            ctx.beginPath();
            ctx.moveTo(projectedNodes[i].projX, projectedNodes[i].projY);
            ctx.lineTo(projectedNodes[j].projX, projectedNodes[j].projY);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw 3D Orbital Ring
      ctx.beginPath();
      ringPoints.forEach((pt, index) => {
        // Rotate ring
        let x1 = pt.x * Math.cos(rotY * 0.7) - pt.z * Math.sin(rotY * 0.7);
        let z1 = pt.z * Math.cos(rotY * 0.7) + pt.x * Math.sin(rotY * 0.7);

        let y2 = pt.y * Math.cos(rotX * 0.7) - z1 * Math.sin(rotX * 0.7);
        let z2 = z1 * Math.cos(rotX * 0.7) + pt.y * Math.sin(rotX * 0.7);

        pt.x = x1;
        pt.y = y2;
        pt.z = z2;

        const scale = focalLength / (focalLength + z2);
        const projX = x1 * scale + centerX;
        const projY = y2 * scale + centerY;

        if (index === 0) ctx.moveTo(projX, projY);
        else ctx.lineTo(projX, projY);
      });
      ctx.closePath();
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.18)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw projected nodes
      projectedNodes.forEach((node) => {
        const depthAlpha = Math.max(0.1, (node.projZ + radius) / (2 * radius));
        const pulse = Math.sin(frame * node.pulseSpeed + node.pulseOffset) * 0.4 + 0.6;
        const drawRadius = Math.max(0.6, node.baseRadius * node.scale * pulse);

        ctx.beginPath();
        ctx.arc(node.projX, node.projY, drawRadius, 0, Math.PI * 2);

        // Color based on depth
        if (node.projZ > 0) {
          ctx.fillStyle = `rgba(56, 189, 248, ${depthAlpha * 0.85})`;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(168, 85, 247, ${depthAlpha * 0.5})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        style={{ width: `${size}px`, height: `${size}px` }}
        className="cursor-grab active:cursor-grabbing drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]"
      />
    </div>
  );
}
