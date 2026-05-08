import { useEffect, useRef } from 'react';

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = '01アイウエオ/\\|><[]{}();:$#@%^&*_-+=~';
    const fontSize = 14;
    const columns = Math.ceil(width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -height;
    }

    const draw = () => {
      // Fade effect for trails - use very low opacity for background noise
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px JetBrains Mono`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Very dim green
        ctx.fillStyle = 'rgba(0, 255, 65, 0.04)';
        ctx.fillText(text, i * fontSize, drops[i]);

        if (drops[i] > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += fontSize * 0.5; // Slow move
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
