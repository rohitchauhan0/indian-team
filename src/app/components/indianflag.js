"use client";
import React from "react";

const IndianFlag = () => {
  return (
    <svg width="820px" height="800px">
      {/* Use a standard <image> tag inside the SVG */}
      <image href="/indian-flag.jpg" height="430" width="820" preserveAspectRatio="none" id="lk" />
      
      {/* Wave Effect */}
      <path
        id="p1"
        d="M -400 0 L -400 20 Q -300 0 -200 20 Q -100  40  0  20 
           Q  100   0 200 20 Q  300 40 400 20 Q  500  0 600 20 
           Q  700 40 800 20 L  800 0 Z
           M -400 440 L -400 420 Q -300 400 -200 420 Q -100  440  0  420 
           Q  100  400 200 420 Q  300 440 400 420 Q  500 400 600 420 
           Q  700 440 800 420 L  800 440 Z"
        stroke="blue"
        fill="black"
        strokeWidth="0"
        transform="translate(0)"
      />
      
      {/* Animations */}
      <animateTransform
        href="#p1"
        attributeName="transform"
        type="translate"
        from="0"
        to="400"
        dur="2s"
        repeatCount="indefinite"
      />
      <animateTransform
        href="#p2"
        attributeName="transform"
        type="translate"
        from="0,0"
        to="0,400"
        dur="2s"
        repeatCount="indefinite"
      />
    </svg>
  );
};

export default IndianFlag;
