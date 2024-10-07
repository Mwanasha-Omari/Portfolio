import React from 'react';  

const CardSection = () => {  
  const cards = [  
    {  
      image: 'firstproject.png',  
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
      title: 'Empowering Rural Teachers',  
      description: 'A platform for uninterrupted delivery of quality education for teachers in rural areas providing them with essential digital skills.',  
      link: '/empowering-rural-teachers',  
    },  
  ];  

  return (  
    <div className="mt-[200px] px-4 sm:px-8 md:px-16 lg:px-32" id='projects'>  
      <h1 className="text-center text-5xl">Projects</h1>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[200px]" id="skills">  
        {cards.map((card, index) => (  
          <div  
            key={index}  
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out"  
          >  
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />  
            <div className="p-6">  
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>  
              <p className="text-gray-600 mb-4">{card.description}</p>  
              <a href={card.link} className="text-blue-500 hover:text-blue-700">  
                Learn More  
              </a>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default CardSection;