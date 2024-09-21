import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/worldBuild.mp4";
import Organisation from "./components/Organisation/Organisation.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import GameDev from "./components/Game Page/GameDev.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <div>
                <div className="h-[700px] relative">
                  <video
                    autoPlay
                    loop
                    className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
                  >
                    <source src={BgVideo} type="video/mp4" />
                  </video>
                  <Navbar />
                  <Hero />
                </div>
                <HeroCard />
                <Organisation />
                <Satelite />
                
                {/* Optionally include Footer */}
                {/* <Footer5 /> */}
              </div>
            }
          />

          {/* GameDev Page Route */}
          <Route path="/GameDev" element={<><Navbar></Navbar> <GameDev /></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
