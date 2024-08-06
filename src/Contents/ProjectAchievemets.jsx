import React from 'react';
import './../Css/Achievements.css';
import Project1Image from '../assets/devs.jpg'; 
import Project2Image from '../assets/personal.png';
import Moment1Image from '../assets/moment1.jpg'; 
import Moment2Image from '../assets/moment2.jpg'; 
import Moment3Image from '../assets/moment3.jpg'; 

const ProjectAchievements = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 top-achi">
      {/* Project 1 */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <img src={Project1Image} alt="Project 1" className="h-16 w-16 rounded-full object-cover mr-4" />
          <h2 className="text-2.5xl font-bold text-gray-700">Mini Hackathon (The Company Cebu) </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-b-2 pb-4 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Achievements</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                Completed prototype in 3 weeks.
              </li>
              <li className="mb-2">
                Integrated AI for image recognition.
              </li>
              <li>
                Reached 10,000 users in first month.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hackathon Participation</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                Participated Mini Hackathon
              </li>
              <li>
                Presented a Functional System 
              </li>
            </ul>
          </div>
        </div>
        {/* Moments for Project 1 */}
        <div className="flex justify-between mt-6 moments">
          <img src={Moment1Image} alt="Moment 1" className="h-24 w-24 md:h-auto md:w-auto rounded-lg object-cover max-w-full md:max-w-350px" />
          <img src={Moment2Image} alt="Moment 2" className="h-24 w-24 md:h-auto md:w-auto rounded-lg object-cover max-w-full md:max-w-350px" />
          <img src={Moment2Image} alt="Moment 2" className="h-24 w-24 md:h-auto md:w-auto rounded-lg object-cover max-w-full md:max-w-350px" />
        </div>
      </div>

      {/* Project 2 */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <img src={Project2Image} alt="Project 2" className="h-16 w-16 rounded-full object-cover mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">Project 2</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-b-2 pb-4 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Achievements</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                Implemented scalable architecture.
              </li>
              <li className="mb-2">
                Received 5-star rating on app stores.
              </li>
              <li>
                Featured on TechCrunch.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hackathon Participation</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                Won Best UX/UI Design award at Local Hackathon.
              </li>
              <li>
                Participated in CodeFest 2022.
              </li>
            </ul>
          </div>
        </div>
        {/* Moments for Project 2 */}
        <div className="flex justify-between mt-6 moments">
          <img src={Moment1Image} alt="Moment 1" className="h-24 w-24 md:h-auto md:w-auto rounded-lg object-cover max-w-full md:max-w-350px" />
          <img src={Moment2Image} alt="Moment 2" className="h-24 w-24 md:h-auto md:w-auto rounded-lg object-cover max-w-full md:max-w-350px" />
          <img src={Moment2Image} alt="Moment 2" className="h-24 w-24 md:h-auto md:w-auto rounded-lg object-cover max-w-full md:max-w-350px" />
        </div>
      </div>
    </div>
  );
};

export default ProjectAchievements;
