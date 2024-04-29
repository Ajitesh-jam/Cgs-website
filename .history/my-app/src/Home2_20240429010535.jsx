import React from 'react';

import './Home2.css';

// LandingPage component
function LandingPage() {
    return (
        <div className="landing-page">
            <div className="intro">
                <div className="text">
                    <h3>Step into a world of endless fun!</h3>
                    <p>Explore our collection of the latest releases and timeless classics, across all platforms.</p>
                </div>
                <ul className="platforms">
                    <li><a href="pc.html" title="PC"><i className="fa-solid fa-desktop fa-fw"></i>Games</a></li>
                    <li><a href="playstation.html" title="Playstation"><i className="fa-brands fa-playstation fa-fw"></i>Graphics</a></li>
                    <li><a href="xbox.html" title="Xbox"><i className="fa-brands fa-xbox fa-fw"></i>Events</a></li>
                </ul>
            </div>
            <a href="#Our-Services" className="arrow-to-section"><i className="fa-solid fa-angles-down"></i></a>
            <div className="bullets">
                <span id="land-1" className="active"></span>
                <span id="land-2"></span>
                <span id="land-3"></span>
                <span id="land-4"></span>
                <span id="land-5"></span>
                <span id="land-6"></span>
            </div>
        </div>
    );
}

// OurServices component
function OurServices() {
    return (
        <div className="Our-Services" id="Our-Services">
            <div className="container">
                <h2 className="section-heading aos-init aos-animate" data-aos-duration="1100" data-aos="fade-up" style={{ margin: '0 auto' }}>Our Services</h2>
                <div className="services">
                    <ServiceBox icon="fa-solid fa-credit-card fa-fw" title="Online Purchasing" description="buy your favourite games directly from our website." />
                    <ServiceBox icon="fa-solid fa-truck-fast fa-fw" title="Hard Copy" description="Ship physical game copies and accessories to your address." />
                    <ServiceBox icon="fa-solid fa-microchip" title="Hardware components" description="You can buy hardware components directly from our website." />
                    <ServiceBox icon="fa-solid fa-handshake fa-fw" title="Returns and Refunds" description="Provide a clear policy for returns and refunds for both physical and digital purchases." />
                    <ServiceBox icon="fa-solid fa-memory fa-fw" title="System Requirements" description="Check game system requirements before purchasing to ensure compatibility with your setup." />
                    <ServiceBox icon="fa-solid fa-newspaper fa-fw" title="Gaming News" description="Latest updates and announcements from the gaming industry." />
                </div>
            </div>
        </div>
    );
}

// ServiceBox component
function ServiceBox({ icon, title, description }) {
    return (
        <div className="box">
            <div className="icon aos-init aos-animate" data-aos-duration="1100" data-aos="fade-up"><i className={icon}></i></div>
            <h3 className="aos-init aos-animate" data-aos-duration="1100" data-aos="fade-up">{title}</h3>
            <p className="aos-init aos-animate" data-aos-duration="1100" data-aos="fade-up">{description}</p>
        </div>
    );
}

// Main component
function Home() {
    return (
        <div>
            <LandingPage />
            <OurServices />
        </div>
    );
}


export default Home;

