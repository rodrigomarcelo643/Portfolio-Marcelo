import React, { useState, useEffect } from 'react';
import './Css/App.css';
import MainContent from './Contents/Main_content';
import ProjectShowcase from './Contents/Projects';
import Footer from './Contents/Footer';
import Portfolio from './Contents/AboutMe';
import Skills from './Contents/Skills';
import Personal from './assets/personal.png';
import Contact from './Contents/Contact';
import Achievements from './Contents/ProjectAchievemets';

export default function App() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize activeLink state on component mount
  useEffect(() => {
    // Retrieve activeLink from localStorage or default to 'Home'
    const initialActiveLink = localStorage.getItem('activeLink') || 'Home';
    setActiveLink(initialActiveLink);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
    // Store activeLink in localStorage
    localStorage.setItem('activeLink', link);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar bg-gray-400 fixed w-full z-50 top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Personal Portfolio text (left side) */}
            <div className="flex items-center">
              <div className="text-black font-bold text-lg flex items-center">
                <img src={Personal} alt="Personal Portfolio" className="h-8 w-auto mr-2" />
                <span>PORTFOLIO</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden pr-2">
              <button
                type="button"
                className={`hamburger relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${isMobileMenuOpen ? 'bg-gray-700' : ''}`}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Desktop navigation links (right side) */}
            <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:flex space-x-4">
                <NavLink
                  label="Home"
                  activeLink={activeLink}
                  handleClick={handleLinkClick}
                />
                <NavLink
                  label="About Me"
                  activeLink={activeLink}
                  handleClick={handleLinkClick}
                />
                <NavLink
                  label="Projects"
                  activeLink={activeLink}
                  handleClick={handleLinkClick}
                />
                <NavLink
                  label="Achievements"
                  activeLink={activeLink}
                  handleClick={handleLinkClick}
                />
                <NavLink
                  label="Contact"
                  activeLink={activeLink}
                  handleClick={handleLinkClick}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
      </nav>

      {/* Main content sections */}
      <div className="main mt-16">
        <ContentSection show={activeLink === 'Home'}>
          <MainContent />
          <Portfolio />
        </ContentSection>
        <ContentSection show={activeLink === 'Projects'}>
          <ProjectShowcase />
        </ContentSection>
        <ContentSection show={activeLink === 'About Me'}>
          <Skills />
        </ContentSection>
        <ContentSection show={activeLink === 'Contact'}>
          <Contact />
        </ContentSection>
        <ContentSection show={activeLink === 'Achievements'}>
          <Achievements />
        </ContentSection>
        
        {/* Add more ContentSection components for other pages */}
      </div>

      <Footer />
    </div>
  );
}

// NavLink component
const NavLink = ({ label, activeLink, handleClick }) => (
  <a
    href="#"
    className={`block rounded-md ${activeLink === label ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white'} px-3 py-2 text-sm font-medium`}
    onClick={() => handleClick(label)}
  >
    {label}
  </a>
);

// MobileMenu component
const MobileMenu = ({ isMobileMenuOpen, activeLink, handleLinkClick }) => (
  <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute inset-x-0 top-16 bg-gray-400 z-50`} id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <NavLink
        label="Home"
        activeLink={activeLink}
        handleClick={handleLinkClick}
      />
      <NavLink
        label="About Me"
        activeLink={activeLink}
        handleClick={handleLinkClick}
      />
      <NavLink
        label="Projects"
        activeLink={activeLink}
        handleClick={handleLinkClick}
      />
      <NavLink
        label="Achievements"
        activeLink={activeLink}
        handleClick={handleLinkClick}
      />
      <NavLink
        label="Contact"
        activeLink={activeLink}
        handleClick={handleLinkClick}
      />
    </div>
  </div>
);

// ContentSection component for animations
const ContentSection = ({ show, children }) => (
  <div className={`content-section ${show ? 'fade-in' : 'fade-out'}`}>
    {show && children}
  </div>
);
