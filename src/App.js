import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [glitchText, setGlitchText] = useState('REALM');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Efecto de glitch en el título
    const glitchInterval = setInterval(() => {
      const glitchChars = ['R', 'Ř', 'Ŕ', 'Ř', 'E', 'Ë', 'É', 'A', 'Á', 'À', 'L', 'Ł', 'Ĺ', 'M', 'М', 'Μ'];
      let glitched = 'REALM'.split('').map(char => {
        return Math.random() < 0.1 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char;
      }).join('');
      setGlitchText(glitched);
      
      setTimeout(() => setGlitchText('REALM'), 100);
    }, 3000);

    // Generar partículas flotantes
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="App">
      <div className="particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDuration: `${particle.speed}s`
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="header-section">
          <div className="logo-container">
            <img src="/logo.png" alt="REALM Logo" className="logo" />
            <div className="logo-glow"></div>
          </div>
          <h1 className="title neon-text">{glitchText}</h1>
          <div className="beta-badge neon-badge">
            <span className="badge-text">FASE BETA</span>
            <span className="badge-status">TERMINADA</span>
          </div>
        </div>

        <div className="content-section">
          <div className="message-card">
            <div className="card-header">
              <span className="icon">🚀</span>
              <h3 className="card-title">Nueva Versión en Camino</h3>
            </div>
            <p className="card-text">
              Se procederá a migrar a una nueva versión según los cambios y mejoras sugeridas.
            </p>
          </div>

          <div className="message-card">
            <div className="card-header">
              <span className="icon">🙏</span>
              <h3 className="card-title">Agradecimientos</h3>
            </div>
            <p className="card-text">
              Agradecemos a todos los que participaron hasta el momento.
            </p>
            <p className="card-text highlight">
              El ranking de referidos se estará pagando fin de mes.
            </p>
            <p className="card-text">Pedimos las disculpas del caso.</p>
          </div>

          <div className="message-card">
            <div className="card-header">
              <span className="icon">💾</span>
              <h3 className="card-title">Tu Progreso Está Seguro</h3>
            </div>
            <p className="card-text">
              El progreso se guardará. Se espera que en este plazo se verifique ya la aplicación.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <p className="footer-text neon-text-small">
            Gracias por ser parte de REALM
          </p>
        </div>
      </div>

      <div className="background-effects">
        <div className="grid-overlay"></div>
        <div className="scan-line"></div>
      </div>
    </div>
  );
}

export default App;