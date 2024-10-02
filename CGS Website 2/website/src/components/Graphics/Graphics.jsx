import React, { useState, useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';  // Import AOS styles
import game1 from "../../assets/Vansh.png";
import game2 from "../../assets/Rnd.png";
import game3 from "../../assets/cgsLogoWithoutBg.png";
import './Graphics.css'; // Custom styles for the page

const Graphics = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const [selectedGame, setSelectedGame] = useState(null); // State to track selected game for popup
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to track popup visibility

  const carouselGames = [game1, game2, game3];

  const games = [
    { id: 1, name: 'Game 1', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
    { id: 2, name: 'Game 2', image: game2, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
    { id: 3, name: 'Game 3', image: game3, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
    { id: 4, name: 'Game 4', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
    { id: 5, name: 'Game 5', image: game2, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
    });

    const interval = setInterval(() => {
      setCurrentGame((prevGame) => (prevGame + 1) % carouselGames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselGames]);

  const handleCardClick = (game) => {
    setSelectedGame(game);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="graphics-page">
      {/* Carousel Section */}
      <div className="carousel">
        <div
          className="carousel-image"
          style={{ backgroundImage: `url(${carouselGames[currentGame]})` }}
        >
          <div className="carousel-overlay">
            <h1>Graphics Development</h1>
          </div>
        </div>
      </div>

      {/* Circular Cards Section */}
      <div className="cards-section">
        <h2 className="section-title">Explore Graphics</h2>
        <div className="cards-container">
          {games.map((game) => (
            <div
              key={game.id}
              className="w-[20vw] h-[20vw] bg-black border-2 border-white rounded-full shadow-lg transition-transform transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-once="true"
              onClick={() => handleCardClick(game)}
            >
              <div className="relative w-full h-full hover:scale-110 transition-transform duration-300">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-75 py-2 rounded-b-full">
                  <h2 className="text-center text-lg text-white">{game.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <Satellite/>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-800 p-6 rounded-lg w-[90%] max-w-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-pink-400">{selectedGame.name}</h2>
              <button
                className="text-white text-3xl focus:outline-none"
                onClick={handleClosePopup}
              >
                &times;
              </button>
            </div>
            <div className="text-center">
              <img
                src={selectedGame.image}
                alt={selectedGame.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl text-pink-400">
                Creator:{" "}
                <a
                  href={selectedGame.linkedin}
                  className="cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedGame.creator}
                </a>
              </h3>
              <p className="mt-4 text-white">Description: This is a sample description for the selected game.</p>
              <p className="mt-2 text-pink-400 cursor-pointer">
                Download Link: Download {selectedGame.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphics;


import featuredGame from "../../assets/parag.mp4";
import featuredAnimation from "../../assets/animation.mp4";
import featuredAnimation2 from "../../assets/animation2.mp4";

const Satellite = () => {
  return (
    <>
      {/* Featured Game Section */}
      <div className="shadow-lg shadow-black m-0">
      <section className="bg-black text-white py-12 border-b-2 border-white" id="satellite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="space-y-4 p-4">
              <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="text-pink-500 uppercase">
                FEATURED NEW GAME
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-4xl md:text-5xl font-bold">
                Soul Magician
              </h1>
              <p data-aos="fade-up" data-aos-delay="700" data-aos-once="true" className="text-base md:text-lg leading-relaxed">
                In this 2D RPG map-clear game, players unlock unique powers and cast powerful spells to defeat enemies.
                Navigate through dynamic levels, use strategic spellcasting, and shoot projectiles to clear waves of
                enemies while upgrading abilities and discovering new powers along the way.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-once="true"
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Play Game...
              </button>
            </div>
            {/* Video Section */}
            <div data-aos="zoom-in">
              <video autoPlay loop muted className="w-full max-h-[350px] object-cover rounded-lg shadow-lg">
                <source src={featuredGame} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Animation Section */}
      <section className="bg-black text-white py-12 border-b-2 border-white" id="satellite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="space-y-4 p-4">
              <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="text-pink-500 uppercase">
                FEATURED ANIMATIONS
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-4xl md:text-5xl font-bold">
                Product Advertisement
              </h1>
              <p data-aos="fade-up" data-aos-delay="700" data-aos-once="true" className="text-base md:text-lg leading-relaxed">
                An engaging animated product advertisement that brings your brand to life with captivating visuals,
                dynamic motion, and creative storytelling. Perfect for showcasing features, explaining concepts, and
                grabbing attention with vibrant animations that leave a lasting impression.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-once="true"
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Play Animations...
              </button>
            </div>
            {/* Video Section */}
            <div data-aos="zoom-in">
              <video autoPlay loop muted className="w-full max-h-[350px] object-cover rounded-lg shadow-lg">
                <source src={featuredAnimation} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Second Featured Animation Section */}
      <section className="bg-black text-white py-12 border-b-2 border-white" id="satellite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="space-y-4 p-4">
              <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="text-pink-500 uppercase">
                FEATURED ANIMATIONS
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-4xl md:text-5xl font-bold">
                Product Advertisement
              </h1>
              <p data-aos-once="true" data-aos="fade-up" data-aos-delay="700" className="text-base md:text-lg leading-relaxed">
                An engaging animated product advertisement that brings your brand to life with captivating visuals,
                dynamic motion, and creative storytelling. Perfect for showcasing features, explaining concepts, and
                grabbing attention with vibrant animations that leave a lasting impression.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-once="true"
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Play Animations...
              </button>
            </div>
            {/* Video Section */}
            <div data-aos="zoom-in">
              <video autoPlay loop muted className="w-full max-h-[350px] object-cover rounded-lg shadow-lg">
                <source src={featuredAnimation2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-black text-white py-12 border-b-2 border-white" id="satellite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="space-y-4 p-4">
              <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="text-pink-500 uppercase">
                FEATURED ANIMATIONS
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-4xl md:text-5xl font-bold">
                Product Advertisement
              </h1>
              <p data-aos-once="true" data-aos="fade-up" data-aos-delay="700" className="text-base md:text-lg leading-relaxed">
                An engaging animated product advertisement that brings your brand to life with captivating visuals,
                dynamic motion, and creative storytelling. Perfect for showcasing features, explaining concepts, and
                grabbing attention with vibrant animations that leave a lasting impression.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-once="true"
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Play Animations...
              </button>
            </div>
            {/* Video Section */}
            <div data-aos="zoom-in">
              <video autoPlay loop muted className="w-full max-h-[350px] object-cover rounded-lg shadow-lg">
                <source src={featuredAnimation2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};


