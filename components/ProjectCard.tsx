import React from 'react';

interface ProjectCardProps {
  forWho: string;
  title: string;
  summary: React.ReactNode;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ forWho, title, summary, link }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20"
      onClick={handleClick}
    >
      <div className="text-sm text-gray-400 mb-2">{forWho}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <div className="text-gray-300 text-sm leading-relaxed">{summary}</div>
    </div>
  );
};

export default ProjectCard;