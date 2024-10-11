"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const LandingPage: React.FC = () => {
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
    <div id="home" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-7xl">
        <div className="md:w-1/2 md:mr-8 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-loose">
            Hello, my name is Mwanasha Omari
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-loose mt-4">
            <span className={`text-blue transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {roles[currentRoleIndex]}
            </span>
          </h2>
        </div>
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative">
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
              <Image 
                src='/Images/OMARI.png' 
                alt="Mwanasha Omari" 
                width={350} 
                height={350} 
                className='rounded-full object-cover shadow-lg' 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
