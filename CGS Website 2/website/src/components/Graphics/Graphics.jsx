import React, { useState, useEffect } from 'react';
import AOS from "aos";
import './graphics.css';
import Graphics1 from "../../assets/Vansh.png";
import Graphics2 from "../../assets/RND.png";
import Graphics3 from "../../assets/cgsLogoWithoutBg.png";
import { useNavigate } from 'react-router-dom';

const Graphics = () => {
  const [currentGraphics, setCurrentGraphics] = useState(0);
  const [selectedGraphics, setSelectedGraphics] = useState(null); // State to track selected Graphics for popup
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to track popup visibility

  const carouselGraphicss = [Graphics1, Graphics2, Graphics3]; 

  const actionGraphicss = [
    { id: 1, name: 'Graphics 1', image: Graphics1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
    { id: 2, name: 'Graphics 2', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 3, name: 'Graphics 3', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 4, name: 'Graphics 4', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 5, name: 'Graphics 5', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
  ];  
  
  const storyGraphicss = [  
    { id: 6, name: 'Graphics 6', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 7, name: 'Graphics 7', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 8, name: 'Graphics 8', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 9, name: 'Graphics 9', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 10, name: 'Graphics 10', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
  ];

  const puzzleGraphicss = [
    { id: 11, name: 'Graphics 11', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 12, name: 'Graphics 12', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 13, name: 'Graphics 13', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 14, name: 'Graphics 14', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
    { id: 15, name: 'Graphics 15', image: Graphics1, creator: 'Ajitesh', linkedin: '' },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
    });

    const interval = setInterval(() => {
      setCurrentGraphics((prevGraphics) => (prevGraphics + 1) % carouselGraphicss.length);
    }, 3000);

    // Listen for URL hash changes and trigger popup if a valid Graphics ID is found
    const handleHashChange = () => {
      const GraphicsId = window.location.hash.replace('#', ''); // Get the ID from the URL hash
      if (GraphicsId) {
        const allGraphicss = [...actionGraphicss, ...storyGraphicss, ...puzzleGraphicss];
        const selected = allGraphicss.find(Graphics => Graphics.id === parseInt(GraphicsId));
        if (selected) {
          setSelectedGraphics(selected);
          setIsPopupVisible(true);
        }
      }
    };

    // Attach event listener for hashchange
    window.addEventListener('hashchange', handleHashChange);

    // Call handler for initial page load
    handleHashChange();

    return () => {
      clearInterval(interval);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleCardClick = (Graphics) => {
    setSelectedGraphics(Graphics);
    setIsPopupVisible(true);
    window.history.pushState(null, '', `/Graphics#${Graphics.id}`);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    window.history.pushState(null, '', '/Graphics');
  };

  return (
    <div className="netflix-page">

      {/* Main Carousel Section */}
      {/* <div className="carousel">
        <div
          className="carousel-image"
          style={{ backgroundImage: `url(${carouselGraphicss[currentGraphics]})` }}
        >
          <div className="carousel-overlay">
            <h1>Graphics Development</h1>
          </div>
        </div>
      </div> */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${carouselGraphicss[currentGraphics]})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg"><b>Graphics Development</b></h1>
          </div>
        </div>
      </div>

      {/* Action Graphicss Section */}
      <div className="card-sections">
        <div className="card-section-container">
          <h2 className="section-title" data-aos="zoom-in">Action Graphicss</h2>
          <div className="card-section">
            {actionGraphicss.map((Graphics) => (
              <div className="card" key={Graphics.id} data-aos="zoom-in">
                <div className="card-inner" onClick={() => handleCardClick(Graphics)}>
                  <div className="card-front">
                    <div className="card-image" style={{ backgroundImage: `url(${Graphics.image})` }}>
                      <div className="card-name">
                        <h2>{Graphics.name}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <h2>{Graphics.name} Made by <a href={Graphics.linkedin}> {Graphics.creator}</a></h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Graphicss Section */}
        <div className="card-section-container">
          <h2 className="section-title">Story Graphicss</h2>
          <div className="card-section">
            {storyGraphicss.map((Graphics) => (
              <div className="card" key={Graphics.id} onClick={() => handleCardClick(Graphics)}>
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-image" style={{ backgroundImage: `url(${Graphics.image})` }}>
                      <div className="card-name">
                        <h2>{Graphics.name}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <h2>{Graphics.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Puzzle Graphicss Section */}
        <div className="card-section-container">
          <h2 className="section-title">Puzzle Graphicss</h2>
          <div className="card-section">
            {puzzleGraphicss.map((Graphics) => (
              <div className="card" key={Graphics.id} onClick={() => handleCardClick(Graphics)}>
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-image" style={{ backgroundImage: `url(${Graphics.image})` }}>
                      <div className="card-name">
                        <h2>{Graphics.name}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <h2>{Graphics.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal for Selected Graphics */}
      {isPopupVisible && (
        <div className="Graphics-popup">
          <div className="Graphics-popup-content">
            <div className="popup-header">
              <h2>{selectedGraphics.name}</h2>
              <button className="close-popup" onClick={handleClosePopup}>X</button>
            </div>
            <div className="popup-body">
              <img src={selectedGraphics.image} alt={selectedGraphics.name} className="popup-image" />
              <h3>Creator: <a href={selectedGraphics.linkedin}>{selectedGraphics.creator}</a></h3>
              <p>Description: This is a sample description for the selected Graphics. Replace this with actual Graphics description.</p>
              <p>Download Link: <a href="#">Download {selectedGraphics.name}</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphics;
