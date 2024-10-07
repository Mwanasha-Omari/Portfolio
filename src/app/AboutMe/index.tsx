"use client";
import Image from 'next/image';


const AboutMe = () => {
  return (
<div id='about'>
    <h1 className="text-center text-5xl">About Me</h1>
 <div className='flex flex-col md:flex-row justify-between items-center'>
<div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
  <Image src='/languages.jpg' alt="Programming Languages" width={250}  height={250} className='object-cover rounded-lg shadow-lg'/>
</div>
<div className="w-full md:w-1/2 md:ml-8 space-y-4">
  <p className="text-xl md:text-2xl leading-relaxed">
    The integration of technology in healthcare has transformed medical treatment and patient care. Mwanasha, 
    passionate about telehealth, is dedicated to using innovation to enhance patient outcomes and streamline
    processes. As a Software Developer, she focuses on new technologies like telemedicine and electronic 
    health records to improve access to care. Her goal is to push the boundaries of health tech, envisioning 
    a future where technology enables personalized and efficient healthcare delivery. Ultimately, she aims to 
    improve quality of life and drive positive health outcomes worldwide.
  </p>

  <div className="overflow-x-auto">
    <table className="w-full mt-8 rounded-lg overflow-hidden shadow-lg">
      <thead>
        <tr className="bg-gray-100">
          <th className="text-left text-xl font-bold text-gray-800 px-6 py-4">Name</th>
          <th className="text-left text-xl font-bold text-gray-800 px-6 py-4">Email</th>
          <th className="text-left text-xl font-bold text-gray-800 px-6 py-4">Contact</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <tr>
          <td className="text-gray-700 text-lg px-6 py-4">Mwanasha Omari</td>
          <td className="text-gray-700 text-lg px-6 py-4">alimwanashaomari@gmail.com</td>
          <td className="text-gray-700 text-lg px-6 py-4">+254 7688 1038</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div> 
</div>
  );
}

export default AboutMe;