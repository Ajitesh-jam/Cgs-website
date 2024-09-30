// import React from "react";
// import sateliteImg from "../../assets/GameDev.png";
// import sateliteImg1 from "../../assets/Graphics.png";
// import sateliteImg2 from "../../assets/RND.png";

// import { useNavigate } from 'react-router-dom';

// const Organisation = () => {

//   const navigate = useNavigate();
  
//   const handleNavigation = (name) => {
//     navigate(`/${name}`);
//   };


//   return (
//     <>
//       <section className="bg text-white pb-12 font-roboto m-1" id="organisation" >
//         <div className="container ">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
//             <div data-aos="zoom-in">
//               <img
//                 src={sateliteImg}
//                 alt=""
//                 className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
//               />
//             </div>
//             <div className="bg-black space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-2xl ">
//               <h1
//                 data-aos="fade-up"
//                 data-aos-delay="500"
//                 className="uppercase text-5xl"
//               >
//                 GAME DEVELOPMENT 
//               </h1>
//               <p data-aos="fade-up" data-aos-delay="700">
//               We specialize in crafting engaging and interactive games using Unity, delivering dynamic gameplay experiences with an emphasis on smooth mechanics, intuitive controls, and immersive storytelling. Our approach combines innovation with technical precision to create games that captivate and challenge players.
//               </p>
//               <button
//                       data-aos="fade-up"
//                       data-aos-delay="500"
//                       className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white hover:bg-blue-600 active:bg-white"

//                       onClick={()=>{handleNavigation("GameDev")}}
//                     >
//                       EXPLORE MORE..
//                     </button>

//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="bg text-white pb-12">
//         <div className="container ">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
//             <div data-aos="zoom-in">
//               <img
//                 src={sateliteImg1}
//                 alt=""
//                 className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
//               />
//             </div>
//             <div className="bg-black space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-2xl ">
              
//               <h1
//                 data-aos="fade-up"
//                 data-aos-delay="500"
//                 className="uppercase text-5xl"
//               >
//                 GRAPHICS
//               </h1>
//               <p data-aos="fade-up" data-aos-delay="700">
//               Our expertise in graphics ensures high-quality visuals, from detailed environments to dynamic lighting and textures, enhancing player engagement and realism.Beyound this we create Animations , Short Films , ArtWork Music Visulalizer and many more.
//               </p>
//               <button
//                   data-aos="fade-up"
//                   data-aos-delay="500"
//                   className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white hover:bg-blue-600 active:bg-white"
//                   onClick={()=>{handleNavigation("Graphics")}}
//                 >
//                   EXPLORE MORE..
//                 </button>


//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="bg text-white pb-12">
//         <div className="container ">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
//             <div data-aos="zoom-in">
//               <img
//                 src={sateliteImg2}
//                 alt=""
//                 className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
//               />
//             </div>
//             <div className="bg-black space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-2xl">
              
//               <h1
//                 data-aos="fade-up"
//                 data-aos-delay="500"
//                 className="uppercase text-5xl"
//               >
//                 RESEARCH AND DEVELOPMENT
//               </h1>
//               <p data-aos="fade-up" data-aos-delay="700">
//               We focus on the frontier of <b>Virtual Reality and Augmented Reality </b>game technology, conducting research in shaders, AI, and machine learning. Our work with OpenCV in Unity enables intelligent object recognition and interaction, while our shader development enhances real-time rendering. This R&D allows us to pioneer innovative visual effects and AI-driven gameplay mechanics
//               </p>
//               <button
//   data-aos="fade-up"
//   data-aos-delay="500"
//   className="bg-gradient-to-r from-black to-blue-500 text-white px-10 py-2 rounded-md duration-200 border-1px-white hover:bg-blue-600 active:bg-white"
// >
//   EXPLORE MORE..
// </button>


//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Organisation;
import React from "react";
import sateliteImg from "../../assets/GameDev.png";
import sateliteImg1 from "../../assets/Graphics.png";
import sateliteImg2 from "../../assets/RND.png";

import { useNavigate } from 'react-router-dom';

const Organisation = () => {

  const navigate = useNavigate();
  
  const handleNavigation = (name) => {
    navigate(`/${name}`);
  };

  return (
    <>
    <div className="m-1 p-20">
      {/* Game Development Section */}
      <section className="bg-white text-white p-12 font-roboto" id="organisation">
        <div className="container mx-auto px-6"> {/* Added padding */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            <div data-aos="zoom-in" className="flex">
              <img
                src={sateliteImg}
                alt="Game Development"
                className="w-full h-full object-cover rounded-xl p-4"
              />
            </div>
            <div className="flex bg-black p-8  rounded-2xl"> {/* Increased padding */}
              <div className="my-auto"> {/* Vertically centers the content */}
                <h1 className="uppercase text-4xl text-pink-500" data-aos="fade-up" data-aos-delay="500">
                  GAME DEVELOPMENT
                </h1>
                <p className="text-lg m-1" data-aos="fade-up" data-aos-delay="700">
                  We specialize in crafting engaging and interactive games using Unity, delivering dynamic gameplay experiences with an emphasis on smooth mechanics, intuitive controls, and immersive storytelling.
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-8 py-2 rounded-md hover:bg-pink-600 transition duration-300 m-1"
                  onClick={() => handleNavigation("GameDev")}
                >
                  EXPLORE MORE..
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphics Section */}
      <section className="bg-white text-white pb-12">
        <div className="container mx-auto px-6"> {/* Added padding */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            <div data-aos="zoom-in" className="flex">
              <img
                src={sateliteImg1}
                alt="Graphics"
                className="w-full h-full object-cover rounded-xl p-4 "
              />
            </div>
            <div className="flex bg-black p-8 rounded-2xl"> {/* Increased padding */}
              <div className="my-auto">
                <h1 className="uppercase text-4xl text-pink-500" data-aos="fade-up" data-aos-delay="500">
                  GRAPHICS
                </h1>
                <p className="text-lg m-1" data-aos="fade-up" data-aos-delay="700">
                  Our expertise in graphics ensures high-quality visuals, from detailed environments to dynamic lighting and textures. We also specialize in animations, short films, artwork, and more.
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-8 py-2 rounded-md hover:bg-pink-600 transition duration-300"
                  onClick={() => handleNavigation("Graphics")}
                >
                  EXPLORE MORE..
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research and Development Section */}
      <section className="bg-white text-white pb-12">
        <div className="container mx-auto px-6"> {/* Added padding */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            <div data-aos="zoom-in" className="flex">
              <img
                src={sateliteImg2}
                alt="R&D"
                className="w-full h-full object-cover rounded-xl p-4"
              />
            </div>
            <div className="flex bg-black p-8  rounded-2xl"> {/* Increased padding */}
              <div className="my-auto">
                <h1 className="uppercase text-4xl text-pink-500" data-aos="fade-up" data-aos-delay="500">
                  RESEARCH & DEVELOPMENT
                </h1>
                <p className="text-lg m-1" data-aos="fade-up" data-aos-delay="700">
                  Our R&D focuses on the frontier of Virtual Reality and Augmented Reality game technology, leveraging AI and machine learning for smarter gameplay and richer experiences.
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-8 py-2 rounded-md hover:bg-pink-600 transition duration-300 m-1"
                  onClick={() => handleNavigation("RND")}
                >
                  EXPLORE MORE..
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Organisation;
