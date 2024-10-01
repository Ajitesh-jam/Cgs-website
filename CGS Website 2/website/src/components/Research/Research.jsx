import React from 'react';
import FlippingCard from './flip'; // Import the FlippingCard component
import upanshu from '../../assets/Team/upanshu.png';
import vedant from '../../assets/Team/vedant.png';
import ojas from '../../assets/Team/ojas.png';

const Team = () => {
  const members = [
    {
      id: 1,
      title: 'Upanshu Jain',
      image: upanshu,
      description: 'RnD Head',
      details: 'Upanshu is the head of RnD with a focus on innovative solutions in graphics design...'
    },
    {
      id: 2,
      title: 'Vedanta Hazra',
      image: vedant,
      description: 'Research Head',
      details: 'Vedanta leads the research team, ensuring the latest trends are implemented...'
    },
    {
      id: 3,
      title: 'Ojas Deshmukh',
      image: ojas,
      description: 'Advisor',
      details: 'Ojas provides advisory support with deep technical expertise in design and strategy...'
    }
  ];

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold text-pink-500 mb-8">Meet the Team</h1>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {members.map((member) => (
            <FlippingCard
              key={member.id}
              title={member.title}
              image={member.image}
              description={member.description}
              details={member.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
