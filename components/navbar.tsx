'use client';

import React, { useEffect, useState } from 'react';
import { FaHome, FaInfoCircle, FaProjectDiagram } from 'react-icons/fa'; // Example icons

interface NavbarProps {
  sectionTitles: string[];
}

const Navbar: React.FC<NavbarProps> = ({ sectionTitles }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Breakpoint for small screens
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section${index + 1}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIconsForSection = (index: number) => {
    const icons = [
      <FaHome key="home" className="text-white text-xl" />,
      <FaInfoCircle key="info" className="text-white text-xl" />,
      <FaProjectDiagram key="project" className="text-white text-xl" />,
      <FaProjectDiagram key="contact" className="text-white text-xl" />,
    ];

    return (
      <div className="">
          <div key={icons[index].key} className="cursor-pointer">
            {icons[index]}
          </div>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow-md z-50 h-16 flex items-center">
      <div className="container mx-auto flex justify-between px-4">
        <div className="text-lg font-regular text-white px-4 py-1 rounded">
          {!isSmallScreen && 'Portfolio of Affan Ahmed'}
        </div>
        <ul className="flex space-x-4">
          {sectionTitles.map((title, index) => (
            <li
              key={index}
              className="cursor-pointer text-lg font-regular text-white hover:text-blue-400 transition-all duration-300 py-1 rounded flex items-center"
              onClick={() => scrollToSection(index)}
            >
              {isSmallScreen ? getIconsForSection(index) : title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
