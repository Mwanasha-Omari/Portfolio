"use client";  
import { useState } from 'react'  
import { motion } from 'framer-motion'  
import { FaPhoneAlt } from "react-icons/fa";  
import { IoLocation } from "react-icons/io5";  
import { MdEmail } from "react-icons/md";  
import { FaBehance } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




import emailjs from 'emailjs-com'  

export default function Contact() {  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    message: ''  
  })  
  const [status, setStatus] = useState('')  

  const handleChange = (e: { target: { name: string; value: string; } }) => {  
    const { name, value } = e.target  
    setFormData(prevState => ({ ...prevState, [name]: value }))  
  }  

  const handleSubmit = async (e: { preventDefault: () => void }) => {  
    e.preventDefault()  
    setStatus('Sending...')  

    const serviceId = 'service_40hs5i9'  
    const templateId = 'template_t0hlmu8'  
    const userId = 'fFhmtiVQ0pdQQ9F1B'  

    const templateParams = {  
      name: formData.name,  
      email: formData.email,  
      message: formData.message  
    }  

    emailjs.send(serviceId, templateId, templateParams, userId)  
      .then(() => {  
        setStatus('Message sent successfully!')  
        setFormData({ name: '', email: '', message: '' })  
      })  
      .catch(() => {  
        setStatus('Failed to send message. Please try again later.')  
      })  
  }  

  return (  
    <>  
      <section id="contact" className="mt-80 py-20 bg-blue-950 dark:bg-blue">  
        <div className="container mx-auto px-4">  
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Get in Touch</h2>  
          <div className="flex flex-wrap -mx-4">  
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">  
              <motion.div  
                className="bg-blue-500 rounded-lg shadow-xl p-6 border-2 border-blue-400 text-white"  
                initial={{ opacity: 0, x: -50 }}  
                animate={{ opacity: 1, x: 0 }}  
                transition={{ duration: 0.5 }}>  
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>  
                <div className="flex items-center mb-4">  
                  <MdEmail className="h-6 w-6 mr-2" />  
                  <p>alimwanashaomari@gmail.com</p>  
                </div>  
                <div className="flex items-center mb-4">  
                  <FaPhoneAlt className="h-6 w-6 mr-2" />  
                  <p>+254 768 881 038</p>  
                </div>  
                <div className="flex items-center">  
                  <IoLocation className="h-6 w-6 mr-2" />  
                  <p>Nairobi Kenya, Karen, 616</p>  
                </div> 
                <div className="flex items-center mt-4  hover:text-slate-300 hover:font-bold">
                <FaBehance className="h-6 w-6 mr-2"/>
                   <p><a href='https://www.behance.net/alimwanasha'>Behance</a></p>
                  </div> 
                  <div className="flex items-center mt-4  hover:text-slate-300 hover:font-bold">
                <FaLinkedinIn className="h-6 w-6 mr-2"/>
                   <p><a href='https://www.linkedin.com/in/mwanasha-omari-6b48532b4/'>LinkedIn</a></p>
                  </div> 
                  <div className="flex items-center mt-4  hover:text-slate-300 hover:font-bold">
                <FaXTwitter className="h-6 w-6 mr-2"/>
                   <p><a href='https://x.com/OmariMwanasha'>Twitter</a></p>
                  </div> 
              </motion.div>  
            </div>  
            <div className="w-full lg:w-1/2 px-4">  
              <motion.form  
                className="bg-blue-400 rounded-lg shadow-xl p-6 border-2 border-blue-400 text-white"  
                initial={{ opacity: 0, x: 50 }}  
                animate={{ opacity: 1, x: 0 }}  
                transition={{ duration: 0.5 }}  
                onSubmit={handleSubmit}>  
                <div className="mb-4">  
                  <label htmlFor="name" className="block font-bold mb-2 text-white">Name</label>  
                  <input  
                    type="text"  
                    id="name"  
                    name="name"  
                    value={formData.name}  
                    onChange={handleChange}  
                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"  
                    required  
                  />  
                </div>  
                <div className="mb-4">  
                  <label htmlFor="email" className="block font-bold mb-2 text-white">Email</label>  
                  <input  
                    type="email"  
                    id="email"  
                    name="email"  
                    value={formData.email}  
                    onChange={handleChange}  
                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"  
                    required  
                  />  
                </div>  
                <div className="mb-4">  
                  <label htmlFor="message" className="block font-bold mb-2 text-white">Message</label>  
                  <textarea  
                    id="message"  
                    name="message"  
                    rows={4}  
                    value={formData.message}  
                    onChange={handleChange}  
                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"  
                    required  
                  ></textarea>  
                </div>  
                <button  
                  type="submit"  
                  className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50" >  
                  Send Message  
                </button>  
                {status && (  
                  <p className="mt-4 text-center text-green-400">  
                    {status}  
                  </p>  
                )}  
              </motion.form>  
            </div>  
          </div>  
        </div>  
      </section>  

      <footer className="bg-gray-900 text-white py-4"> 
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Mwanasha. All rights reserved.</p>
        </div>
      </footer>  
    </>  
  );  
}
