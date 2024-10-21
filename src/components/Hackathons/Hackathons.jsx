import React from "react";
import featuredGame from "../../assets/parag.mp4";
import featuredAnimation from "../../assets/animation.mp4";
import featuredAnimation2 from "../../assets/animation2.mp4";
import game1 from '../../assets/Vansh.png';
import game2 from '../../assets/RND.png';
import game3 from '../../assets/cgsLogoWithoutBg.png';
import { useState } from "react";
import HackathonCard from "./Hackathoncard";

const hackathons = [
  {
    title: "Global Hackathon 2023",
    date: "March 10, 2023",
    description: "An international hackathon with over 5000 participants...",
    image: game3
  },
  {
    title: "Reactathon",
    date: "July 15, 2023",
    description: "A 24-hour React-focused hackathon...",
    image: game2
  },
  {
    title: "Reactathon",
    date: "July 15, 2023",
    description: "A 24-hour React-focused hackathon...",
    image: game1
  },
  {
    title: "Reactathon",
    date: "July 15, 2023",
    description: "A 24-hour React-focused hackathon...",
    image: game3
  }];

const Hackathons = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const carouselGames = [game1,game2,game3]; 

  
  return (
    <>
    <div className="min-h-screen bg-black text-white font-sans">
    <div className="relative w-full h-[60vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${carouselGames[0]})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg text-center">Hackathons</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 p-6">
      {hackathons.map((hackathon, index) => (
        <HackathonCard
          key={index}
          title={hackathon.title}
          date={hackathon.date}
          description={hackathon.description}
          image={hackathon.image}
        />
      ))}
    </div>
      </div>
    </>
  );
};

export default Hackathons;
