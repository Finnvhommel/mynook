import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
  tx: number;
  ty: number;
}

function FloatingDust() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 20 + Math.random() * 40,
      tx: (Math.random() - 0.5) * 300,
      ty: (Math.random() - 0.5) * 300,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-dust"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: '#CFA76E',
            '--duration': `${particle.duration}s`,
            '--tx': `${particle.tx}px`,
            '--ty': `${particle.ty}px`,
          } as React.CSSProperties & { '--duration': string; '--tx': string; '--ty': string }}
        />
      ))}
    </>
  );
}

export default FloatingDust;
