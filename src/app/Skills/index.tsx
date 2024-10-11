import React from 'react';  

const Skills = () => {  
  const skills = [  
    { name: 'HTML/CSS', percentage: 98 }, 
    { name: 'React.js', percentage: 90 },    
    { name: 'Next.js', percentage: 80 }, 
    { name: 'Python', percentage: 60 },  
    { name: 'Kotlin', percentage: 50 },  
    { name: 'Data Science', percentage: 75 },  

  ];  

  return (  
    <div id="skills" className="mt-[200px] px-4 sm:px-8 md:px-16 lg:px-32">  
      <h1 className="text-5xl text-center mb-[100px]">My Skills</h1>  
      <div className="flex flex-col lg:flex-row justify-evenly">  
        <div className="w-full lg:w-1/2 lg:mr-8">  
          <p className="mb-4 heading-relaxed text-2xl" >One key aspect of my personal experience is my exposure to diverse projects
           and technologies. I have worked on various software development projects, ranging from web to mobile applications.
          This exposure has allowed me to broaden my understanding and tools. It has also taught me how to adapt quickly 
          to new challenges and learn on the go.
          </p>  
        </div>  
        <div className="w-full lg:w-1/2">  
          <div className="flex flex-col items-center mt-8">  
            {skills.map((skill, index) => (  
              <div key={index} className="w-full sm:w-3/4 h-4 bg-gray-200 rounded-full mb-4 relative">  
                <div  
                  className={`h-full bg-blue text-white rounded-full transition-all duration-500 ease-in-out`}  
                  style={{ width: `${skill.percentage}%` }}  
                ></div>  
                <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-sm font-bold">  
                  {skill.name}  
                </span>  
                <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black text-sm font-bold">  
                  {skill.percentage}%  
                </span>  
              </div>  
            ))}  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Skills;
