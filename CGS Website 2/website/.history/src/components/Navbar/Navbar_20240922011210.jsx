// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };
//   const navigate = useNavigate();

//   const handleNavigation = (name) => {
//     navigate(`/${name}`);
//   };



//   return (
//     <>
//       <header className="padding-x py-9 absolute z-12 w-full ">
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
//                   className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
//                   style={{ textDecoration: "none" }}
                  
//                 >
//                   About Teams
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
//                   style={{ textDecoration: "none" }}

//                   onClick={()=>{handleNavigation("GameDev")}}
//                 >
//                   Game Development 
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#services"
//                   className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Graphics
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#organisation"
//                   className="font-montserrat leading-normal text-[17px] text-slate-gray text-white font-light transition-all duration-5000 ease-in-out hover:border-b hover:border-coral-red"
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


/** @format */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const Navbar = () => {
	return (
		<nav className='w-screen pt-20 '>
			<h1 className='text-center text-3xl mb-5'>Underline</h1>
			<motion.ul className='flex font-[500] py-10 text-xl border justify-center'>
				<NavItem itemName='Home' />
				<NavItem itemName='About us' />
				<NavItem itemName='Products' />
				<NavItem itemName='Contact' />
			</motion.ul>
		</nav>
	);
};

const NavItem = ( itemName ) => {
	const [isHovered, setIsHovered] = useState(false);

	const onHoverStart = () => setIsHovered(true);
	const onHoverEnd = () => setIsHovered(false);

	return (
		<motion.li
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
			className='px-10  text-black/75 hover:text-black transition-colors duration-300'>
			<a
				className='relative cursor-pointer py-1.5'
				href={`#${itemName}`}>
				{itemName}
				<AnimatePresence>{isHovered && <Underline />}</AnimatePresence>
			</a>
		</motion.li>
	);
};

const Underline = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			layoutId='underline'
			className='absolute -bottom-[1px] bg-gradient-to-r w-full from-rose-800 via-rose-300 to-rose-800 h-1'
		/>
	);
};

export default Navbar;