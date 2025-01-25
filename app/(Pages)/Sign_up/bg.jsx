import React from 'react';

export default function GrainyBackground() {
  const grainyStyle = {
    backgroundColor: '#ffffff', // White base
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' fill='%23e0e0e0'%3E%3Crect width='1' height='1'/%3E%3C/svg%3E")`, // Grain texture
    backgroundRepeat: 'repeat',
    backgroundSize: '1px 1px',
    opacity: 0.9,
    height: '100vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <div style={grainyStyle}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2rem', color: '#333', fontWeight: 'bold' }}>
          Subtle Grainy Background
        </h1>
        <p style={{ color: '#666' }}>
          Perfect for a modern, textured design.
        </p>
      </div>
    </div>
  );
}