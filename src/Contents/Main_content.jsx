// MainContent.jsx

import React, { useState } from 'react';
import './../Css/Main_content.css';
import marceloLogo from './../assets/marcelo1.jpg';
import githubIcon from './../assets/github.png';
import facebookIcon from './../assets/facebook.png';
import instagramIcon from './../assets/Instagram.png';
import LinkedIn from './../assets/LinkedIn.png';
import Resume from './Resume';

const MainContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-wrap justify-center sm:justify-start main-content" style={{ marginBottom: '150px' }}>
      {/* Left side content */}
      <div className="w-full sm:w-1/2 p-4 flex flex-col justify-center items-center sm:items-start">
        <div className="Content">
          <h2 className="text-gray-600 leading-relaxed dev-text">I'm Marcelo Rodrigo</h2>
          <p className="text-gray-700 leading-relaxed dev-text" style={{ maxWidth: '500px' }}>
            I'm a web developer passionate about creating meaningful and delightful web experiences.
          </p>

          {/* Social links and View CV button */}
          <div className="social-links mt-4 flex flex-wrap">
            <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src={githubIcon} alt="GitHub" style={{ width: '60px', height: '30px', marginRight: '10px' }} />
            </a>
            <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src={facebookIcon} alt="Facebook" style={{ width: '35px', height: '30px', marginRight: '10px' }} />
            </a>
            <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src={instagramIcon} alt="Instagram" style={{ width: '53px', height: '46px', marginTop: '-5px', marginRight: '10px' }} />
            </a>
            <a href="https://linkedin.com/example" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src={LinkedIn} alt="LinkedIn" style={{ width: '34px', height: '31px', marginTop: '0px' }} />
            </a>

            {/* View CV button */}
            <button
              onClick={openModal}
              className="btn-view-cv bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-auto mr-auto sm:mr-0"
            >
              View CV
            </button>
          </div>
        </div>
      </div>

      {/* Right side image */}
      <div className="w-full sm:w-1/2 p-4 flex justify-center items-center sm:items-end">
        <img
          className="max-w-full h-auto sm:max-w-600 img-floating"
          src={marceloLogo}
          alt="Portfolio"
        />
      </div>

      {/* Modal */}
      <Resume isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default MainContent;
