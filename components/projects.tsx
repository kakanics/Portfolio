import React from 'react';
import projects from './projects.json';
import certificates from './certificates.json'; // Import the certificates.json file

const Project = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden p-4 m-4">
            <div style={{ paddingTop: '56.25%' }} className="relative">
              <img src={project.pathToImage} alt={project.projectName} className="absolute top-0 left-0 w-full h-full object-contain"/>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-2xl text-black">{project.projectName}</h2>
              <p className="text-black">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Project</a>
            </div>
          </div>
        ))}
      </div>
  <h1 className="text-3xl font-bold text-white mb-4 text-center" style={{marginBottom:"10vh", marginTop:"20vh"}}>Certificates</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => ( // Map over the certificates
          <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden p-4 m-4">
            <div style={{ paddingTop: '56.25%' }} className="relative">
              <img src={certificate.pathToImage} alt={certificate.certificateName} className="absolute top-0 left-0 w-full h-full object-contain"/>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-2xl text-black">{certificate.certificateName}</h2>
              <p className="text-black">{certificate.description}</p>
              <a href={certificate.link} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;