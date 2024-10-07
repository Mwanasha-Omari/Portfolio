"use client";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const FooterContent = () => {
  return (
<div id="contact"> 
    <footer className="bg-brown text-white py-8 md:py-12 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-semibold mb-4 text-white text-xl">Get In Touch</h2>
            <div className="flex items-center mb-4"> 
              <FaPhone className="mr-4 w-6 h-6 md:w-7 md:h-7" />
              <p className="text-base md:text-lg">+254 768 881 038</p>
            </div>               
            <div className="flex items-center mb-4"> 
              <MdEmail className="mr-4 w-6 h-6 md:w-7 md:h-7" />
              <p className="text-base md:text-lg">alimwanashaomari@gmail.com</p>
            </div>
          </div>
          
          <div className="text-left md:text-center">
            <h2 className="font-semibold mb-4 text-white text-xl">About Us</h2>
            <p className="mb-4 text-base md:text-lg">Mission</p> 
            <p className="mb-4 text-base md:text-lg">Vision</p> 
          </div>
          
          <div className="text-left md:text-right">
            <h2 className="font-semibold mb-4 text-white text-xl">Location</h2>
            <div className="flex items-center mb-4 justify-start md:justify-end"> 
              <FaLocationDot className="mr-4 w-6 h-6 md:w-7 md:h-7" />
              <p className="text-base md:text-lg">Karen Hardy 616 Korongo Road</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" /> 
      <div className="text-center px-4">
        <p className="text-sm md:text-base">© Copyright @2024 Mwanasha Omari. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}

export default FooterContent;