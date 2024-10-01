// import React from 'react';
// import './team.css';
// import teamMembers from './team.json';
// import upanshu from '../../assets/Team/upanshu.png';
// import vedant from '../../assets/Team/vedant.png';
// import ojas from '../../assets/Team/ojas.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import team from '../../assets/team.png';
// import AOS from "aos";

// const Team = () => {

//   React.useEffect(() => {
//     AOS.init({
//       duration: 1300,
//       easing: "ease-in-out",
//     });
//   }, []);

//   // Map the image paths to the members
//   const images = {
//     "upanshu.png": upanshu,
//     "vedant.png": vedant,
//     "ojas.png": ojas
//   };

//   const getSocialIcon = (platform) => {
//     switch (platform) {
//       case 'linkedin':
//         return faLinkedin;
//       case 'google-plus':
//         return faGoogle;
//       default:
//         return '';
//     }
//   };

//   // Separate team members by position
//   const governors = teamMembers.filter(member => member.position === 'governors');
//   const advisors = teamMembers.filter(member => member.position === 'advisors');

//   return (
//     <>
//       <div className="relative w-full h-[60vh] overflow-hidden">
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{ backgroundImage: `url(${team})` }}
//         >
//           <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
//             <h1 className="text-5xl font-bold text-white drop-shadow-lg"><b>COMPUTER GRAPHICS SOCIETY</b></h1>
//           </div>
//         </div>
//       </div>

//       <div className="demo">
//         <div className="container">
//           <h2 className='headi'>Current Governors</h2>
//           <div className="row">
//             {governors.map((member) => (
//               <div className="col-lg-3 col-md-4 col-sm-6" key={member.id} data-aos="fade-up">
//                 <div className="our-team">
//                   <img src={images[member.image]} alt={member.name} />
//                   <div className="team-content">
//                     <h3 className="title">{member.name}</h3>
//                     <span className="post">{member.position}</span>
//                     <ul className="social">
//                       {member.socials.map((social, index) => (
//                         <li key={index}>
//                           <a href={member.socialLinks[index]} target="_blank" rel="noopener noreferrer">
//                             <FontAwesomeIcon icon={getSocialIcon(social)} />
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="container">
//           <h2 className='headi'>Advisors</h2>
//           <div className="row">
//             {advisors.map((member) => (
//               <div className="col-lg-3 col-md-4 col-sm-6" key={member.id} data-aos="fade-up">
//                 <div className="our-team">
//                   <img src={images[member.image]} alt={member.name} />
//                   <div className="team-content">
//                     <h3 className="title">{member.name}</h3>
//                     <span className="post">{member.position}</span>
//                     <ul className="social">
//                       {member.socials.map((social, index) => (
//                         <li key={index}>
//                           <a href={member.socialLinks[index]} target="_blank" rel="noopener noreferrer">
//                             <FontAwesomeIcon icon={getSocialIcon(social)} />
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Team;


// import React from 'react';
// import './Team.css'; // Optional: Use external CSS if needed
// import upanshu from '../../assets/Team/upanshu.png';
// import vedant from '../../assets/Team/vedant.png';
// import ojas from '../../assets/Team/ojas.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook,faLinkedin,faGithub, faInstagram, faGoogle} from "@fortawesome/free-brands-svg-icons"

// import SideBar from '../sideBar/SideBar';
// import team from '../../assets/team.png';

// import AOS from "aos";

// import { getContent} from '../contentful/ContentfulClient';

// const Team = () => {
//   const [members, setMembers] = React.useState([]);
//     React.useEffect(() => {
//       async function fetchData() {
//         const data = await getContent('members');
//         setMembers(data);
//       }

//       fetchData();
      
//         AOS.init({
//           duration: 1300,
//           easing: "ease-in-out",
//         });
//       }, []);


//       const governors=  [
//             {id: 1,
//             name: "Ajitesh Jamulkar",
//             position: "Game Dev Head ",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/7aXEy0PcCudid3CfrPA5OW/4c62b5fb79c600921393014e75de03c4/ajitesh.jpeg",
//             socials: [ "https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/", "mailto:ajitesh.jam@gmail.com" ]},
        
