import React from 'react';
import './../Css/Skills.css';
import Education from './Education';

const Skills = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto bg-gray-400  whole-bg">

        {/* Box for the header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8" style={{ marginBottom: '100px', marginTop: '40px' }}>
          <header className="text-center">
            <h1 className="text-4xl font-bold about">About Me</h1>
            <p className="mt-4 text-lg education-bg">Education Background</p>
            <Education/>
            
          </header>
            {/* Title for Programming Languages */}
            <h2 className="text-4xl font-bold mb-4 text-center text-blue-600 Title">Programming Languages</h2>
        </div>
        

      

        {/* Box 1: React js */}
        <div className="flex flex-col md:flex-row mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 md:mr-4 md:w-1/2 box languages">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">React.js</h2>
           
            {/* Progress bar */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-theme">
                    Proficiency
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-white">
                    10%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-theme">
                <div style={{ width: '10%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
          </div>

          {/* Box 2: PHP */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-4 md:mt-0 md:w-1/2 box languages">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">PHP</h2>
           
            {/* Progress bar */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-violet-theme">
                    Proficiency
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-white">
                    25%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-violet-theme">
                <div style={{ width: '25%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 3: Kotlin */}
        <div className="flex flex-col md:flex-row mb-8 " >
          <div className="bg-white rounded-lg shadow-md p-6 md:mr-4 md:w-1/2 box languages">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Kotlin</h2>
        
            {/* Progress bar */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-kotlin-theme">
                    Proficiency
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-white">
                    5%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-kotlin-theme">
                <div style={{ width: '5%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-kotlin-500"></div>
              </div>
            </div>
          </div>

          {/* Box 4: Java */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-4 md:mt-0 md:w-1/2 box languages">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Java</h2>
           
            {/* Progress bar */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-java-theme">
                    Proficiency
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-white">
                    30%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-java-theme">
                <div style={{ width: '30%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-java-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 5: Python */}
        <div className="flex flex-col md:flex-row mb-8 ">
          <div className="bg-white rounded-lg shadow-md p-6 md:mr-4 md:w-1/2 box languages">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Python</h2>
        
            {/* Progress bar */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-python-theme">
                    Proficiency
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-white">
                    15%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-python-theme">
                <div style={{ width: '15%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-python-500"></div>
              </div>
            </div>
          </div>

          {/* Box 6: JavaScript */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-4 md:mt-0 md:w-1/2 box languages">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">JavaScript</h2>
           
            {/* Progress bar */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-js-theme">
                    Proficiency
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-white">
                    20%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-js-theme">
                <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-js-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional boxes can be added similarly */}
      </div>
    </div>
  );
};

export default Skills;
