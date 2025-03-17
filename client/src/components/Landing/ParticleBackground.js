// client/src/components/Landing/ParticleBackground.js
import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    
    const particles = [];
    const createParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(80, Math.floor(window.innerWidth * window.innerHeight / 12000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(0, 255, 157, ${Math.random() * 0.15 + 0.05})`,
          speedX: Math.random() * 0.8 - 0.4,
          speedY: Math.random() * 0.8 - 0.4
        });
      }
    };
    
    createParticles();
    
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
    };

    animate();
    
    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas id="bgCanvas" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>;
};

export default ParticleBackground;