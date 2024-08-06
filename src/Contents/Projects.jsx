import React from 'react';
import './../Css/ProjectShowcase.css';


const ProjectShowcase = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen projects">
      <div className="Title-top mb-8">
        <h1 className="text-4xl font-bold personal-title text-3xl personal">Personal Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Project Box 1 */}
        <div className="project-box max-w-[400px] max-h-[400px] box1 boxes">
          <div className="project-content">
            <h2 className="project-title">MEDICAL STUDENT INFORMATION SYSTEM</h2>
            <p className="project-description">
              The Medical Student Information System is a comprehensive platform designed to streamline the management of medical student data. It facilitates efficient record-keeping and management of student profiles, academic progress, clinical rotations, and other pertinent information.
            </p>
          </div>
        </div>

        {/* Project Box 2 */}
        <div className="project-box max-w-[400px] max-h-[400px] box2 boxes">
          <div className="project-content">
            <h2 className="project-title">ONLINE ORDERING SYSTEM</h2>
            <p className="project-description">
              The Online Ordering System is a sophisticated Java application designed to streamline the process of ordering goods or services over the internet. It provides users with a seamless experience for browsing products, placing orders, and managing their accounts. The system supports multiple payment gateways, ensuring secure transactions.
            </p>
          </div>
        </div>

        {/* Project Box 3 */}
        <div className="project-box max-w-[400px] max-h-[400px] box3 boxes">
          <div className="project-content">
            <h2 className="project-title">MOBILE ANDROID APPLICATION OF MSIS</h2>
            <p className="project-description">
             This is an application of the Medical Student Information System.
            </p>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default ProjectShowcase;
