"use client";
import React from "react";

interface Props {
  onClick: () => void;
  isClicked: boolean;
}

const InputNode = ({ onClick, isClicked }: Props) => {
  return (
    <div className="flex justify-center items-start pt-12">
      <div className="relative inline-flex group">
        {/* Gradient Background */}
        <div className="absolute transition-all duration-500 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

        {/* Button */}
        <button
          type="button"
          className={`
        ${
          isClicked
            ? "sm:w-220 h-36 sm:h-30 rounded-xl text-5xl sm:text-6xl "
            : "sm:w-80 h-24 sm:h-28 rounded-xl text-4xl sm:text-5xl "
        }
        px-6 py-3 
        relative inline-flex items-center justify-center font-bold text-white transition-all duration-1000 ease-in-out bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-gray-900
      `}
          onClick={onClick}
          disabled={isClicked}
        >
          {!isClicked ? "Welcome" : "Jonathan Gong"}
        </button>
      </div>
    </div>
  );
};

export default InputNode;
