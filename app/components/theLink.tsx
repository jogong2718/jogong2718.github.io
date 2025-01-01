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
            <div className="absolute transition-all duration-500 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              className={
                "sm:w-60 h-20 sm:h-24 rounded-xl text-3xl sm:text-4xl px-6 py-3 relative inline-flex items-center justify-center font-bold text-white transition-all duration-1000 ease-in-out bg-gray-900 font-pj focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-gray-900"
              }
            >
              Go to Blog
            </button>
          </div>
        </Link>
      ) : link === 2 ? (
        <Link href="/projects">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-500 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              className={
                "sm:w-80 h-20 sm:h-24 rounded-xl text-3xl sm:text-4xl px-6 py-3 relative inline-flex items-center justify-center font-bold text-white transition-all duration-1000 ease-in-out bg-gray-900 font-pj focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-gray-900"
              }
            >
              Go to Projects
            </button>
          </div>
        </Link>
      ) : link === 3 ? (
        <Link href="/Jonathan_Resume-6.pdf">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-500 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              className={
                "sm:w-80 h-20 sm:h-24 rounded-xl text-3xl sm:text-4xl px-6 py-3 relative inline-flex items-center justify-center font-bold text-white transition-all duration-1000 ease-in-out bg-gray-900 font-pj focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-gray-900"
              }
            >
              Go to Resume
            </button>
          </div>
        </Link>
      ) : null}
    </div>
  );
};
export default theLink;