//           { id: 2,
//             name: "Parikshit Dave",
//             position: "Public Relation Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/1DAk028JHgxBpz0076yvNT/d35d65ecfd8df15114809930c44164a2/parikshit.png",
//             socials: [ "https://www.linkedin.com/in/parikshit-dave-ba2983257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "mailto:parikshitdave14@gmail.com" ]},
        
//           {  id: 3,
//             name: "Vedanta Hazra",
//             position: "RnD Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/49mRXSBJQUfLhFpgCdwF6J/d1f95e986710317b8eb9ba1954ea167b/vedant.jpeg",
//             socials: [ "https://www.linkedin.com/in/vedanta-hazra-97859724b/", "mailto:vedanatahazra2004@gmail.com"]},
        
//             {id: 4,
//             name: "Sahil Patel",
//             position: "Rnd Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/47zqeuISSiapCaffmn9rp2/ccf07b72842afe0683da6cda46c5418b/Sahil.png",
//             socials: [ "https://www.linkedin.com/in/siddharth-singh-7b1b3b1b3/", "mailto:sahil9123patel@gmail.com"]},
        
//             {id: 5,
//             name: "Upanshu Jain",
//             position: "Graphics Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/3R3E4MmfgRA4bYRvLRM2F/9d0c25f513fcb37edb351155825092f1/upanshu.png",
//             socials: [ "https://www.linkedin.com/in/siddharth-singh-7b1b3b1b3/", "mailto: upanshujpanchori16@gmail.com"]},
        
//           {  id: 6,
//             name: "Yash Daga",
//             position: "Graphics Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/2c9AJVY7P6YMiaCi0uIvTN/cf925b1314229a631b82971f758f1d9d/Screenshot_2024-10-01_at_2.29.02_AM.png",
//             socials: [ "https://www.linkedin.com/in/yash-daga-0b2041257/", "mailto:yash@gmail.com"]},
        
//             {id: 7,
//             name: "Krishna Paikine ",
//             position: "Web Dev Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/2715Ccq5Jw00UMi26MzPxW/3cae4d0f911fe005361800c8f540198c/Krishna.png",
//             socials: [ "http://www.linkedin.com/in/krishnapaikine/", "mailto:krishnapaikine777@gmail.com"]},
        
//             {id: 8,
//             name: "Sai Avinash Seemakurthi",
//             position: "Web Dev Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/6DvuLC00ZiKozzjnzLSLJa/39e9249cb023c12d4881adecb72ebc75/Screenshot_2024-10-01_at_2.30.30_AM.png",
//             socials: [ "https://www.linkedin.com/in/sai-avinash-seemakurthi-446195261", "mailto:"]},

        
//         {id: 9,
//         name: "Shubhankar das",
//         position: "Game Dev Head",
//         image: "https://images.ctfassets.net/7ghyf81o1fuo/3579nliT4FowxSmj6CYWYj/8d78f5fccda6489e31afec49f6e60389/WhatsApp_Image_2024-10-01_at_02.31.30.jpeg",
//         socials: [ "https://www.linkedin.com/in/shubhankar-das-380267261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "mailto:rikidas5621@gmail.com"]}
//           ]
     
    

//   const governors1 = [
//     { id: 1, name: 'Upanshu ', position: '', image: upanshu, socials: [ 'linkdin', 'google-plus'] ,socialLinks:['https://www.linkedin.com/in/upanshu-jain-601b28276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','mailto:upanshujpanchori16@gmail.com']},
//     { id: 2, name: 'Vedanta Hazra', position: 'RnD Head', image: vedant, socials: [ 'linkdin', 'google-plus'] },
//     { id: 3, name: 'John Doe', position: 'Project Manager', image: upanshu, socials: [ 'linkdin', 'google-plus'] },
//     { id: 4, name: 'Jane Smith', position: 'Graphic Designer', image: upanshu, socials: [ 'linkdin', 'google-plus'] },
//     { id: 5, name: 'Mark Brown', position: 'UX Designer', image: upanshu, socials: [ 'linkdin', 'google-plus'] }
//   ];

