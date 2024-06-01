// skills.tsx
import React from "react";

const technicalSkills = [
  "Python",
  "C/C++",
  "C#",
  "TypeScript",
  "Node.JS",
  "React.JS",
  "ASP.NET",
  "Express.JS",
  "Database Design",
  "Game Development (Unity)",
  "App development",
  "MASM",
  "Problem Solving",
  "PowerBI",
  "Embedded-C"
];
const nonTechnicalSkills = [
  "Time Management",
  "Project Management",
  "Creativity",
  "Photo Editing",
  "Video Editing",
  "VideoGraphy",
  "Blender 3D",
  "3D Modelling",
  "After effects",
  "Photoshop",
  "Photography",
];

const Skills: React.FC = () => {
  return (
      <div className="flex w-full justify-around px-8 space-x-8">
        <div className="max-w-7xl w-full bg-gray-800 p-8 rounded shadow-lg hover:bg-gray-700 transition-colors duration-200">
          <h2
            className="text-2xl font-semibold mb-4 text-center"
            style={{ marginTop: "1  vh", marginBottom: "4vh" }}
          >
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-between">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex justify-center bg-gray-700 text-white px-2 py-1 rounded mb-2 mr-2 hover:bg-gray-600 hover:scale-110 transform transition-all duration-200"
                style={{ flex: "1 0 30%", minWidth: "150px", margin: "0.5rem" }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl w-full bg-gray-800 p-8 rounded shadow-lg hover:bg-gray-700 transition-colors duration-200">
          <h2
            className="text-2xl font-semibold mb-4 text-center"
            style={{ marginTop: "1vh", marginBottom: "4vh" }}
          >
            Non   Technical Skills
          </h2>
          <div className="flex flex-wrap justify-between">
            {nonTechnicalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex justify-center bg-gray-700 text-white px-2 py-1 rounded mb-2 mr-2 hover:bg-gray-600 hover:scale-110 transform transition-all duration-200"
                style={{ flex: "1 0 30%", minWidth: "150px", margin: "0.5rem" }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        </div>
  );
};

export default Skills;
