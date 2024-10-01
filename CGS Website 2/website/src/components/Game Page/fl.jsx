import React, { useState } from 'react';
import './fl.css'; // Custom CSS for flip effect

const Flip = ({ title, image, description, details }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Flipping Card */}
      <div className="flip-card w-80 h-64 m-4 cursor-pointer" onClick={() => setShowModal(true)}>
        {/* Card Inner */}
        <div className="flip-card-inner">
          {/* Card Front */}
          <div className="flip-card-front absolute w-full h-full bg-gray-800 shadow-lg rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
          </div>

          {/* Card Back */}
          <div className="flip-card-back absolute w-full h-full bg-pink-500 text-white rounded-lg">
            <div className="p-4 h-full flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p>{description}</p>
              <p className="mt-4">Click to know more!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-white">{title}</h2>
                <button onClick={() => setShowModal(false)}>
                  X
                </button>
              </div>
              <div className="mt-4">
                <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <p>{details}</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Flip;
