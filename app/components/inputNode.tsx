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
        {/* Gradient Background with blur */}
        <div
          className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:-inset-1"
          style={{
            filter: "blur(12px)",
            transform: "translateZ(0)" /* Force GPU acceleration */,
            backfaceVisibility: "hidden",
            willChange: "filter, opacity, inset" /* Optimize for animation */,
          }}
        ></div>

        {/* Button */}
        <button
          type="button"
          className={`relative z-10 transition-all duration-500 ease-in-out
        ${
          isClicked
            ? "sm:w-full h-24 sm:h-28 rounded-xl text-5xl sm:text-6xl "
            : "sm:w-full h-24 sm:h-28 rounded-xl text-4xl sm:text-5xl "
        }
        px-6 py-3 
        inline-flex items-center justify-center font-bold text-white bg-gray-900 rounded-xl
      `}
          onClick={onClick}
          disabled={isClicked}
        >
          {!isClicked ? (
            "Welcome"
          ) : (
            <div className="mt-1 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold">Jonathan Gong</h1>
              {/* <p className="text-sm sm:text-base font-medium mt-2">
                Hello! I&apos;m <strong>Jonathan Gong</strong>, a Computer
                Science student at the University of Waterloo with a passion for
                software development and AI. I&apos;ve contributed to innovative
                projects in healthcare technology and web application
                development. As a published AI researcher and award-winning
                developer, I thrive on transforming complex challenges into
                creative solutions. Whether I&apos;m designing ML models or
                building user-friendly and industry-grade applications, I&apos;m
                committed to continuous learning and making a positive impact
                through technology.
              </p> */}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default InputNode;
