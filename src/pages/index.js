import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';  // Instagram icon from react-icons

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Freelancer to Agency Guide
      </motion.h1>

      <motion.div
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59,130,246,0.5)' }}
      >
        <p className="text-lg mb-4 text-center text-black">
          Download the full PDF guide to help you go from freelancing to launching your own agency.
        </p>
        <div className="flex flex-col items-center">
          <a
            href="/Fiverr Guide Freelancers Agencies.pdf"
            download
            className="inline-block px-6 py-3 mb-4 text-black bg-blue-300 rounded-lg hover:bg-blue-400 transition-colors duration-300 font-semibold"
          >
            FIVERR_Guide_FREELANCER_AGENCY PDF
          </a>
          <a
            href="/Product_Monetization_Guide.pdf"
            download
            className="inline-block px-6 py-3 mb-4 text-black bg-blue-300 rounded-lg hover:bg-blue-400 transition-colors duration-300 font-semibold"
          >
            Product_Monetization_Guide PDF
          </a>
          <a
            href="/Freelancer_to_Agency_Guide.pdf"
            download
            className="inline-block px-6 py-3 mb-4 text-black bg-blue-300 rounded-lg hover:bg-blue-400 transition-colors duration-300 font-semibold"
          >
            Download Freelancer_to_Agency PDF
          </a>
          <a
            href="/Web_App_Development_Process.pdf"
            download
            className="inline-block px-6 py-3 mb-4 text-black bg-blue-300 rounded-lg hover:bg-blue-400 transition-colors duration-300 font-semibold"
          >
            Download Web_App_Development_Process PDF
          </a>
          <div className="flex items-center space-x-2 text-black cursor-pointer">
            <span>Follow my Instagram for more content and your growth</span>
            <a
              href="https://www.instagram.com/amit_makwana.04/"  // <-- Replace with your link
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
