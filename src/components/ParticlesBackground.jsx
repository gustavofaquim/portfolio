// src/components/ParticlesBackground.jsx
import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 35,
            density: { enable: true, value_area: 800 }
          },
          color: { value: '#ffffff' },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.3
          },
          size: {
            value: 1.5
          },
          move: {
            enable: true,
            speed: 2
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse'
            }
          }
        }
      });
    }
  }, []);

  return <div id="particles-js" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />;
};

export default ParticlesBackground;
