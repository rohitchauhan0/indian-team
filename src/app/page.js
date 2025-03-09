"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import gsap from "gsap";
import IndianFlag from "./components/indianflag";
import IndianPlayer from "./components/players";
import { ScrollTrigger, MotionPathPlugin, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

const years = ["2002", "2013", "2025"]; // List of years

const ExplodingText = ({ text, onAnimationEnd }) => {
  const textRef = useRef();
  const particlesRef = useRef([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    createParticles();
    gsap.to(textRef.current.material, { opacity: 1, duration: 0.5 });
    setTimeout(explodeParticles, 1000);
  }, [text]);

  const createParticles = () => {
    const particleArray = [];
    for (let i = 0; i < 100; i++) {
      particleArray.push({
        position: [
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
        ],
        velocity: [
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2,
        ],
      });
    }
    setParticles(particleArray);
  };

  const explodeParticles = () => {
    gsap.to(textRef.current.material, {
      opacity: 0,
      duration: 0.5,
    });

    gsap.to(particlesRef.current, {
      duration: 1,
      x: () => Math.random() * 4 - 2,
      y: () => Math.random() * 4 - 2,
      z: () => Math.random() * 4 - 2,
      opacity: 0,
      ease: "power3.out",
      onComplete: onAnimationEnd,
    });
  };

  useFrame(() => {
    particlesRef.current.forEach((p, index) => {
      if (p && particles[index]) {
        p.position.x += particles[index].velocity[0];
        p.position.y += particles[index].velocity[1];
        p.position.z += particles[index].velocity[2];
      }
    });
  });

  return (
    <>
      <Text ref={textRef} fontSize={1.5} position={[0, 0, 0]} color="white">
        {text}
      </Text>
      {particles.map((p, index) => (
        <mesh key={index} position={p.position} ref={(el) => (particlesRef.current[index] = el)}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="white" transparent opacity={1} />
        </mesh>
      ))}
    </>
  );
};

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFlag, setShowFlag] = useState(false);

  const handleAnimationEnd = () => {
    if (years[currentIndex] === "2025") {
      setShowFlag(true); // Show the flag when reaching "2025"
      return;
    }
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % years.length);
    }, 500); // Wait before showing next number
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      {!showFlag ? (
        <Canvas>
          <ambientLight intensity={1} />
          <ExplodingText text={years[currentIndex]} onAnimationEnd={handleAnimationEnd} />
        </Canvas>
      ) : (
       <>
        <div className=" flex flex-col -space-y-[900px] w-full items-center relative">
          <IndianFlag />
          <IndianPlayer />
         
        </div>
        <p className="absolute bottom-10 left-1/2 -translate-x-1/2  text-[150px] font-extrabold bg-gradient-to-r from-orange-400 via-white to-green-500 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
  Winner
</p>

       </>
      )}
    </div>
  );
};

export default Page;
