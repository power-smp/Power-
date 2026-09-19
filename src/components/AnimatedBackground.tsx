import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle types: floating Minecraft cubes & energy orbs
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
      rotation: number;
      rotSpeed: number;
      isCube: boolean;
    }

    const colors = [
      'rgba(168, 85, 247, ', // purple
      'rgba(147, 51, 234, ', // violet
      'rgba(59, 130, 246, ', // blue
      'rgba(6, 182, 212, ',  // cyan
      'rgba(236, 72, 153, ', // pink
    ];

    const particleCount = Math.min(65, Math.floor(width / 22));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 3,
        speedY: -(Math.random() * 0.8 + 0.25),
        speedX: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        isCube: Math.random() > 0.45,
      });
    }

    // Mouse interactive energy point
    const mouse = { x: width / 2, y: height / 2, radius: 120 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep atmospheric gradient
      const gradient = ctx.createRadialGradient(
        width / 2,
        height * 0.35,
        100,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, '#15102a');
      gradient.addColorStop(0.5, '#0d0d18');
      gradient.addColorStop(1, '#07070c');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Cyber/Minecraft isometric subtle grid lines
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.035)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move upward like Netherite energy / enchanting table glyphs
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        // Wrap around
        if (p.y < -30) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        // Mouse gentle push
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.isCube) {
          // Draw floating isometric Minecraft block/cube
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.strokeStyle = `${p.color}${p.opacity * 1.4})`;
          ctx.lineWidth = 1.2;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size);

          // Inner pixel accent
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.8})`;
          ctx.fillRect(-p.size / 4, -p.size / 4, p.size / 2, p.size / 2);
        } else {
          // Glowing orb
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.fill();

          // Outer halo
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity * 0.25})`;
          ctx.fill();
        }

        ctx.restore();
      }

      // Connecting energy constellations between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - distance / 90) * 0.12;
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="animated-background-wrapper" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Ambient glowing radial spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}
