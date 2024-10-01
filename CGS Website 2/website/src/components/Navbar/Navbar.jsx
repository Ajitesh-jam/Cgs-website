//   return (
//     <>
//       <header className="padding-x py-9 absolute z-12 w-full w-9/10 p-4">
//         <nav className="flex justify-between items-center max-container">
//           <a href="/">
//             <span className="text-white font-bold text-2xl ml-2 padding-20">
//               C G S 
//             </span>
//           </a>
//           <div className="hidden lg:flex justify-evenly flex-1">
//             <ul className="flex-1 flex justify-evenly items-center ">
//               <li>
//                 <a
//                   href="#"
//                   className="font-montserrat leading-normal text-xl text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
//                   style={{ textDecoration: "none" }}
//                   onClick={()=>{handleNavigation("Team")}}
//                 >Team
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="font-montserrat leading-normal text-xl  text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
//                   style={{ textDecoration: "none" }}

//                   onClick={()=>{handleNavigation("GameDev")}}
//                 >
//                   Game Development 
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#services"
//                   className="font-montserrat leading-normal text-xl text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Graphics
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#organisation"
//                   className="font-montserrat leading-normal text-xl text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
//                   style={{ textDecoration: "none" }}
//                   onClick={()=>{handleNavigation("GameDev")}}
//                 >
//                   Research and Development
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="lg:hidden">
//             <button
//               onClick={toggleNav}
//               className="text-white focus:outline-none"
//             >
//               {isNavOpen ? "Close" : "Menu"}
//             </button>
//             {isNavOpen && (
//               <ul className="mt-4 flex flex-col items-center gap-4">
//                 <li>
//                   <a
//                     href="#"
//                     className="block text-white hover:text-coral-red"
//                     style={{ textDecoration: "none" }}
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#satellite"
//                     className="block text-white hover:text-coral-red"
//                     style={{ textDecoration: "none" }}
//                   >
//                     Satellite
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#services"
//                     className="block text-white hover:text-coral-red"
//                     style={{ textDecoration: "none" }}
//                   >
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#organisation"
//                     className="block text-white hover:text-coral-red"
//                     style={{ textDecoration: "none" }}
//                   >
//                     Organisations
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const handleNavigation = (name) => {
    navigate(`/${name}`);
  };

  return (
    <nav className="bg-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-3xl font-bold text-white">
          <a href="/" className="hover:text-pink-700">C G S</a>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-lg text-white">
          <a href="#" className="hover:text-pink-500 " onClick={()=>{handleNavigation("Team")}}>Team</a>
          <a href="#" className="hover:text-pink-500" onClick={()=>{handleNavigation("GameDev")}}>Game Development</a>
          <a href="#" className="hover:text-pink-500" onClick={()=>{handleNavigation("Graphics")}}>Graphics</a>
          <a href="#" className="hover:text-pink-500" onClick={()=>{handleNavigation("GameDev")}}>Research</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-black`}>
        <div className="space-y-4 py-2 px-4 text-white text-lg text-center">
          <a href="#" className="block hover:text-pink-500" onClick={()=>{handleNavigation("Team")}}>Team</a>
          <a href="#" className="block hover:text-pink-500" onClick={()=>{handleNavigation("GameDev")}}>Game Development</a>
          <a href="#" className="block hover:text-pink-500" onClick={()=>{handleNavigation("Graphics")}}>Graphics</a>
          <a href="#" className="block hover:text-pink-500" onClick={()=>{handleNavigation("GameDev")}}>Research</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
