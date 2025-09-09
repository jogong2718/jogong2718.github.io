export default function ProcessSection() {
  const experiences = [
    {
      company: "Aview International",
      role: "Software Engineer",
      period: "April 2025 - August 2025",
      location: "Toronto, ON",
      description: "Techstars '23 backed startup transforming content creation with AI-powered localization and distribution.",
      achievements: [
        "Architected Express powered NestJS backend with REST, GraphQL, and WebSocket support",
        "Built multilingual TTS model for voice generation & cloning surpassing ElevenLabs",
        "Designed LLM-based translation pipeline on AWS Lambda and S3, raising efficiency by 70%"
      ],
      link: "https://www.aviewint.com/"
    },
    {
      company: "WAT.ai / Gluroo Imaginations Inc.",
      role: "AI Director, ML Engineer",
      period: "September 2024 - April 2025",
      location: "Waterloo, ON / Los Altos Hills, CA",
      description: "Led AI research at University of Waterloo while developing healthcare AI solutions for diabetes management at Gluroo.",
      achievements: [
        "Developed novel causal ITS time-series models improving time in range for 100,000+ people with diabetes by 60%",
        "Designed robust sktime training pipeline for prandial and postprandial blood glucose prediction", 
        "Led 700+ member AI organization directing workshops, project showcases, and hackathons",
        "Integrated probabilistic time-series models (ClaSPSegmentation, KNN, HMM) with unittest framework",
        "Created educational videos on AI models using Manim Engine"
      ],
      link: "https://gluroo.com/"
    },
    {
      company: "University of Waterloo CSC",
      role: "Lead Software Engineer", 
      period: "September 2024 - December 2024",
      location: "Waterloo, ON",
      description: "Student-led computer science community developing innovative platforms for university students.",
      achievements: [
        "Won UW CSC Best Project 2024 (Top 0.2%) with commenting and rating platform",
        "Built platform supporting 5000+ concurrent monthly users",
        "Developed custom Deep Q-Network RL model for personalized recommendations using TensorFlow.js"
      ],
      link: "#"
    }
  ]

  const education = {
    institution: "University of Waterloo",
    degree: "Bachelor of Computer Science",
    location: "Waterloo, ON",
    description: "Comprehensive computer science program focusing on software engineering, algorithms, and artificial intelligence.",
    coursework: [
      "Data Structures and Algorithms",
      "Machine Learning and AI",
      "Software Engineering",
      "Database Systems",
      "Computer Networks"
    ],
    link: "https://uwaterloo.ca/"
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-normal text-center mb-16">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="border-l-2 border-white/20 pl-8 pb-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-2"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-white/80 hover:text-white transition-colors underline decoration-white/40 hover:decoration-white"
                    >
                      {exp.company}
                    </a>
                  </div>
                  <p className="text-sm text-white/60">{exp.location}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <p className="text-white/70 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              {exp.achievements && (
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-white/60">
                      <span className="text-white/40 flex-shrink-0 leading-relaxed">•</span>
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <h3 className="text-4xl md:text-6xl font-normal text-center mb-16">Education</h3>
          <div className="border-l-2 border-white/20 pl-8 pb-8 relative">
            {/* Timeline dot */}
            <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-2"></div>
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h4 className="text-xl md:text-2xl font-medium text-white mb-1">
                  {education.degree}
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <a 
                    href={education.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg text-white/80 hover:text-white transition-colors underline decoration-white/40 hover:decoration-white"
                  >
                    {education.institution}
                  </a>
                </div>
                <p className="text-sm text-white/60">{education.location}</p>
              </div>
            </div>
            
            <p className="text-white/70 mb-4 leading-relaxed">
              {education.description}
            </p>
            
            <div className="mb-3">
              <h5 className="text-sm font-medium text-white/80 mb-2">Relevant Coursework:</h5>
              <ul className="space-y-2">
                {education.coursework.map((course, i) => (
                  <li key={i} className="flex gap-3 text-white/60">
                    <span className="text-white/40 flex-shrink-0 leading-relaxed">•</span>
                    <span className="text-sm leading-relaxed">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
