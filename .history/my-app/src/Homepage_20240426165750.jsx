import './App.css'; // Assuming you have CSS files for components
import './components/carousel.css'; // Assuming you have carousel CSS
import folderIcon from './assets/folder-icon.svg'; // Assuming you have folder icon image
import './Homepage.css';


import React, { useEffect, useState } from 'react';
import { Draggable } from "gsap/dist/Draggable";
import Carousel from './components/carousel';

import { populateGames } from './components/games';
import { gsap } from "gsap/dist/gsap";
gsap.registerPlugin(Draggable);
function Homepage() {
    const [activeWrapper, setActiveWrapper] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [stackArray, setStackArray] = useState([]);
    const wrapper = document.querySelectorAll(".wrapper");

    function handleClick(e) {
        if (activeWrapper !== null && activeSection !== null) {
            return;
        } else if (activeWrapper === e.target.parentElement) {
            setActiveSection(e.target);
        } else {
            setActiveWrapper(e.target.parentElement);
            setActiveSection(e.target);
        }
    };


    function openFolder(e) {
        let sectionToOpen = stackArray.find(section => section === e.target.parentElement.classList[1]);
        if (!sectionToOpen || activeSection === null) {
            setStackArray([...stackArray, e.target.parentElement.classList[1]]);
        } else {
            let indexOfSection = stackArray.findIndex(activeSection);   
            let tempArray = stackArray.slice(indexOfSection + 1);  
            setStackArray([...stackArray.slice(0, indexOfSection), ...tempArray]);
        }
        
        gsap.timeline().to(activeSection, { duration: 0.5, opacity: 0, onComplete: () => {
            setActiveSection(e.target.parentElement);
            gsap.to(e.target.parentElement, { duration: 0.5, opacity: 1 });
        }});
    };
    
    window.addEventListener("load", () => {
        // Add event listeners to each button in the navigation menu
        for (let i=2; i<7; i++) {
            document.querySelector(`.side-nav-button:nth-child(${i})`).addEventListener("click", handleClick);
        }
        document.getElementById(`navBtn${i}`).addEventListener("click", closeSection);
        document.getElementById('closeNav').addEventListener("click", closeSection);

        // Add click and keydown events to each folder/section
        document.querySelectorAll('.folder').forEach(folder => {
            folder.addEventListener("click", openFolder);
            folder.addEventListener("keydown", openFolder);
        });

        // Set initial active wrapper and section when page loads
        setActiveWrapper(document.getElementsByClassName('wrapper')[0]);
        setActiveSection(document.getElementsByClassName('section')[0]);
    });
    useEffect(() => {
      // Initialize draggable elements
      const draggables = document.querySelectorAll(".draggable");
      for (let i = 0; i < draggables.length; i++) {
        Draggable.create(`#${draggables[i].classList[1]}`, {
          bounds: "#outer-container",
        });
      }
      
      // Populate games
      populateGames('./components/games.json').then(() => {
        const galleryContainer = document.querySelector(".gallery-container");
        const galleryControls = [{ name: 'previous', text: '<' }, { name: 'next', text: '>' }];
        const galleryItems = document.querySelectorAll(".gallery-item");
  
        const myCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
  
        myCarousel.setControls();
        myCarousel.useControls();
      });
    }, []);
    function closeSection() {
        let currentSection = document.getElementsByClassName('section')[0];
        if (!currentSection.classList.contains('hidden')) {
            currentSection.classList.add('hidden');
            document.getElementById('content').style.zIndex = 1;
            document.getElementById('navigation').style.zIndex = 1;
        } else {
            alert('This section is already closed!');
        }
    };
  
    const handleMouseDown = (e, item) => {
      e.preventDefault();
      item.children[0].classList.add("active");
      push_(item.children[0]);
    };
  
    const handleMouseUp = () => {
      let activeWrapper = document.querySelector('.active');
      push_(activeWrapper);
      if (activeWrapper) {
        activeWrapper.classList.remove("active");
      }
    };
  
    const handleSectionClick = (item) => {
      const sectionClass = item.classList[1];
      const activeSection = document.querySelector(`.${sectionClass}`);
      setActiveSection(activeSection);
      setActiveWrapper(activeSection);
      push_(activeSection);
    };

  
    const handleCloseButtonClick = (item) => {
      item.parentElement.parentElement.classList.add('hidden');
      stackArray.pop();
      console.log(stackArray);
      displayZIndex();
    };
  
    const push_ = (activeHeader) => {
      if (activeHeader) {
        const active = activeHeader.parentElement.classList[1];
        if (stackArray.includes(active)) {
          let i = stackArray.length - 1; 
          let l = i;
          let tempArray = [];
          for (; i >= 0; i--) {
            if (stackArray[i] === active) {
              break;
            }
            tempArray.push(stackArray[i]);
            stackArray.pop();
          }
          stackArray.pop();
          let j = l - i - 1;
          for (; j >= 0; j--) {
            stackArray.push(tempArray[j]);
            tempArray.pop();
          }
          stackArray.push(active);
        } else {
          setStackArray([...stackArray, active]);
        }
        displayZIndex();
        console.log(stackArray);
      }
    };
  
    const displayZIndex = () => {
      if (stackArray.length) {
        for (let i = 0; i < stackArray.length; i++) {
          for (let j = 0; j < wrapper.length; j++) {
            if (wrapper[j].classList[1] === stackArray[i]) {
              wrapper[j].style.zIndex = i + 2;
              break;
            }
          }
        }
      }
    };




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




