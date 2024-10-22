"use client";  

import Image from 'next/image';  

const AboutMe = () => {  
  return (  
    <div id='about' className="py-10">  
      <h1 className="text-center text-5xl mb-10 text-black">About Me</h1>  
      <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8'>  
        <div className="w-full md:w-1/2 flex justify-center items-center">  
          <div className="relative group w-[400px] h-[400px]">  
            <Image  
              src='/languages.jpg'  
              alt="Programming Languages"  
              width={400}  
              height={400}  
              className='object-cover rounded-lg shadow-lg transition-transform duration-700 ease-in-out transform group-hover:scale-110'  
            />  
          </div>  
        </div>  
        <div className="w-full md:w-1/2 space-y-8 md:ml-4 flex flex-col justify-center items-center md:items-start">  
        <p className="mb-4 text-2xl">
  Passionate about telehealth, Mwanasha is dedicated  <br/>
  to using innovation to  enhance patient outcomes.  <br/>
  As a Software Developer, she focuses  on new       <br/>
  technologies like telemedicine and electronic  <br/>
  health records to improve  access to care.Her goal  <br/>
  is to push the boundaries of health tech,aiming to  <br/>
  quality of life and drive positive improve health<br/>
  outcomes globally.
</p>


        </div>  
      </div>  
    </div>  
  );  
};  

export default AboutMe;
