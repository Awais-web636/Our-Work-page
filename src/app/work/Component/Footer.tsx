import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-gray-600 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:opacity-75">
            <FaTwitter className="w-5 h-5 text-[#1C86C6]" />
          </a>
          <a href="#" className="hover:opacity-75">
            <FaFacebookF className="w-5 h-5 text-[#557DBC]" />
          </a>
          <a href="#" className="hover:opacity-75">
            <FaInstagram className="w-5 h-5 text-[#8A3AB9]" />
          </a>
          <a href="#" className="hover:opacity-75">
            <FaLinkedinIn className="w-5 h-5 text-[#1C86C6]" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2 text-center">
          <a href="#" className="text-[#5E17EB] hover:text-red-400">Our Policy</a>
          <a href="#" className="text-[#5E17EB] hover:text-red-400">Contact</a>
          <a href="#" className="text-[#5E17EB] hover:text-red-400">Sitemap</a>
          <a href="#" className="text-[#5E17EB] hover:text-red-400">Privacy Policy</a>
          <a href="#" className="text-[#5E17EB] hover:text-red-400">Terms of Use</a>
          <a href="#" className="text-[#5E17EB] hover:text-red-400">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
