import React from "react";
import satelitImg from "../../assets/satelite2.jpg";
import satelitImg5 from "../../assets/satelite5.jpg";

const Satellite = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-black to-blue-400 to-black-500 text-white py-20 rounded-2xl border" id="satellite">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-white-800 border-b-white-800 rounded-2xl ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                FEATURED NEW GAME
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
               SOUL MAGICIAN
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              
In this 2D RPG map-clear game, players unlock unique powers and cast powerful spells to defeat enemies. Navigate through dynamic levels, use strategic spellcasting, and shoot projectiles to clear waves of enemies while upgrading abilities and discovering new powers along the way.
              </p>
              <button
  data-aos="fade-up"
  data-aos-delay="500"
  className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white"
>
  View all..
</button>
            </div>
            <div data-aos="zoom-in">
            <img
  src={satelitImg}
  alt=""
  className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"

/>


            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-black to-blue-400 to-black-500 text-white py-20 rounded-2xl border" id="satellite">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-white-800 border-b-white-800 rounded-2xl ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                FEATURED ANIMATIONS
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
               Product Advertisment
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              The Sentinel-6 Michael Freilich is a satellite dedicated to monitoring sea level rise. It is part of the European Space Agency's (ESA) Copernicus program and a collaboration between the European Commission (EC), the European Organisation for the Exploitation of Meteorological Satellites (EUMETSAT), NASA, and the National Oceanic and Atmospheric Administration (NOAA).
              </p>
              <button
  data-aos="fade-up"
  data-aos-delay="500"
  className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white"
>
  View all..
</button>
            </div>
            <div data-aos="zoom-in">
            <img
  src={satelitImg5}
  alt=""
  className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"

/>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Satellite;
