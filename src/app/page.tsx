"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const TypedText = ({ strings }: { strings: string[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {strings.map((text, index) => (
        <motion.span
          key={index}
          className="inline-block px-2 py-1 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold shadow-lg"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: index * 0.1,
          }}
        >
          {text}
        </motion.span>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="fixed inset-0 w-full h-full object-cover z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Ultra.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black bg-opacity-50 p-4 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-sm w-full h-full overflow-auto flex flex-col justify-center items-center fixed inset-0"
      >
        <motion.h1
          className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-2 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.8,
          }}
        >
          <span className="inline-block font-black text-shadow-glow transform hover:scale-110 hover:rotate-1 transition-all duration-300 ease-in-out">
            <span className="text-blue-400">Welcome</span>{" "}
            <span className="text-purple-500">to</span>{" "}
            <span className="text-pink-500">My</span>{" "}
            <span className="text-yellow-400">Portofolio</span>
          </span>
        </motion.h1>
        <motion.div
          className="text-2xl mb-8 text-blue-100 font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I'm a{" "}
          <TypedText
            strings={["Student at Purwadhika", "Web Development", "North Sumatera"]}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/about"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full inline-block"
              >
                Explore My Work
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-4 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <FaEnvelope size={32} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

