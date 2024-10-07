"use client";
import React, { useState, ReactNode } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 text-base text-black py-4 px-6 w-full flex font-sans items-center z-50 backdrop-blur-md bg-white/50 sm:px-8 md:px-16 lg:px-32">
      <div className="flex items-center w-full justify-between">
        <div className="flex-shrink-0">
        </div>
        <div className="hidden md:flex gap-8 lg:gap-40 mt-2 text-2xl mr-8 lg:mr-40">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none backdrop-blur-md bg-white/50 p-2 rounded"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/80 backdrop-blur-md z-50 flex flex-col items-center justify-start pb-12 h-screen"> 
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-black focus:outline-none p-2 rounded"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex-grow flex flex-col items-center justify-center"> 
            <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className="text-primary-amber hover:text-brown font-bold">
      {children}
    </a>
  );
}

interface MobileNavLinkProps {
  href: string;
  children: ReactNode;
  onClick: () => void;
}

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <a href={href} onClick={onClick} className="block px-3 py-4 text-2xl font-bold text-primary-amber hover:text-brown">
      {children}
    </a>
  );
}

export default Navbar;