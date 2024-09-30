import React from 'react';
import './team.css'; // Optional: Use external CSS if needed
import upanshu from '../../assets/Team/upanshu.png';
import vedant from '../../assets/Team/vedant.png';
import ojas from '../../assets/Team/ojas.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons"

// import SideBar from '../sideBar/SideBar';
import team from '../../assets/team.png';
import AOS from "aos";

const Team = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
    });
  }, []);

  const teamMembers = [
    {
      "id": 1,
      "name": "Upanshu",
      "position": "governors",
      "image": upanshu,
      "socials": ["linkedin", "google-plus"],
      "socialLinks": [
        "https://www.linkedin.com/in/upanshu-jain-601b28276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:upanshujpanchori16@gmail.com"
      ]
    },
    {
      "id": 2,
      "name": "Vedanta Hazra",
      "position": "governors",
      "image": vedant,
      "socials": ["linkedin", "google-plus"],
      "socialLinks": [
        "https://www.linkedin.com/in/vedanta-hazra",
        "mailto:vedanta@example.com"
      ]
    },
    {
      "id": 6,
      "name": "Ojas Deshmukh",
      "position": "advisors",
      "image": ojas,
      "socials": ["linkedin", "google-plus"],
      "socialLinks": [
        "https://www.linkedin.com/in/ojas-deshmukh",
        "mailto:ojas@example.com"
      ]
    }
    // Add remaining members here
  ];

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'linkedin':
        return faLinkedin;
      case 'google-plus':
        return faGoogle;
      default:
        return '';
    }
  };

  // Separate team members by position
  const governors = teamMembers.filter(member => member.position === 'governors');
  const advisors = teamMembers.filter(member => member.position === 'advisors');

  return (
    <>
      {/* Carousel Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${team})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg"><b>COMPUTER GRAPHICS SOCIETY</b></h1>
          </div>
        </div>
      </div>

      <div className="demo">
        {/* Current Governors Section */}
        <div className="container">
          <h2 className='headi'>Current Governors</h2>
          <div className="row">
            {governors.map((member) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={member.id} data-aos="fade-up">
                <div className="our-team">
                  <img src={member.image} alt={member.name} />
                  <div className="team-content">
                    <h3 className="title">{member.name}</h3>
                    <span className="post">{member.position}</span>
                    <ul className="social">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={member.socialLinks[index]} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors Section */}
        <div className="container">
          <h2 className='headi'>Advisors</h2>
          <div className="row">
            {advisors.map((member) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={member.id} data-aos="fade-up">
                <div className="our-team">
                  <img src={member.image} alt={member.name} />
                  <div className="team-content">
                    <h3 className="title">{member.name}</h3>
                    <span className="post">{member.position}</span>
                    <ul className="social">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={member.socialLinks[index]} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