//   const advisors = [
//     { id: 1, name: 'Ojas Deshmukh', position: '', image: ojas, socials: [ 'linkdin', 'google-plus'] },
//     { id: 2, name: 'Bob White', position: 'Strategy Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] },
//     { id: 3, name: 'Charlie Black', position: 'Business Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] },
//     { id: 4, name: 'Diana Blue', position: 'Technical Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] },
//     { id: 4, name: 'Diana Blue', position: 'Technical Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] }
//   ];

//   const getSocialIcon = (platform) => {
//     console.log(platform);
//     switch (platform) {
//       case 'linkdin':   return faLinkedin ;
//       case 'google-plus': return faGoogle;
//       default: return '';
//     }
//   };

//   return (
//   <>
//      {/* <div className="carousel">
//       <div
//         className="carousel-image"
//         style={{ backgroundImage: `url(${team})`}}
//       >
//         <div className="carousel-overlay">
//           <h1><b>COMPUTER GRAPHICS SOCIETY</b></h1>
//         </div>
//       </div>
//      </div> */}
//      <div className="relative w-full h-[60vh] overflow-hidden">
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{ backgroundImage: `url(${team})` }}
//         >
//           <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
//             <h1 className="text-5xl font-bold text-white drop-shadow-lg"><b>COMPUTER GRAPHICS SOCIETY</b></h1>
//           </div>
//         </div>
//     </div>


//      <div className="demo">
//       {/* Current Governors Section */}
//       <div className="container">
//         <h2 className='headi'>Current Governors</h2>
//         <div className="members">
//           {governors.map((member) => (
//             <div className="" key={member.id} data-aos="fade-up"> {/* Adjusted columns */}
//               <div className="our-team">
//                 <img src={member.image} alt={member.name}/>
//                 <div className="team-content" >
//                   <h3 className="title">{member.name}</h3>
//                   <span className="post">{member.position}</span>
//                   <ul className="social"  >
//                     {member.socials.map((social, index) => (
//                       <li key={index}>
//                         <a href>
//                           <FontAwesomeIcon icon={getSocialIcon(social)}></FontAwesomeIcon>
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Advisors Section */}
//       <div className="container">
//         <h2 className='headi'>Advisors</h2>
//         <div className="members">
//           {advisors.map((member) => (
//             <div className="" key={member.id} data-aos="fade-up"> {/* Adjusted columns */}
//               <div className="our-team ">
//                 <img src={member.image} alt={member.name} />
//                 <div className="team-content">
//                   <h3 className="title">{member.name}</h3>
//                   <span className="post">{member.position}</span>
//                   <ul className="social">
//                     {member.socials.map((social, index) => (
//                       <li key={index}>
//                         <a href="#">
//                         <FontAwesomeIcon icon={getSocialIcon(social)}></FontAwesomeIcon>
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Testing Section */}
//       <div className="container">
//         <h2 className='headi'>Testing</h2>
//         <div className="members">
//           {Array.isArray(members) && members?.map((member) => (
//             <div className="okay" key={member?.id} data-aos="fade-up"> {/* Adjusted columns */}
//               <div className="our-team ">
//                 <img src={member?.fields.img.fields.file.url} alt={member?.fields.name} />
//                 <div className="team-content">
//                   <h3 className="title">{member?.fields.name}</h3>
//                   <span className="post">{member?.fields.position}</span>
//                   <ul className="social">
//                     {Object.entries(member?.fields.socials).map((social, index) => (
//                       <li key={index}>
//                         <a href={social[1]?.link}>
//                         <FontAwesomeIcon icon={getSocialIcon(social[1]?.social)}></FontAwesomeIcon>
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Team;


import React from 'react';
import './Team.css'; // Optional: Use external CSS if needed
import team from '../../assets/team.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";

import AOS from "aos";
import { getContent } from '../contentful/ContentfulClient';

