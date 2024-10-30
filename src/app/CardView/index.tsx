'use client'
import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'; 

const CardSection = () => {
  const cards = [
    {
      image: '/Images/firstproject.png',
      title: 'Recipe Nutrition Calculator',
      description: 'An application that calculates the nutritional information of a recipe.',
      link: 'https://nutrition-analyzer.vercel.app/analyzer.html',
    },
    {
      image: '/Images/secondproject.png',
      title: 'BMI Calculator',
      description: 'Body Mass Index calculator that calculates and categorizes BMI based on user input.',
      link: 'https://bmi-calculator-two-gray.vercel.app/',
    },
    {
      image: '/Images/casestudy.png',
      title: 'Edukeri',
      description: 'A platform for uninterrupted delivery of quality education for teachers in rural areas providing them with essential digital skills.',
      link: '/empowering-rural-teachers',
    },
    {
      image: '/Images/kipepeo-logo.png',
      title: 'Recipe Nutrition Calculator',
      description: 'Elegance meets innovation. Bespoke fashion and intuitive UI blend artistry with seamless experiences—captivating and unique.',
      link: 'https://www.figma.com/design/Tv4qzYBLEiv6OrRDi0IXnL/Haute-Couture-Fashion-business?node-id=0-1&node-type=canvas&t=ywC4svZ7WYg3mLvk-0',
    },
    {
      image: '/Images/Akira oil Logo.png',
      title: 'Akira Oil',
      description: 'LPG Ordering Website.',
      link: 'https://www.figma.com/design/b7fIQmaiUzRVS1CpELbwyo/Akiraoil-UI?node-id=108-17&node-type=canvas&t=zEJlxVlU5MfTeiwV-0',
    },
    {
      image: '/Images/album cover.png',
      title: 'Empowering Rural Teachers',
      description: 'This music platform features a modern, minimalist design in purple and lavender. Organized sections for artists and track listings create a user-friendly experience.',
      link: 'https://www.figma.com/design/LQSHfS7RH10uWQYRqvBLxB/Album-Assignment%2FDesign?node-id=24-6&node-type=canvas&t=zEJlxVlU5MfTeiwV-0',
    },
  ];

  const pageTitles = [
    ["Recipe Nutrition Calculator", "BMI Calculator", "Edukeri"],
    ["Kipepeo Haute Couture Fashion business", "Akira Oil", "Album Design"],
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < 1) { 
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) { 
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedCards = cards.slice(currentPage * 3, currentPage * 3 + 3);

  return (
    <div className="mt-[200px] px-4 sm:px-8 md:px-16 lg:px-32 relative" id="projects">
      <h1 className="text-center text-5xl mb-6">
        {currentPage === 0 ? "Projects" : "Design Projects"}
      </h1>
      <div onClick={handlePrevious} className={`cursor-pointer text-3xl text-blue-500 hover:text-blue-700 ${currentPage === 0 ? 'opacity-50 pointer-events-none' : ''} absolute left-4 top-1/2 transform -translate-y-1/2 z-10`}>
        <GrFormPrevious />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[100px]" id="skills">
        {displayedCards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">
                {pageTitles[currentPage][index]}
              </h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <a href={card.link} className="text-blue-500 hover:text-blue-700">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div onClick={handleNext} className={`cursor-pointer text-3xl text-blue-500 hover:text-blue-700 ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''} absolute right-4 top-1/2 transform -translate-y-1/2 z-10`}>
        <GrFormNext />
      </div>
    </div>
  );
};

export default CardSection;
