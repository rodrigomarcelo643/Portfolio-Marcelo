import React, { useEffect, useRef } from 'react';
import './../Css/AboutMe.css'; 
import Personal from './../assets/personal.png'; 
import SOM from './../assets/SOM.png'; 
import Ordering from './../assets/ordering.jpg'; 
import Application from './../assets/application_msis.jpg'; 

function Portfolio() {
  const projectsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      projectsRef.current.forEach((project, index) => {
        if (isElementInViewport(project)) {
          project.classList.add('visible');
        } else {
          project.classList.remove('visible');
        }
      });
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen about-Top">
      <header className="bg-gray-600 text-white py-10" style={{ height: '200px' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold"></h1>
          <p className="mt-2"></p>
        </div>
      </header>
      <main className="container mx-auto py-10">
        <section ref={(el) => projectsRef.current.push(el)} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-2">
            <img src={Personal} alt="Personal Website" className="h-8 w-8 mr-2 home-img" />
            <h2 className="text-2xl font-bold">Personal Website</h2>
          </div>
          <p className="text-gray-700 mb-4">A personal website built using React, showcasing my skills and projects.</p>
          <a href="https://example.com/project1" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
        </section>
        <section ref={(el) => projectsRef.current.push(el)} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-2">
            <img src={Ordering} alt="Online Food Restaurant" className="h-8 w-8 mr-2 home-img" />
            <h2 className="text-2xl font-bold">Online Food Restaurant</h2>
          </div>
          <p className="text-gray-700 mb-4">An e-commerce store built with Java integrated with payment gateway.</p>
          <a href="https://example.com/project2" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
        </section>
        <section ref={(el) => projectsRef.current.push(el)} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-2">
            <img src={SOM} alt="Medical Student Information System" className="h-8 w-8 mr-2 home-img" />
            <h2 className="text-2xl font-bold">Medical Student Information System</h2>
          </div>
          <p className="text-gray-700 mb-4">A System where medical student doctors can upload necessary files and can view it as a proof that they submitted with the compliance of the requirements.</p>
          <a href="https://example.com/project3" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
