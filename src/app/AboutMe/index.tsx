"use client";  
import Image from 'next/image';  

const AboutMe = () => {  
  return (  
    <div id='about' className="py-10">  
      <h1 className="text-center text-5xl mb-10 text-black">About Me</h1>  
      <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8'>  
        <div className="w-full md:w-1/2 flex justify-center items-center">  
          <div className="relative group">  
            <Image 
              src='/languages.jpg' 
              alt="Programming Languages" 
              width={400} 
              height={400} 
              className='object-cover rounded-lg shadow-lg transition-transform duration-700 ease-in-out transform group-hover:scale-110' 
            />  
          </div>  
        </div> 
        <div className="w-full md:w-1/2 space-y-8 md:ml-4 justify-center items-center">
          <p className="mb-4 text-2xl leading-relaxed text-center md:text-left">
            Passionate about telehealth, Mwanasha is dedicated to using innovation to enhance patient outcomes.
            As a Software Developer, she focuses on new technologies like telemedicine and electronic health 
            records to improve access to care. Her goal is to push the boundaries of health tech, aiming to 
            improve quality of life and drive positive health outcomes globally. 
          </p> 
          <div className="flex justify-center">
            <button className="bg-blue w-[200px] h-[50px] rounded-full font-extrabold text-white hover:opacity-80">
              <a href="https://www.figma.com/design/uZELxdC71bKgIFDmxZhIF1/Mwanasha's-CV?node-id=18-19&t=VQmaycuCBn3uBa1h-1">VIEW CV</a>
            </button>
          </div>
        </div>  
      </div>  
    </div>  
  );  
};  

export default AboutMe;
