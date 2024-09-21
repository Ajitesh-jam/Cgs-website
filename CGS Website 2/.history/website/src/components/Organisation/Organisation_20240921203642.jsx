import React from "react";
import sateliteImg from "../../assets/GameDev.png";
import sateliteImg1 from "../../assets/Graphics.png";
import sateliteImg2 from "../../assets/RND.png";

const Organisation = () => {
  return (
    <>
      <section className="bg text-white pb-12 font-roboto" id="organisation" >
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
              />
            </div>
            <div className="bg-black space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-2xl ">
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                GAME DEVELOPMENT 
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              We specialize in crafting engaging and interactive games using Unity, delivering dynamic gameplay experiences with an emphasis on smooth mechanics, intuitive controls, and immersive storytelling. Our approach combines innovation with technical precision to create games that captivate and challenge players.
              </p>
              <button
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white hover:bg-blue-600 active:bg-white"
                    >
                      EXPLORE MORE..
                    </button>

            </div>
          </div>
        </div>
      </section>
      <section className="bg text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg1}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
              />
            </div>
            <div className="bg-black space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-2xl ">
              
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                GRAPHICS
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              Our expertise in graphics ensures high-quality visuals, from detailed environments to dynamic lighting and textures, enhancing player engagement and realism.Beyound this we create Animations , Short Films , ArtWork Music Visulalizer and many more.
              </p>
              <button
  data-aos="fade-up"
  data-aos-delay="500"
  className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white hover:bg-blue-600 active:bg-white"
>
  EXPLORE MORE..
</button>


            </div>
          </div>
        </div>
      </section>
      <section className="bg text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg2}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
              />
            </div>
            <div className="bg-black space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-2xl">
              
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                RESEARCH AND DEVELOPMENT
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              We focus on the frontier of <b>Virtual Reality and Augmented Reality </b>game technology, conducting research in shaders, AI, and machine learning. Our work with OpenCV in Unity enables intelligent object recognition and interaction, while our shader development enhances real-time rendering. This R&D allows us to pioneer innovative visual effects and AI-driven gameplay mechanics
              </p>
              <button
  data-aos="fade-up"
  data-aos-delay="500"
  className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white hover:bg-blue-600 active:bg-white"
>
  EXPLORE MORE..
</button>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Organisation;
