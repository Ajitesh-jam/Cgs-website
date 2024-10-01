import React from 'react';
import './team.css';
import teamMembers from './team.json';
import upanshu from '../../assets/Team/upanshu.png';
import vedant from '../../assets/Team/vedant.png';
import ojas from '../../assets/Team/ojas.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import team from '../../assets/team.png';
import AOS from "aos";
import { getContent} from '../contentful/ContentfulClient';

const Team = () => {
  const [members, setMembers] = React.useState([]);
  
  React.useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
    });
    async function fetchData() {
      const data = await getContent('members');
      setMembers(data);
    }

    fetchData();
  }, []);

  // Map the image paths to the members
  const images = {
    "upanshu.png": upanshu,
    "vedant.png": vedant,
    "ojas.png": ojas
  };

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
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${team})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg text-center"><b>COMPUTER GRAPHICS SOCIETY</b></h1>
          </div>
        </div>
      </div>

      <div className="demo">
        <div className="container">
        <h1 className="text-center text-5xl font-bold text-pink-500 mb-8">Meet the Team</h1>
          <h2 className='headi'>Current Governors</h2>
          <div className="row">
            {governors.map((member) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={member.id} data-aos-once='true' data-aos="fade-up">
                <div className="our-team">
                  <img src={images[member.image]} alt={member.name} />
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

        <div className="container">
          <h2 className='headi'>Advisors</h2>
          <div className="row">
            {advisors.map((member) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={member.id} data-aos-once='true' data-aos="fade-up">
                <div className="our-team">
                  <img src={images[member.image]} alt={member.name} />
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

       {/* Testing Section */}
       <div className="container">
        <h2 className='headi'>Testing</h2>
        <div className="members">
          {Array.isArray(members) && members?.map((member) => (
            <div className="okay" key={member?.id} data-aos="fade-up"> {/* Adjusted columns */}
              <div className="our-team ">
                <img src={member?.fields.img.fields.file.url} alt={member?.fields.name} />
                <div className="team-content">
                  <h3 className="title">{member?.fields.name}</h3>
                  <span className="post">{member?.fields.position}</span>
                  <ul className="social">
                    {Object.entries(member?.fields.socials).map((social, index) => (
                      <li key={index}>
                        <a href={social[1]?.link}>
                        <FontAwesomeIcon icon={getSocialIcon(social[1]?.social)}></FontAwesomeIcon>
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
    </>
  );
};

export default Team;

