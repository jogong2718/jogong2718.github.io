import React from "react";

interface Props {
  forWho: string;
  title: string;
  summary: React.ReactElement;
  link1?: string;
  link2?: string;
  link3?: string;
  name1?: string;
  name2?: string;
  name3?: string;
}

const ExperienceCard = ({
  forWho,
  title,
  summary,
  link1,
  link2,
  link3,
  name1,
  name2,
  name3,
}: Props) => {
  return (
    <div className="space-y-4 bg-black rounded-xl p-6">
      <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-gray-700 text-gray-100">
        {forWho}
      </span>
      <h3 className="text-2xl font-bold leading-tight text-white">{title}</h3>
      <div className="text-lg font-normal text-gray-200">{summary}</div>
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <a
          href={link1}
          title=""
          className="text-white justify-center inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name1}
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        {link2 && (
          <a
            href={link2}
            title=""
            className="text-white justify-center inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name2}
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
        {link3 && (
          <a
            href={link3}
            title=""
            className="text-white justify-center inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name3}
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
