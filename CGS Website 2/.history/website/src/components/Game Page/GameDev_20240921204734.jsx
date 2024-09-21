import React, { useState, useEffect, useRef } from 'react';
import AOS from "aos";
import './GameDev.css';
import game1 from "../../assets/RND.png"

const GameDev = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
    });
  }, []);
  const [visibleSections, setVisibleSections] = useState([]);

  const actionGames = [
    { id: 1, name: 'Game 1', image: {game1} },
    { id: 2, name: 'Game 2', image: {game1} },
    { id: 3, name: 'Game 3', image: {game1} },
    { id: 4, name: 'Game 4', image: {game1} },
    { id: 5, name: 'Game 5', image: {game1} },
  ];

  const storyGames = [
    { id: 6, name: 'Game 6', image: {game1} },
    { id: 7, name: 'Game 7', image: {game1} },
    { id: 8, name: 'Game 8', image: {game1} },
    { id: 9, name: 'Game 9', image: {game1} },
    { id: 10, name: 'Game 10', image: {game1 }},
  ];
  const puzzleGames = [
    { id: 11, name: 'Game 11', image: {game1} },
    { id: 12, name: 'Game 12', image: {game1} },
    { id: 13, name: 'Game 13', image: {game1} },
    { id: 14, name: 'Game 14', image: {game1} },
    { id: 15, name: 'Game 15', image: {game1} },
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
      

    setVisibleSections(newVisibleSections);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="netflix-page">
      {/* Main Carousel Section */}
      <div className="carousel">
        <div
          className="carousel-image"
          style={{ backgroundImage: {game1} }}
        >
          <div className="carousel-overlay">
            <h1>Main Carousel</h1>
          </div>
        </div>
      </div>

      <section className="bg text-white pb-12 font-roboto">
  <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
      <div data-aos="zoom-in">
        <img
          src={game1}
          alt=""
          className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
        />
      </div>
    </div>
  </div>
</section>

<div className="card-sections">
  {/* Action Games Section */}
  <section className="bg text-white pb-12 font-roboto">
    <div className="container">
      <h2 className="section-title">Action Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
        {actionGames.map((game) => (
          <div data-aos="zoom-in" key={game.id} className="card">
            <div className="card-inner">
              <div className="card-front">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${game.image})` }}
                >
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
  </section>

  {/* Repeat for Story Games and Puzzle Games */}
  <section className="bg text-white pb-12 font-roboto">
    <div className="container">
      <h2 className="section-title">Story Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
        {storyGames.map((game) => (
          <div data-aos="zoom-in" key={game.id} className="card">
            <div className="card-inner">
              <div className="card-front">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${game.image})` }}
                >
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
  </section>

  <section className="bg text-white pb-12 font-roboto">
    <div className="container">
      <h2 className="section-title">Puzzle Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
        {puzzleGames.map((game) => (
          <div data-aos="zoom-in" key={game.id} className="card">
            <div className="card-inner">
              <div className="card-front">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${game.image})` }}
                >
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
  </section>
</div>

   
     
    </div>
  );
};

export default GameDev;
