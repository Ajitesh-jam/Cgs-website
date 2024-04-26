import React from 'react';
import './App.css'; // Assuming you have CSS files for components
import './components/carousel.css'; // Assuming you have carousel CSS
import folderIcon from './assets/folder-icon.svg'; // Assuming you have folder icon image


function Homepage() {
  return (
    <div className="outer-container" id="outer-container">
      <nav id="top-nav">
        <ul>
          <li><button onClick={() => window.location.reload(true)}>Restart</button></li>
          <li><a href="/">COMPUTER GRAPHICS SOCIETY</a></li>
          <li><button>Leave a message...</button></li>
        </ul>
      </nav>
      <div className="inner-container">
        <nav id="side-nav">
          <ul>
            <li>
              <button className="side-nav-button about-us">
                <img src={folderIcon} alt="" />
                <p>About us</p>
              </button>
            </li>
            <li>
              <button className="side-nav-button what-we-do">
                <img src={folderIcon} alt="" />
                <p>What we do</p>
              </button>
            </li>
            <li>
              <button className="side-nav-button our-games">
                <img src={folderIcon} alt="" />
                <p>Our Games</p>
              </button>
            </li>
            <li>
              <button className="side-nav-button our-graphics">
                <img src={folderIcon} alt="" />
                <p>Our Graphics</p>
              </button>
            </li>
            <li>
              <button className="side-nav-button blog">
                <img src={folderIcon} alt="" />
                <p>Blog</p>
              </button>
            </li>
          </ul>
        </nav>
        <div id="Main">
          <section className="wrapper about-us draggable hidden" id="about-us">
            <header>About us<button className="close-button">X</button></header>
            <div className="content"></div>
          </section>
          <section className="wrapper what-we-do draggable hidden" id="what-we-do">
            <header>What we do<button className="close-button">X</button></header>
            <div className="content"></div>
          </section>
          <section className="wrapper our-games full-wrapper hidden" id="our-games">
            <header>Our Games<button className="close-button">X</button></header>
            <div className="content">
              <div className="gallery">
                <div className="gallery-container" id="gallery-container">
                  {/* 
                  <div className="gallery-item gallery-item-1" data-index="1"><img src="./img-alt/holiday.jpg"></div>
                  <div className="gallery-item gallery-item-2" data-index="2"><img src="./img-alt/pass-thumbnail.png"></div>
                  <div className="gallery-item gallery-item-3" data-index="3"><img src="./img-alt/risky-thumbnail.png"></div>
                  <div className="gallery-item gallery-item-4" data-index="4"><img src="./img-alt/smiling-thumbnail.png"></div>
                  <div className="gallery-item gallery-item-5" data-index="5"><img src="./img-alt/space-thumbnail.png"></div>
                  <div className="gallery-item" data-index="6"><img src="./img-alt/thief-thumbnail.png"></div>
                  <div className="gallery-item" data-index="7"><img src="./img-alt/velocity-thumbnail.png"></div>
                  */}
                </div>
              </div>
              <div className="gallery-controls">
                {/* 
                <button className="gallery-controls-previous">previous</button>
                <button className="gallery-controls-next">next</button>
                */}
              </div>
            </div>
          </section>
          <section className="wrapper our-graphics draggable hidden" id="our-graphics">
            <header>Our Graphics<button className="close-button">X</button></header>
            <div className="content"></div>
          </section>
          <section className="wrapper blog draggable hidden" id="blog">
            <header>Blog<button className="close-button">X</button></header>
            <div className="content"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
