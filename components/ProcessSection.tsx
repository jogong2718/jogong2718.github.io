export default function ProcessSection() {
	const experiences = [
		{
			company: "Aview International (Techstars ’23)",
			role: "Full‑stack Software Engineering Intern",
			period: "April 2025 - August 2025",
			location: "Toronto, ON",
			description:
				"Video localization platform driving billions of views and multimillion dollar revenue. One of three engineers delivering dashboard features, social bots, and expanded TTS support.",
			achievements: [
				"One of three engineers delivering dashboard features that improved client workflow speed by 20%, social media bots, and expanded TTS support.",
				"Maintained an Express-powered NestJS backend with REST, GraphQL and WebSocket support; delivered features that attracted 50+ new clients serving 200M+ new subscribers across platforms.",
				"Built a Next.js admin dashboard integrated with NestJS/WebSocket APIs to manage Twitter and Reddit bots, automating text/video responses — engagement ↑3.2× and moderation time ↓80%.",
				"Architected and trained a multilingual TTS model (30+ languages) that outperformed ElevenLabs’ multilingual baseline in zero-shot audio quality and achieved +64% higher user preference in evaluations.",
				"Designed a Gemini-based translation pipeline on AWS Lambda + S3, reducing translation costs by ~70%."
			],
			link: "https://www.aviewint.com/",
		},
		{
			company: "Gluroo Imaginations Inc.",
			role: "Software Engineer Intern (Full-time / Part-time)",
			period: "September 2024 - April 2025",
			location: "Los Altos Hills, CA",
			description:
				"Collaborated with 20+ engineers to simplify diabetes management under ex-Google Sr. Directors and Meta VPs; contributed full‑stack apps and ML pipelines.",
			achievements: [
				"Designed and developed a React Native app to visualize real‑time glucose and health metrics across Web, iOS, and Android; integrated REST APIs and caching to improve data latency by ~45%.",
				"Developed novel causal interrupted time-series models (quasi‑experiment style) to forecast blood glucose trends; improved time‑in‑range for 150,000+ users by ~60%.",
				"Designed a robust sktime training pipeline for a diabetes foundation model, improving mealtime blood glucose prediction accuracy by ~25%; integrated probabilistic time‑series methods (ClaSP segmentation, KNN, HMM variants) and ensured reliability via unit tests."
			],
			link: "https://gluroo.com/",
		},
		{
			company: "University of Waterloo CSC",
			role: "Lead Software Engineer",
			period: "September 2024 - December 2024",
			location: "Waterloo, ON",
			description:
				"Student-led computer science community developing platforms for university students.",
			achievements: [
				"Won UW CSC Best Project 2024 (Top 0.2%) with a commenting and rating platform.",
				"Built a platform supporting 5,000+ concurrent monthly users.",
				"Developed a custom Deep Q-Network RL model for personalized recommendations using TensorFlow.js."
			],
			link: "#",
		},
	]

	const education = {
		institution: "University of Waterloo",
		degree: "Bachelor of Computer Science",
		graduationYear: "2028",
		gpa: "3.90 / 4.00",
		location: "Waterloo, ON",
		description: (
			<span>
				Director of{" "}
				<a
					href="https://wat.ai"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400 decoration-white/40 hover:decoration-white"
				>
					WAT.ai
				</a>{" "}
				— led workshops, projects, and hackathons for 1,500+ organization members.
			</span>
		),
		coursework: [
			"Data Structures and Algorithms",
			"Machine Learning and AI",
			"Software Engineering",
			"Database Systems",
			"Computer Networks"
		],
		link: "https://uwaterloo.ca/",
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
