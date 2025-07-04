import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export default function HomePage() {
  const pdfs = [
    { href: "/Client_Handling_Quick_Responses.pdf", label: "Client Handling Quick Responses" },
    { href: "/Website_Technology_Hosting_Guide.pdf", label: "Website Technology Hosting Guide" },
    { href: "/Fiverr Guide Freelancers Agencies.pdf", label: "Fiverr Guide for Freelancers & Agencies" },
    { href: "/Product_Monetization_Guide.pdf", label: "Product Monetization Guide" },
    { href: "/Freelancer_to_Agency_Guide.pdf", label: "Freelancer to Agency Guide" },
    { href: "/Web_App_Development_Process.pdf", label: "Web App Development Process" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-10 text-center text-gray-800"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Freelancer to Agency Guide
      </motion.h1>

      {/* Card Container */}
      <motion.div
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Description */}
        <p className="text-lg mb-6 text-center text-gray-700">
          Download guides to streamline your freelance-to-agency journey with the right tech, handling strategies, and monetization tools.
        </p>

        {/* PDF Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {pdfs.map((pdf, index) => (
            <a
              key={index}
              href={pdf.href}
              download
              className="w-full px-4 py-3 bg-blue-200 text-gray-800 font-semibold rounded-lg shadow hover:bg-blue-300 transition duration-300 text-center truncate"
              title={pdf.label}
            >
              {pdf.label}
            </a>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="flex justify-center items-center space-x-3 mt-6 text-gray-700">
          <span className="text-sm">Follow me on Instagram for more content</span>
          <a
            href="https://www.instagram.com/amit_makwana.04/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
