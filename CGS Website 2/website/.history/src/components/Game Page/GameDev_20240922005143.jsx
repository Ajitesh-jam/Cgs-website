import React, { useState, useEffect } from 'react';
import AOS from "aos";
import './GameDev.css';
import game1 from "../../assets/Vansh.png";
import game2 from "../../assets/Rnd.png";  // Replace with actual game images
import game3 from "../../assets/cgsLogoWithoutBg.png";  // Replace with actual game images
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const GameDev = () => {
  const [currentGame, setCurrentGame] = useState(0);

  const carouselGames = [game1, game2, game3]; // Array of carousel game images

  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
    });

    // Carousel auto-change logic
    const interval = setInterval(() => {
      setCurrentGame((prevGame) => (prevGame + 1) % carouselGames.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const actionGames = [
    { id: 1, name: 'Game 1', image: game1   ,creator:'Ajitesh' ,linkdin:'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/'},
    { id: 2, name: 'Game 2', image: game1   ,creator:'Ajitesh' ,linkdin:''},
    { id: 3, name: 'Game 3', image: game1   ,creator:'Ajitesh' ,linkdin:''},
    { id: 4, name: 'Game 4', image: game1   ,creator:'Ajitesh' ,linkdin:''},
    { id: 5, name: 'Game 5', image: game1   ,creator:'Ajitesh' ,linkdin:''},
  ];   
  const storyGames = [  
    { id: 6, name: 'Game 6', image: game1   ,creator:'Ajitesh' ,linkdin:''},
    { id: 7, name: 'Game 7', image: game1   ,creator:'Ajitesh' ,linkdin:''},
    { id: 8, name: 'Game 8', image: game1   ,creator:'Ajitesh' ,linkdin:''},
    { id: 9, name: 'Game 9', image: game1   ,creator:'Ajitesh' ,linkdin:''},
    { id: 10, name: 'Game 10', image: game1 ,creator:'Ajitesh' ,linkdin:''},
  ]; 
  const puzzleGames = [ 
    { id: 11, name: 'Game 11', image: game1 ,creator:'Ajitesh' ,linkdin:''},
    { id: 12, name: 'Game 12', image: game1 ,creator:'Ajitesh' ,linkdin:''},
    { id: 13, name: 'Game 13', image: game1 ,creator:'Ajitesh' ,linkdin:''},
    { id: 14, name: 'Game 14', image: game1 ,creator:'Ajitesh' ,linkdin:''},
    { id: 15, name: 'Game 15', image: game1 ,creator:'Ajitesh' ,linkdin:''},
  ];

  const navigate = useNavigate();

  const handleNavigation = (name) => {
    navigate(`/GameDev/${name}`);
  };

  return (
    <div className="netflix-page">
      <Navbar />
      <br></br>
      <br><br></br></br>

      {/* Main Carousel Section */}
      <div className="carousel">
        <div
          className="carousel-image"
          style={{ backgroundImage: `url(${carouselGames[currentGame]})` }}
        >
          <div className="carousel-overlay">
            <h1>Game Development </h1>
          </div>
        </div>
      </div>

      {/* Action Games Section */}
      <div className="card-sections">
        <div className="card-section-container">
          <h2 className="section-title" data-aos="zoom-in">Action Games</h2>
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
                    <h2>{game.name} Made by <a href={game.linkdin}> {game.creator}</a></h2>
                    
                    <p>
                    <br></br><br></br>
                    <button
                      onClick={() => handleNavigation(game.name)}
                      className="navigate-button"
                     
                    >
                      Go to {game.name}
                    </button>

                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Games Section */}
        <div className="card-section-container">
          <h2 className="section-title" >Story Games</h2>
          <div className="card-section">
            {storyGames.map((game) => (
              <div className="card" key={game.id} >
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
                    {/* Add navigation or any additional content */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Puzzle Games Section */}
        <div className="card-section-container">
          <h2 className="section-title" >Puzzle Games</h2>
          <div className="card-section">
            {puzzleGames.map((game) => (
              <div className="card" key={game.id} >
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
                    {/* Add navigation or any additional content */}
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
