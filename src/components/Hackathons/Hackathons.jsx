import React, { useState } from "react";
import featuredGame from "../../assets/parag.mp4";
import featuredAnimation from "../../assets/animation.mp4";
import featuredAnimation2 from "../../assets/animation2.mp4";
import game1 from '../../assets/Vansh.png';
import game2 from '../../assets/RND.png';
import game3 from '../../assets/cgsLogoWithoutBg.png';
import HackathonCard from "./HackathonCard";

const hackathons = [
  {
    title: "7th Global Competition on Design for Future Education (2024)",
    date: "25th July 2024",
    description: "The 7th Global Competition on Design for Future Education, jointly organised by Beijing Normal University (BNU) and UNESCO IITE,With the themes of AIGC in Education, Metaverse and Education, Rural Education, Inclusive Education, and Educational Neuroscience this hackathon invites 1000+ teams to compete.Two of our teams have secured a spot in finals which will be held in Beijing.",
    image: [game1, game2, game3]
  },
  {
    title: "IEEE X IIIT BANGALORE",
    date: "July 15, 2024",
    description: "Secured a first position in the Hack the Metaverse, organised by IEEE x IIIT Bangalore.",
    image: [game2, game1, game3]
  },
  {
    title: "VR GAME-A-THON - Project 1",
    date: "September 5, 2023",
    description: "Secured a third position in the VR Game-a-thon, organised by IHUB Drishti, IIT Jodhpur.",
    image: [game1, game3, game2]
  },
  {
    title: "VR GAME-A-THON - Project 2",
    date: "November 20, 2023",
    description: "VR game based on Ancient Mysteries for VR Game-a-thon, organised by IHUB Drishti, IIT Jodhpur.",
    image: [game3, game2, game1]
  },
  {
    title: "OPTIMA, IIT KHARAGPUR 2023",
    date: "November 20, 2023",
    description: "Secured a first position and second runner-up in the optima, IIT Kharagpur 2023 edition.",
    image: [game3, game2, game1]
  },
  {
    title: "JIT Hack 2k24",
    date: "November 20, 2023",
    description: "24 Hour long Offline hackathon in Jyothi Institute of Technology ,Bangalore where we made an Augmented Reality Decentralised Multiplayer Combat game and a Ḥsite to trade game skins.We have built this within specified time and received positive responses from the judges.",
    image: [game3, game2, game1]
  }
];

const Hackathons = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const carouselGames = [game1, game2, game3];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${carouselGames[currentGame]})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg text-center">
              Hackathons
            </h1>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselGames.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentGame(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentGame ? 'bg-pink-500' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>

      {/* Hackathon Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 px-4 md:px-8 lg:px-16">
        {hackathons.map((hackathon, index) => (
          <HackathonCard
            key={index}
            title={hackathon.title}
            date={hackathon.date}
            description={hackathon.description}
            images={hackathon.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
