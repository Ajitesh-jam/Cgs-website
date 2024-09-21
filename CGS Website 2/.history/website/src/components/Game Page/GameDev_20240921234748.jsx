import React, { useEffect } from 'react';
import AOS from "aos";
import './GameDev.css';
import game1 from "../../assets/RND.png";

const GameDev = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
    });
  }, []);

  const actionGames = [
    { id: 1, name: 'Game 1', image: game1 },
    { id: 2, name: 'Game 2', image: game1 },
    { id: 3, name: 'Game 3', image: game1 },
    { id: 4, name: 'Game 4', image: game1 },
    { id: 5, name: 'Game 5', image: game1 },
  ];

  const storyGames = [
    { id: 6, name: 'Game 6', image: game1 },
    { id: 7, name: 'Game 7', image: game1 },
    { id: 8, name: 'Game 8', image: game1 },
    { id: 9, name: 'Game 9', image: game1 },
    { id: 10, name: 'Game 10', image: game1 },
  ];

  const puzzleGames = [
    { id: 11, name: 'Game 11', image: game1 },
    { id: 12, name: 'Game 12', image: game1 },
    { id: 13, name: 'Game 13', image: game1 },
    { id: 14, name: 'Game 14', image: game1 },
    { id: 15, name: 'Game 15', image: game1 },
  ];

  return (
    <div className="netflix-page">
      {/* Main Carousel Section */}
      <div className="carousel">
        <div
          className="carousel-image"
          style={{ backgroundImage: `url(${game1})` }}
        >
          <div className="carousel-overlay">
            <h1>Main Carousel</h1>
          </div>
        </div>
      </div>

      {/* Action Games Section */}
      <div className="card-sections">
        <div className="card-section-container">
          <h2 className="section-title">Action Games</h2>
          <div className="card-section">
            {actionGames.map((game) => (
              <div className="card" key={game.id} data-aos="zoom-in">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-image" style={{ backgroundImage: `url(${game.image})` }}>
                      <div className="card-name">
                        <h2>{game.name}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <h2>{game.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        

        {/* Story Games Section */}
        <div className="card-sections">
        <div className="card-section-container">
          <h2 className="section-title">Action Games</h2>
          <div className="card-section">
            {actionGames.map((game) => (
              <div className="card" key={game.id} data-aos="zoom-in">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-image" style={{ backgroundImage: `url(${game.image})` }}>
                      <div className="card-name">
                        <h2>{game.name}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <h2>{game.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* Puzzle Games Section */}
        <div className="card-section-container">
          <h2 className="section-title">Puzzle Games</h2>
          <div className="card-section">
            {puzzleGames.map((game) => (
              <div className="card" key={game.id} data-aos="zoom-in">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-image" style={{ backgroundImage: `url(${game.image})` }}>
                      <div className="card-name">
                        <h2>{game.name}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <h2>{game.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
</div>
    
  );
};

export default GameDev;
