import React from "react";
import Earth from "../../assets/cgsLogoWithoutBg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGoogle, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (name) => {
    navigate(`/${name}`);
  };
  return (
    <div className="bg-dark">
      <section className="max-w-[1400px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5 m-2">
          {/* first column */}
          <div className="py-8 px-4">
            <div className="">
              <img src={Earth} className="w-[7rem] aspect-[3/3]"/>
            </div>
            <h1 className="sm:text-3xl text-xl text-pink-500 font-bold sm:text-left text-justify mb-3">
              Computer Graphics Society
            </h1>
            <p className="text-white">
              Indian Institute of Technology Kharagpur, West Bengal-721302
            </p>
          </div>
          {/* Second column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold text-pink-500 sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3 `}>
                  <li className="cursor-pointer"><a href='#2'>Home</a></li>
                  <li className="cursor-pointer"><a href='' onClick={handleNavigation('GameDev')}>Game development</a></li>
                  <li className="cursor-pointer"><a onClick={handleNavigation('Graphics')}>Graphics</a></li>
                  <li className="cursor-pointer">Team</li>
                  <li className="cursor-pointer">Research</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold text-pink-500 sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-row gap-3 ">
                  <li className="cursor-pointer text-3xl"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></li>
                  <li className="cursor-pointer text-3xl"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></li>
                  <li className="cursor-pointer text-3xl"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></li>
                  <li className="cursor-pointer text-3xl"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40 mx-auto">
            <span className="text-gray-400">
              @Copyright Computer Graphics Society, IIT Kharagpur
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
