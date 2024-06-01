import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 mx-auto mt-20">
      <p className="text-2xl mb-10" style={{marginTop:"10vh"}}>Feel free to contact me</p>
    <div className="flex flex-col justify-center items-center w-4/5 mx-auto mt-20" style={{marginTop:"20vh"}}>
      <div className="flex justify-between items-center w-full">
        <a href="https://www.linkedin.com/in/affan-ahmed-142a4824b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-6xl text-gray-300 hover:text-blue-600"/>
        </a>
        <a href="https://www.github.com/kakanics" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-6xl text-gray-300 hover:text-gray-600"/>
        </a>
        <a href="mailto:affan.bb7@gmail.com">
          <FaEnvelope className="text-6xl text-gray-300 hover:text-red-600"/>
        </a>
        <a href="https://www.instagram.com/kakanics/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-6xl text-gray-300 hover:text-pink-600"/>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Contact;