export default function ProcessSection() {
  const experiences = [
    {
      company: "Aview International (Techstars ’23)",
      role: "Full‑stack Software Engineering Intern",
      period: "April 2025 - August 2025",
      location: "Toronto, ON",
      description:
        "Video-localization platform with billions of views and multimillion-dollar revenue. One of three engineers building dashboards, social bots, and multilingual TTS.",
      achievements: [
        "Built dashboards, social bots, and TTS features — improved client workflow speed ~20%.",
        "Maintained Express/NestJS backend (REST, GraphQL, WebSocket); onboarded 50+ clients reaching 200M+ subscribers.",
        "Trained a 30+ language TTS beating ElevenLabs baseline (+64% preference) and implemented a Gemini→Lambda+S3 translation pipeline (−~70% cost).",
      ],
      link: "https://www.aviewint.com/",
    },
    {
      company: "Gluroo Imaginations Inc.",
      role: "Software Engineer Intern (Full-time / Part-time)",
      period: "September 2024 - April 2025",
      location: "Los Altos Hills, CA",
      description:
        "Worked on diabetes-management products with 20+ engineers; built full‑stack apps and ML pipelines for real‑time glucose insights.",
      achievements: [
        "Built a React Native app for Web/iOS/Android; REST + caching reduced data latency ~45%.",
        "Developed causal interrupted time-series models to forecast glucose, improving time‑in‑range for 150k+ users by ~60%.",
        "Implemented sktime training pipeline and probabilistic time‑series methods (ClaSP, KNN, HMM) with unit tests for reliability.",
      ],
      link: "https://gluroo.com/",
    },
    {
      company: "University of Waterloo CSC",
      role: "Lead Software Engineer",
      period: "September 2024 - December 2024",
      location: "Waterloo, ON",
      description:
        "Led a student CS community that built platforms used by thousands of students.",
      achievements: [
        "Won UW CSC Best Project 2024 (Top 0.2%) for a commenting and rating platform.",
        "Built and scaled the platform to 5,000+ monthly concurrent users.",
        "Created a Deep Q‑Network recommendation model in TensorFlow.js for personalized recommendations.",
      ],
      link: "https://csclub.uwaterloo.ca/",
    },
  ];

  const education = {
    institution: "University of Waterloo",
    degree: "Bachelor of Computer Science",
    graduationYear: "2024 - 2028",
    gpa: "3.90 / 4.00",
    location: "Waterloo, ON",
    description: (
      <span>
        Director of{" "}
        <a
          href="https://watai.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 decoration-white/40 hover:decoration-white"
        >
          WAT.ai
        </a>{" "}
        — led workshops, projects, and hackathons for 1,500+ organization
        members.
      </span>
    ),
    coursework: [
      "Data Structures and Algorithms",
      "Machine Learning and AI",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
    ],
    link: "https://uwaterloo.ca/",
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-normal text-center mb-16">
          Experience
        </h2>
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
                      <span className="text-white/40 flex-shrink-0 leading-relaxed">
                        •
                      </span>
                      <span className="text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <h3 className="text-4xl md:text-6xl font-normal text-center mb-16">
            Education
          </h3>
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
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
                  {education.graduationYear}
                </span>
                <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
                  GPA: {education.gpa}
                </span>
              </div>
            </div>

            <p className="text-white/70 mb-4 leading-relaxed">
              {education.description}
            </p>

            <div className="mb-3">
              <h5 className="text-sm font-medium text-white/80 mb-2">
                Relevant Coursework:
              </h5>
              <ul className="space-y-2">
                {education.coursework.map((course, i) => (
                  <li key={i} className="flex gap-3 text-white/60">
                    <span className="text-white/40 flex-shrink-0 leading-relaxed">
                      •
                    </span>
                    <span className="text-sm leading-relaxed">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
