"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const LandingPage = () => {
  const roles = [
    "A Software Developer",
    "A UI/UX Designer",
    "A Product Manager",
    "A Data Analyst"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true);
      }, 500); 
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className='min-h-screen flex flex-col justify-center py-20 px-4 sm:px-8 md:px-16 lg:px-32'>
      <div className="flex flex-col md:flex-row items-center mb-5">
        <div className="flex flex-col items-center md:items-start md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-loose">
            Hello, my name is Mwanasha Omari
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-loose">
            <span className={`text-brown transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {roles[currentRoleIndex]}
            </span>
          </h2>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative group">
            <Image src='/Images/OMARI.png' alt="Mwanasha Omari" width={240} height={240} className='rounded-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 shadow-lg group-hover:shadow-xl'/>
            <div className="absolute inset-0 rounded-full border-4 border-brown opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
