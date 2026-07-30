import React, { useEffect, useRef } from 'react';

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system
    const numParticles = 40;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.6 - 0.2, // Move upward gently
      alpha: Math.random() * 0.6 + 0.2,
      maxAlpha: Math.random() * 0.8 + 0.3,
      fadeSpeed: Math.random() * 0.008 + 0.002,
    }));

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint blue LED ceiling light lines grid (matching gym ceiling layout)
      ctx.strokeStyle = 'rgba(21, 101, 255, 0.08)';
      ctx.lineWidth = 1;

      // Diagonal ambient light beams
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.2);
      ctx.lineTo(width * 0.8, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(width * 0.2, 0);
      ctx.lineTo(width, height * 0.7);
      ctx.stroke();
      ctx.restore();

      // Render particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Reset particle if out of bounds
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(21, 101, 255, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
