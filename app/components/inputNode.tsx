"use client";
import React from "react";

interface Props {
  onClick: () => void;
  isClicked: boolean;
}

const InputNode = ({ onClick, isClicked }: Props) => {
  return (
    <div className="flex justify-center items-start pt-8">
      <div className="relative inline-flex group">
        {/* Gradient Background */}
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

        {/* Button */}
        <button
          type="button"
          className={`transition-all duration-1000 ease-in-out
        ${
          isClicked
            ? "sm:w-full h-80 sm:h-52 rounded-xl text-5xl sm:text-6xl "
            : "sm:w-full h-24 sm:h-28 rounded-xl text-4xl sm:text-5xl "
        }
        px-6 py-3 
        relative inline-flex items-center justify-center font-bold text-white bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-gray-900
      `}
          onClick={onClick}
          disabled={isClicked}
        >
          {!isClicked ? "Welcome" : 
          <div className="mt-1 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Jonathan Gong</h1>
          <p className="text-sm sm:text-base font-medium mt-2">
            Hello! I&apos;m <strong>Jonathan Gong</strong>, a Computer Science student at
            the University of Waterloo with a passion for software development and
            AI. I&apos;ve contributed to innovative projects in healthcare
            technology and web application development. As a published AI researcher
            and award-winning developer, I thrive on transforming complex challenges
            into creative solutions. Whether I&apos;m designing ML models or
            building user-friendly and industry-grade applications, I&apos;m committed to continuous learning
            and making a positive impact through technology.
          </p>
        </div>}
        </button>
      </div>
    </div>
  );
};

export default InputNode;
