import React from 'react';
import './../Css/Resume.css';

const Resume = ({ isOpen, closeModal }) => {
  // Modal content can be hardcoded for simplicity
  const resumeContent = `
    Marcelo Rodrigo
    Web Developer
    Contact: example@email.com
    Skills: React, JavaScript, HTML, CSS
    Experience: 5+ years in web development
    Education: Bachelor's in Computer Science
    Additional Info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Proin condimentum leo at elit malesuada, vel varius magna aliquet. 
    Fusce vehicula, ligula at commodo laoreet, orci dolor aliquam nisi, 
    vel feugiat erat ligula ut velit.
  `;

  return (
    <>
      {/* Modal backdrop */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 t-main">
          {/* Modal content */}
          <div className="Main-Section">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Picture and additional content */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <div className="profilePicture" />
              <div className="mt-4 additional" >
                <h3 className="text-lg font-semibold mb-2">Additional Info</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum leo at elit malesuada,
                  vel varius magna aliquet. Fusce vehicula, ligula at commodo laoreet, orci dolor aliquam nisi, vel
                  feugiat erat ligula ut velit.
                </p>
              </div>
            </div>

            {/* Resume content */}
            <div className="w-full md:w-2/3 ml-0 md:ml-6 mt-6 md:mt-0">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Marcelo Rodrigo</h2>
              <p className="text-gray-700 mb-4">
                "I'm a hardworking and passionate individual. These qualities drive me to pursue my goals with
                dedication and enthusiasm."
              </p>

              {/* Contact Details */}
              <div className="border-t border-gray-300 pt-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
                <p className="text-gray-700 mb-2">Contact: example@email.com</p>
              </div>

              {/* Skills */}
              <div className="border-t border-gray-300 pt-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <p className="text-gray-700 mb-2">Skills: React, JavaScript, HTML, CSS</p>
              </div>

              {/* Experience */}
              <div className="border-t border-gray-300 pt-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Experience</h3>
                <p className="text-gray-700 mb-2">Experience: 5+ years in web development</p>
              </div>

              {/* Education */}
              <div className="border-t border-gray-300 pt-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-gray-700 mb-2">Education: Bachelor's in Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
