"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
  "/cricketers/player1.png", "/cricketers/player2.png", "/cricketers/player3.png", "/cricketers/player4.png", "/cricketers/player5.png", "/cricketers/player6.png", 
  "/cricketers/player7.png", "/cricketers/player8.png", "/cricketers/player9.png", "/cricketers/player10.png", "/cricketers/player11.png", 
];

const positions = [
  { top: "-10%", left: "35%" }, // Captain at the top center
  { top: "20%", left: "20%" }, { top: "10%", left: "45%" },
  { top: "35%", left: "15%" }, { top: "35%", left: "45%" }, 
  { top: "15%", left: "60%" },
  { top: "50%", left: "7%" },
   { top: "40%", left: "35%" }, 
   { top: "50%", left: "53%" }, {
     top: "40%", left: "70%" },
  { top: "55%", left: "30%" } // Bottom row alignment
];

const IndianTeamPoster = () => {
  return (

     <div className="relative w-full h-[700px] flex items-center justify-center bg-gradient-to-b"> 
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Player ${index + 1}`}
          className="absolute w-96 h-auto "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          style={positions[index]}
        />
      ))}
    </div>
  );
};

export default IndianTeamPoster;