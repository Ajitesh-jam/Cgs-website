import React, { useState, useEffect } from 'react';
import './NetflixStylePage.css';

const GameDev = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const games = [
    { id: 1, name: 'Game 1', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Game 2', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Game 3', image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Game 4', image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Game 5', image: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Game 6', image: 'https://via.placeholder.com/300' },
    { id: 7, name: 'Game 7', image: 'https://via.placeholder.com/300' },
    { id: 8, name: 'Game 8', image: 'https://via.placeholder.com/300' },
    { id: 9, name: 'Game 9', image: 'https://via.placeholder.com/300' },
    { id: 10, name: 'Game 10', image: 'https://via.placeholder.com/300' },
  ];

  // Carousel auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % games.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [games.length]);

  return (
    <div className="netflix-page">
      <div className="carousel">
        {games.map((game, index) => (
          <div
            key={game.id}
            className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${game.image})` }}
          >
            <div className="carousel-overlay">
              <h1>{game.name}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="card-sections">
        {games.map((game, index) => (
          <div className="card-section" key={index}>
            <div className="card" style={{ backgroundImage: `url(${game.image})` }}>
              <div className="card-overlay">
                <h2>{game.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameDev;

