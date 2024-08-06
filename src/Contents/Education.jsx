// Education.js

import React from 'react';
import './../Css/Education.css';
import SWU from '../assets/SWU.png';
import Caliongan from '../assets/Caliongan.jpg';
import Elementary from '../assets/Elementary.jpg';
import GraduateIcon from '../assets/graduate.jpg';
import Study  from '../assets/study.jpg';

const Education = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 education-box">
      
      <div className="bg-gray-200 p-4 rounded-lg mb-4 md:w-1/3">
        {/* Content for the first box */}
        <h2 className="text-lg font-bold mb-2 school">CALIONGAN ELEMENTARY SCHOOL</h2>
        <div className="flex items-center mb-2 FLEX"> 
            {/* Flex container to align icon and text */}
            <img src={Elementary} alt="Elementary School" className="rounded-lg " />
          <img src={GraduateIcon}  className ="img-1"alt="Graduate Icon" style={{ width: '30px', height: '30px', marginRight: '8px' }} />
          <p>Elementary Graduate<br></br> of 2016</p>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg mb-4 md:w-1/3">
        {/* Content for the second box */}
        <h2 className="text-lg font-bold mb-2 school">CALIONGAN NATIONAL HIGH SCHOOL</h2>
        <div className="flex items-center mb-2 FLEX"> 
            {/* Flex container to align icon and text */}
            <img src={Caliongan} alt="National High School" className="rounded-lg " />
          <img src={GraduateIcon} className ="img-1" alt="Graduate Icon" style={{ width: '30px', height: '30px', marginRight: '8px' }} />
          <p>High School Graduate <br></br>of 2023</p>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg mb-4 md:w-1/3">
        {/* Content for the third box with image */}
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2 school">SOUTHWESTERN UNIVERSITY PHINMA</h2>
          <div className="flex items-center justify-center mb-2 FLEX"> 
            {/* Flex container to align icon and text */}
            <img src={SWU} alt="Southwestern University" className="rounded-lg " />
            <img src={Study} alt="Study"  className ="img-1" style={{ width: '40px', height: '40px', marginRight: '0px' }} />
            <p>Currently Studying as<br></br> Second Year BSIT</p>
          </div>
        
        </div>
      </div>
      
    </div>
  );
};

export default Education;