const Team = () => {
  const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const data = await getContent('members');
      setMembers(data);
    }

    fetchData();

    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
    });
  }, []);

  const governors = [
    {
      id: 1,
      name: "Ajitesh Jamulkar",
      position: "Game Dev Head ",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/7aXEy0PcCudid3CfrPA5OW/4c62b5fb79c600921393014e75de03c4/ajitesh.jpeg",
      socials: ["https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/", "mailto:ajitesh.jam@gmail.com"]
    },
    {
      id: 2,
      name: "Parikshit Dave",
      position: "Public Relation Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/1DAk028JHgxBpz0076yvNT/d35d65ecfd8df15114809930c44164a2/parikshit.png",
      socials: ["https://www.linkedin.com/in/parikshit-dave-ba2983257", "mailto:parikshitdave14@gmail.com"]
    },
    {
      id: 3,
      name: "Vedanta Hazra",
      position: "RnD Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/49mRXSBJQUfLhFpgCdwF6J/d1f95e986710317b8eb9ba1954ea167b/vedant.jpeg",
      socials: ["https://www.linkedin.com/in/vedanta-hazra-97859724b/", "mailto:vedanatahazra2004@gmail.com"]
    },
    {
      id: 4,
      name: "Sahil Patel",
      position: "Rnd Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/47zqeuISSiapCaffmn9rp2/ccf07b72842afe0683da6cda46c5418b/Sahil.png",
      socials: [ "https://www.linkedin.com/in/siddharth-singh-7b1b3b1b3/", "mailto:sahil9123patel@gmail.com"]},
  
      {id: 5,
      name: "Upanshu Jain",
      position: "Graphics Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/3R3E4MmfgRA4bYRvLRM2F/9d0c25f513fcb37edb351155825092f1/upanshu.png",
      socials: [ "https://www.linkedin.com/in/siddharth-singh-7b1b3b1b3/", "mailto: upanshujpanchori16@gmail.com"]},
  
    {  id: 6,
      name: "Yash Daga",
      position: "Graphics Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/2c9AJVY7P6YMiaCi0uIvTN/cf925b1314229a631b82971f758f1d9d/Screenshot_2024-10-01_at_2.29.02_AM.png",
      socials: [ "https://www.linkedin.com/in/yash-daga-0b2041257/", "mailto:yash@gmail.com"]},
  
      {id: 7,
      name: "Krishna Paikine ",
      position: "Web Dev Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/2715Ccq5Jw00UMi26MzPxW/3cae4d0f911fe005361800c8f540198c/Krishna.png",
      socials: [ "http://www.linkedin.com/in/krishnapaikine/", "mailto:krishnapaikine777@gmail.com"]},
  
      {id: 8,
      name: "Sai Avinash Seemakurthi",
      position: "Web Dev Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/6DvuLC00ZiKozzjnzLSLJa/39e9249cb023c12d4881adecb72ebc75/Screenshot_2024-10-01_at_2.30.30_AM.png",
      socials: [ "https://www.linkedin.com/in/sai-avinash-seemakurthi-446195261", "mailto:"]},

  
  {id: 9,
  name: "Shubhankar das",
  position: "Game Dev Head",
  image: "https://images.ctfassets.net/7ghyf81o1fuo/3579nliT4FowxSmj6CYWYj/8d78f5fccda6489e31afec49f6e60389/WhatsApp_Image_2024-10-01_at_02.31.30.jpeg",
  socials: [ "https://www.linkedin.com/in/shubhankar-das-380267261", "mailto:rikidas5621@gmail.com"]}


  ];

  const getSocialIcon = (platform) => {
    if (platform.includes("linkedin")) return faLinkedin;
    if (platform.includes("mailto")) return faGoogle;
    return '';
  };

  return (
    <>
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
          <div className="members">
            {governors.map((member) => (
              <div className="" key={member.id} data-aos="fade-up"> {/* Adjusted columns */}
                <div className="our-team">
                  <img src={member.image} alt={member.name} />
                  <div className="team-content">
                    <h3 className="title">{member.name}</h3>
                    <span className="post">{member.position}</span>
                    <ul className="social">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social}>
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
      </div>
    </>
  );
};

export default Team;