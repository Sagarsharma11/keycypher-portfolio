"use client"
import React, { useState } from 'react';
import {
  FaDiscord,
  FaLinkedin,
  FaXTwitter,
  FaRedditAlien,
  FaYoutube,
  FaInstagram,
  FaBook,
  FaBlog,
  FaBriefcase,
  FaImages,
} from 'react-icons/fa6';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Community', 'Enterprise', 'Resources', 'Pricing'];

  return (
    <header className="bg-gray-950 text-white px-4 md:px-8 py-3 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        {/* <div className="text-2xl font-bold italic text-white">Keycypher</div>
         */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="SecureScan Logo"
            className="h-8 w-auto sm:h-10"
          />
        </a>
        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex space-x-6 items-center text-sm">
          <a href="#" className="hover:text-gray-300">Community</a>
          <a href="#" className="hover:text-gray-300">Enterprise</a>


          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-300">
              <span>Resources</span>
              <span className="text-xs">▼</span>
            </button>

            <div className="absolute left-0 top-full mt-3 hidden group-hover:flex bg-[#111] border border-gray-700 rounded-lg shadow-lg p-6 text-sm text-white z-50 space-x-12 w-max">
              <div>
                <h4 className="text-gray-400 font-semibold mb-3">RESOURCES</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <FaBook /> Docs & Help Center
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <FaBlog /> Blog
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <FaImages /> Bolt Gallery
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <FaBriefcase /> Careers — we're hiring!
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-400 font-semibold mb-3">COMMUNITY</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <FaDiscord /> Discord
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <FaYoutube /> YouTube
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <FaInstagram /> Instagram
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <FaLinkedin /> LinkedIn
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <FaXTwitter /> Twitter/X
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <FaRedditAlien /> Reddit
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <a href="#" className="hover:text-gray-300">Pricing</a>
        </nav> */}

        {/* Desktop Icons + Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <FaDiscord className="text-gray-400 hover:text-white cursor-pointer" />*/}
          <a href=" https://x.com/Thekeycypher" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-gray-400 hover:text-white cursor-pointer" />
          </a>
          <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer" /> 
          {/* <FaRedditAlien className="text-gray-400 hover:text-white cursor-pointer" /> */}
          <button className="bg-[#1a1a1a] px-4 py-1 rounded-md cursor-pointer">Sign In</button>
          <button className="bg-blue-600 px-4 py-1 rounded-md cursor-pointer">Get Started</button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-2xl"
          >
            {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown content */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm text-white px-4">
          {/* {navLinks.map((link) => (
            <div key={link} className="border-b border-gray-700 pb-2">
              {link}
            </div>
          ))} */}
          <div className="flex items-center gap-4 text-xl mt-2">
            {/* <FaDiscord />*/}
            <a href=" https://x.com/Thekeycypher" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <FaLinkedin /> 
            {/* <FaRedditAlien /> */}
          </div>
          <button className="w-full bg-[#1a1a1a] py-2 rounded-md mt-4">Sign In</button>
          <button className="w-full bg-blue-600 py-2 rounded-md cursor-pointer">Get Started</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
