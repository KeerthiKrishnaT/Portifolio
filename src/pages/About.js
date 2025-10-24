import React from "react";
import WhoIM from "../components/WhoIM";
import Github from "../components/Github";
import Techstack from "../components/Techstack";
import Toolstack from "../components/Toolstack";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <WhoIM />
      
      {/* Contact Information */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          <span className="text-[#ab4dea]">Contact Information</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <div>
            <p className="mb-2"><span className="font-semibold text-white">Phone:</span> +91 8848757272</p>
            <p className="mb-2"><span className="font-semibold text-white">Email:</span> keerthikrishna920@gmail.com</p>
            <p className="mb-2"><span className="font-semibold text-white">Address:</span> EdathuKudiyil House, Kanjiramattam, Thodupuzha East PO</p>
          </div>
          <div>
            <p className="mb-2"><span className="font-semibold text-white">LinkedIn:</span> <a href="https://www.linkedin.com/in/keerthi-krishna-24aa95184/" className="text-[#ab4dea] hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/keerthi-krishna-24aa95184</a></p>
            <p className="mb-2"><span className="font-semibold text-white">GitHub:</span> <a href="https://github.com/KeerthiKrishnaT" className="text-[#ab4dea] hover:underline" target="_blank" rel="noopener noreferrer">github.com/KeerthiKrishnaT</a></p>
            <p className="mb-2"><span className="font-semibold text-white">Portfolio:</span> <a href="https://portfolio-keerthi-krishna-ts-projects.vercel.app/" className="text-[#ab4dea] hover:underline" target="_blank" rel="noopener noreferrer">portfolio-keerthi-krishna-ts-projects.vercel.app</a></p>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          <span className="text-[#ab4dea]">Professional Summary</span>
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Results-driven MERN Stack Developer with one year of practical experience in designing, developing, and deploying full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in building responsive user interfaces, RESTful APIs, and implementing authentication and state management. Passionate about writing clean, maintainable code and continuously learning new technologies to deliver efficient and scalable solutions.
        </p>
      </div>

      {/* Work Experience */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          <span className="text-[#ab4dea]">Work Experience</span>
        </h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">MERN Stack Developer | Wyenfos Infotech Pvt Ltd, Thrissur</h3>
          <p className="text-gray-400 mb-4">Duration: April 2025 – Present</p>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#a337ec] mb-2">Project 1: WyenfosBills – Advanced Billing and Management System</h4>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Designed and developed a full-featured MERN stack web application with role-based access for 5 Admins, 1 Super Admin, and multiple Staff accounts.</li>
              <li>• Integrated inventory management, billing modules, credit/debit note systems, and payment summaries with real-time data updates using Socket.IO.</li>
              <li>• Implemented Firebase authentication and security rules to ensure restricted access and data protection.</li>
              <li>• Built responsive dashboard interfaces with advanced filters, charts, and reporting features for profit analysis and transaction tracking.</li>
              <li>• Developed a modular, scalable architecture supporting multiple admin panels, real-time communication, and seamless backend integration.</li>
              <li>• Used modern tools and technologies such as React.js, Node.js, Express.js, MongoDB, JWT, Firebase, and Tailwind CSS.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#a337ec] mb-2">Project 2: Company Website Development</h4>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Created a modern, responsive company website to showcase services, portfolio, and contact details using React.js and Tailwind CSS.</li>
              <li>• Focused on SEO optimization, fast load times, and interactive UI components to enhance user experience.</li>
              <li>• Integrated dynamic sections such as About, Services, and Contact forms, aligning with the company's branding and web standards.</li>
              <li>• Deployed and maintained the site ensuring performance, accessibility, and cross-device compatibility.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          <span className="text-[#ab4dea]">Certifications</span>
        </h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">MERN STACK DEVELOPMENT</h3>
          <p className="text-gray-400 mb-2">CB TECH, Kochi, Kerala, India | 02-2024 TO 07-2024</p>
          <ul className="text-gray-300 space-y-1 ml-4">
            <li>• Build and maintain web applications from front-end to back-end</li>
            <li>• Collaborate with designers and other developers to implement user interfaces</li>
            <li>• Create and manage databases, ensuring data security and integrity</li>
            <li>• Develop server-side logic and integrate with front-end components</li>
            <li>• Optimize applications for maximum speed and scalability</li>
            <li>• Test and deploy applications to various environments</li>
            <li>• Keep up-to-date with industry trends and best practices</li>
            <li>• Participate in code reviews and provide constructive feedback</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">SOFTWARE TESTING</h3>
          <p className="text-gray-400 mb-2">AITEES, Thrissur, Kerala, India | 08-2022 TO 10-2022</p>
          <ul className="text-gray-300 space-y-1 ml-4">
            <li>• Design and execute test plans for software applications</li>
            <li>• Identify, document, and track defects and issues</li>
            <li>• Collaborate with developers to understand system requirements</li>
          </ul>
        </div>
      </div>

      {/* Academic Credentials */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          <span className="text-[#ab4dea]">Academic Credentials</span>
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white">B.E. in Computer Science and Engineering</h3>
            <p className="text-gray-400">Anna University, 2020, Kanyakumari, Tamil Nadu, India</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Plus Two</h3>
            <p className="text-gray-400">Kerala State Board of Higher Secondary Education, 2013, Thrissur, Kerala, India</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">SSLC</h3>
            <p className="text-gray-400">Kerala State Board of Higher Secondary Education, 2011, Thrissur, Kerala, India</p>
          </div>
        </div>
      </div>

      <h1 className="m-auto flex items-center w-full justify-center gap-2 text-gray-200 font-medium text-4xl my-3">
         <p className="text-[#ab4dea]">Professional Skillset </p>
      </h1>
      <Techstack />
      <h1 className="m-auto flex items-center w-full justify-center gap-2 text-gray-200 font-medium text-4xl my-3">
        <p className="text-[#a337ec]">Tools I Use</p> 
      </h1>
      <Toolstack />
      <Github />
    </div>
  );
}

export default About;
