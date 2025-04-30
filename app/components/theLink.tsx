import React from "react";
import Link from "next/link";
interface Props {
  link: 0 | 1 | 2 | 3;
}

const theLink = ({ link }: Props) => {
  return link === 0 ? null : (
    <div>
      {link === 1 ? (
        <Link href="/blog">
          <div className="relative inline-flex group">
            <div
              className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:-inset-1"
              style={{
                filter: "blur(12px)",
                transform: "translateZ(0)" /* Force GPU acceleration */,
                backfaceVisibility: "hidden",
                willChange:
                  "filter, opacity, inset" /* Optimize for animation */,
              }}
            ></div>
            <button className="relative z-10 w-full sm:w-60 md:w-72 lg:w-80 h-20 sm:h-24 md:h-28 lg:h-32 rounded-xl text-3xl sm:text-4xl md:text-5xl lg:text-5xl px-6 py-3 inline-flex items-center justify-center font-bold text-white transition-all duration-1000 ease-in-out bg-gray-900 font-pj">
              Go to Blog
            </button>
          </div>
        </Link>
      ) : link === 2 ? (
        <Link href="/projects">
          <div className="relative inline-flex group">
            <div
              className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:-inset-1"
              style={{
                filter: "blur(12px)",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                willChange: "filter, opacity, inset",
              }}
            ></div>
            <button className="relative z-10 w-full sm:w-80 md:w-96 lg:w-[28rem] h-20 sm:h-24 md:h-28 lg:h-32 rounded-xl text-3xl sm:text-4xl md:text-5xl lg:text-5xl px-6 py-3 inline-flex items-center justify-center font-bold text-white transition-all duration-1000 ease-in-out bg-gray-900 font-pj">
              Go to Projects
            </button>
          </div>
        </Link>
      ) : link === 3 ? (
        <Link href="/experience">
          <div className="relative inline-flex group">
            <div
              className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:-inset-1"
              style={{
                filter: "blur(12px)",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                willChange: "filter, opacity, inset",
              }}
            ></div>
            <button className="relative z-10 w-full sm:w-90 md:w-[26rem] lg:w-[30rem] h-20 sm:h-24 md:h-28 lg:h-32 rounded-xl text-3xl sm:text-4xl md:text-5xl lg:text-5xl px-6 py-3 inline-flex items-center justify-center font-bold text-white transition-all duration-1000 ease-in-out bg-gray-900 font-pj">
              Go to Experience
            </button>
          </div>
        </Link>
      ) : null}
    </div>
  );
};
export default theLink;
