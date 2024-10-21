import React from 'react';
import './HackathonCard.css'; // Optional, if you're using custom CSS

const HackathonCard = ({ title, date, description, image }) => {
  return (
    <div className="relative perspective bg-black border-2 border-pink-500 rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform hover:shadow-2xl hover:scale-102 group hover:rotate-0 w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[70vw] mx-auto">
      {/* Card Image */}
      <div className="relative">
        <img
          className="w-full aspect-[16/5] object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={title}
        />
        {/* Floating overlay on image */}
        <div className="absolute inset-0 bg-pink-600 opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-pink-600 mb-2 transition-colors duration-500 group-hover:text-pink-500">
          {title}
        </h2>
        <p className="text-white text-xs sm:text-sm lg:text-base mb-4 transition-opacity duration-500 group-hover:opacity-80">
          {date}
        </p>

        {/* Description with reveal effect */}
        <p className="text-white text-xs sm:text-sm lg:text-base transition-transform transform translate-y-0 opacity-100 duration-500">
          {description}
        </p>

        {/* Button with hover animation */}
        <a
          href="#"
          className="inline-block mt-4 bg-pink-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-pink-500 transition-all duration-300 transform hover:translate-y-1 hover:shadow-lg"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default HackathonCard;
