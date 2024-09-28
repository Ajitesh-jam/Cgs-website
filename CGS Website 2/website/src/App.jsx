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
import Graphics from "./components/Graphics/Graphics.jsx";
import Team from "./components/Team/team.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';


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
                  <Navbar />
                  <Hero />
                <HeroCard />
                <Organisation />
                <Satelite />
              </div>
            }
          />
          {/* GameDev Page Route */}
          <Route path="/GameDev" element={<><Navbar/>  <GameDev />
             </>} />
           {/* Graphics Page Route */}
                    <Route path="/Graphics" element={<><Navbar/>  <Graphics />
             </>} />   

          <Route path="/Team" element={<><Team/>
              </>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
