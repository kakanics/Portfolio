// components/Navbar.tsx
'use client';

import React from 'react';

interface NavbarProps {
  sectionTitles: string[];
}

const Navbar: React.FC<NavbarProps> = ({ sectionTitles }) => {
  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section${index + 1}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow-md z-50 h-16 flex items-center">
      <div className="container mx-auto flex justify-between px-4">
        <div className="text-lg font-regular text-white px-4 py-1 rounded">
          Portfolio of Affan Ahmed
        </div>
        <ul className="flex space-x-8">
          {sectionTitles.map((title, index) => (
            <li
              key={index}
              className="cursor-pointer text-lg font-regular text-white hover:text-blue-400 transition-all duration-300 px-4 py-1 rounded"
              onClick={() => scrollToSection(index)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;