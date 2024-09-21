import React, { useState, useEffect, useRef } from 'react';
import './NetflixStylePage.css';

const NetflixStylePage = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  const actionGames = [
    { id: 1, name: 'Action Game 1', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Action Game 2', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Action Game 3', image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Action Game 4', image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Action Game 5', image: 'https://via.placeholder.com/300' },
  ];

  const storyGames = [
    { id: 6, name: 'Story Game 1', image: 'https://via.placeholder.com/300' },
    { id: 7, name: 'Story Game 2', image: 'https://via.placeholder.com/300' },
    { id: 8, name: 'Story Game 3', image: 'https://via.placeholder.com/300' },
    { id: 9, name: 'Story Game 4', image: 'https://via.placeholder.com/300' },
    { id: 10, name: 'Story Game 5', image: 'https://via.placeholder.com/300' },
  ];

  const sectionsRef = useRef([]);

  // Handle scroll visibility
  const handleScroll = () => {
    const scrollY = window.scrollY + window.innerHeight;
    const newVisibleSections = sectionsRef.current
      .map((section, index) => {
        const rect = section.getBoundingClientRect();
        if (scrollY > rect.top + window.scrollY) {
          return index;
        }
        return -1;
      })
      .filter((index) => index !== -1);

    setVisibleSections(newVisibleSections);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="netflix-page">
      <div className="carousel">
        <div
          className="carousel-image"
          style={{ backgroundImage: 'url(https://via.placeholder.com/1500x600)' }}
        >
          <div className="carousel-overlay">
            <h1>Main Carousel</h1>
          </div>
        </div>
      </div>

      <div className="card-sections">
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className={`card-section-container ${
            visibleSections.includes(0) ? 'fade-in' : ''
          }`}
        >
          <h2 className="section-title">Action Games</h2>
          <div className="card-section">
            {actionGames.map((game) => (
              <div className="card" key={game.id} style={{ backgroundImage: `url(${game.image})` }}>
                <div className="card-overlay">
                  <h2>{game.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className={`card-section-container ${
            visibleSections.includes(1) ? 'fade-in' : ''
          }`}
        >
          <h2 className="section-title">Story Games</h2>
          <div className="card-section">
            {storyGames.map((game) => (
              <div className="card" key={game.id} style={{ backgroundImage: `url(${game.image})` }}>
                <div className="card-overlay">
                  <h2>{game.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixStylePage;
