"use client";

import React from "react";

interface TooltipArrowProps {
  visible: boolean;
}

export default function TooltipArrow({ visible }: TooltipArrowProps) {
  if (!visible) return null;

  return (
    <div className="absolute top-full left-4 mt-0 flex flex-col items-start gap-1 pointer-events-none z-30">
      {/* Longer SVG curve stretched further up and down; nudged up to point at title */}
      <svg
        width="28"
        height="50"
        viewBox="0 0 24 50"
        className="text-white/100"
        style={{ marginLeft: "21px", transform: "translateY(-12px)" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 52C12 52 2 42 2 28C2 16 12 10 12 0"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      {/* Slanted handwritten text */}
      <div
        className="text-s text-white whitespace-nowrap inline-block"
        style={{
          transform: "rotate(-10deg) translateX(16px)",
          transformOrigin: "left top",
          fontFamily: "'Caveat'",
        }}
      >
        Tap or hover over title to expand <br />
        Click on image to visit project
      </div>
    </div>
  );
}
