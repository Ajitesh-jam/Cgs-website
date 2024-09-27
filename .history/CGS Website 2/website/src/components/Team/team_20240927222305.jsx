import React from 'react';
import './Team.css'; // Optional: Use external CSS if needed
import upanshu from '../../assets/Team/upanshu.png';
import vedant from '../../assets/Team/vedant.png';
import ojas from '../../assets/Team/ojas.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faLinkedin,faGithub, faInstagram, faGoogle} from "@fortawesome/free-brands-svg-icons"

import SideBar from '../sideBar/SideBar';
import team from '../../assets/team.png';

import AOS from "aos";
const Team = () => {

    React.useEffect(() => {
        AOS.init({
          duration: 1300,
          easing: "ease-in-out",
        });
      }, []);

  const governors = [
    { id: 1, name: 'Upanshu ', position: '', image: upanshu, socials: [ 'linkdin', 'google-plus'] ,socialLinks:['https://www.linkedin.com/in/upanshu-jain-601b28276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','mailto:upanshujpanchori16@gmail.com']},
    { id: 2, name: 'Vedanta Hazra', position: 'RnD Head', image: vedant, socials: [ 'linkdin', 'google-plus'] },
    { id: 3, name: 'John Doe', position: 'Project Manager', image: upanshu, socials: [ 'linkdin', 'google-plus'] },
    { id: 4, name: 'Jane Smith', position: 'Graphic Designer', image: upanshu, socials: [ 'linkdin', 'google-plus'] },
    { id: 5, name: 'Mark Brown', position: 'UX Designer', image: upanshu, socials: [ 'linkdin', 'google-plus'] }
  ];

  const advisors = [
    { id: 1, name: 'Ojas Deshmukh', position: '', image: ojas, socials: [ 'linkdin', 'google-plus'] },
    { id: 2, name: 'Bob White', position: 'Strategy Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] },
    { id: 3, name: 'Charlie Black', position: 'Business Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] },
    { id: 4, name: 'Diana Blue', position: 'Technical Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] }
  ];

  const getSocialIcon = (platform) => {
    console.log(platform);
    switch (platform) {
      case 'linkdin':   return faLinkedin ;
      case 'google-plus': return faGoogle;
      default: return '';
    }
  };

  return (<>

    <SideBar></SideBar>
    <div className="carousel">
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${team})`, marginLeft: "10%" }}
      >
        <div className="carousel-overlay">
          <h1><b>COMPUTER GRAPHICS SOCIETY</b></h1>
        </div>
      </div>
    </div>


    <div className="demo">
        
       
        
      {/* Current Governors Section */}
      <div className="container">
        <h2 >Current Governors</h2>
        <div className="row">
          {governors.map((member) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={member.id} data-aos="fade-up"> {/* Adjusted columns */}
              <div className="our-team"  >
                <img src={member.image} alt={member.name} />
                <div className="team-content" >
                  <h3 className="title">{member.name}</h3>
                  <span className="post">{member.position}</span>
                  <ul className="social"  >
                    {member.socials.map((social, index) => (
                      <li key={index}>
                        <a href>
                          <FontAwesomeIcon icon={getSocialIcon(social)}></FontAwesomeIcon>
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
        <h2>Advisors</h2>
        <div className="row">
          {advisors.map((member) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={member.id} data-aos="fade-up"> {/* Adjusted columns */}
              <div className="our-team">
                <img src={member.image} alt={member.name} />
                <div className="team-content">
                  <h3 className="title">{member.name}</h3>
                  <span className="post">{member.position}</span>
                  <ul className="social">
                    {member.socials.map((social, index) => (
                      <li key={index}>
                        <a href="#">
                        <FontAwesomeIcon icon={getSocialIcon(social)}></FontAwesomeIcon>
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
    </div></>
  );
};

export default Team;
