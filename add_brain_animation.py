import re

with open('src/pages/Internship.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# The neural network component code
neural_net_code = '''
// --- Neural Network Particle Background ---
const NeuralNetworkBackground = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: any[] = [];
    
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const numParticles = window.innerWidth < 768 ? 40 : 80;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 2 + 1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96, 165, 250, 0.8)'; // blue-400
        ctx.fill();
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Opacity based on distance
            ctx.strokeStyle = `rgba(129, 140, 248, ${(1 - dist / 180) * 0.5})`; // indigo-400
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();
    
    const handleResize = () => {
      init();
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50 pointer-events-none mix-blend-screen" />;
};

'''

# Insert the component before "export default function Internship()"
text = text.replace('export default function Internship() {', neural_net_code + '\nexport default function Internship() {')

# Find the background block and add the NeuralNetworkBackground
hero_bg_replacement = '''        {/* Enhanced Advanced Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* AI Brain Neural Network Animation */}
          <NeuralNetworkBackground />
          
          {/* High-tech grid overlay */}'''

text = text.replace('''        {/* Enhanced Advanced Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* High-tech grid overlay */}''', hero_bg_replacement)

with open('src/pages/Internship.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('Neural Network Added')
