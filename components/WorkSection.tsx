"use client"

import WorkCard from "./WorkCard"

const workItems = [
	{
		title: "United Mobility & Healthcare",
		year: "2025",
		image: "/Gawr-Gura-PNG-Isolated-Image.png",
		link: "https://deliriumcontrol.vercel.app",
		size: "large",
		description: (
			<span>
				United Healthcare (Finalist Top 8) is a hospital monitoring system that
				analyzes patient vitals, environment, and behavior in real time to
				predict health risks and support proactive care. United Mobility (Winner
				$2500) is a decentralized scooter-sharing network that transforms idle,
				privately-owned micromobility vehicles into a community-powered
				transportation system by partnering with local businesses
			</span>
		),
	},
	{
		title: "SoccerMetrics",
		year: "2025",
		image: "/Gawr-Gura-PNG-Isolated-Image.png",
		link: "https://github.com/jogong2718/SoccerMetrics",
		size: "medium",
		description: (
			<span>
				The platform provides actionable biomechanical insights by analyzing 3D
				pose and tracking ball movement. Using MediaPipe's GHUM 3D model and
				Ultralytics YOLOv8, it calculates joint angles and other metrics,
				enabling comparisons to optimal standards.
			</span>
		),
	},
	{
		title: "Pianofi",
		year: "2025",
		image: "/Gawr-Gura-PNG-Isolated-Image.png",
		link: "https://pianofi.ca",
		size: "large",
		description: (
			<span>
				PianoFi is an advanced AI-powered music transcription service that turns any audio file into professional piano sheet music. Simply upload your audio, and our cutting-edge AI models will generate accurate piano transcriptions in multiple formats.
			</span>
		),
	},
	{
		title: "WatClub",
		year: "2024",
		image: "/Gawr-Gura-PNG-Isolated-Image.png",
		link: "https://github.com/Brucewang15/WatClub",
		size: "small",
		description: (
			<span>
				WebApp for connecting students to clubs and organization in the
				University of Waterloo, winning the best project award among 300+
				participants.
			</span>
		),
	},
	{
		title: "Skin Lesion Diagnostic Web Application",
		year: "2024",
		image: "/Gawr-Gura-PNG-Isolated-Image.png",
		link: "https://monkeypox-h0h3a7dqcreaerd4.canadacentral-01.azurewebsites.net/",
		size: "medium",
		description: (
			<span>
				A web application that can diagnose skin lesions with SOTA metrics. A
				paper was written for the model explaining the architecture and the
				results.
			</span>
		),
	},
	{
		title: "Multi-output Network for Medical Imaging",
		year: "2024",
		image: "/Gawr-Gura-PNG-Isolated-Image.png",
		link: "https://doi.org/10.1007/s44163-022-00045-1",
		size: "small",
		description: (
			<p>
				Inspired by my Hybrid Classification Segmentation Image model, this
				model was further developed and published as a paper in Discover
				Artificial Intelligence. Received media coverage:{" "}
				<a
					className="underline text-blue-400"
					href="https://doi.org/10.33548/SCIENTIA849"
				>
					Link
				</a>
			</p>
		),
	},
	{
		title: "Hybrid Classification Segmentation Model",
		year: "2023",
		image: "/Gawr-Gura-PNG-Isolated-Image.png",
		link: "https://github.com/jogong2718/COVID-19-Radiography-Models",
		size: "large",
		description: (
			<span>
				A model that can classify and segment images at the same time with SOTA
				metrics. A paper was written helping me win a competition, ranking in
				the top 0.5% of participants, along with $11,500 in scholarships and
				the $1,000 cash prize.
			</span>
		),
	},
]

export default function WorkSection() {
	const left = workItems.filter((_, i) => i % 2 === 0)
	const right = workItems.filter((_, i) => i % 2 === 1)

	// horizontal offsets to vary axes
	const leftOffsets = ["-translate-x-8", "-translate-x-4", "-translate-x-10"]
	const rightOffsets = ["translate-x-8", "translate-x-4", "translate-x-10"]

	return (
		<section className="relative">
			{/* Sticky centered heading */}
			<div className="pointer-events-none sticky top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
				<h2 className="text-6xl md:text-8xl font-normal tracking-tight">
					Projects
				</h2>
			</div>

			<div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3">
				{/* Left column with very large vertical gaps */}
				<div className="flex flex-col items-end gap-[120vh] md:gap-[150vh] mt-[18vh] md:mt-[24vh]">
					{left.map((p, i) => (
						<div
							key={p.title}
							className={[
								getCardSize(p.size),
								leftOffsets[i % leftOffsets.length],
								// Select a few cards to rise over the centered text
								isOverTextLeft(i) ? "relative z-20" : "relative z-0",
							].join(" ")}
						>
							<WorkCard
								title={p.title}
								year={p.year}
								image={p.image}
								index={i}
								link={p.link}
								description={p.description}
							/>
						</div>
					))}
				</div>

				{/* Spacer column to keep heading center space */}
				<div className="hidden md:block" />

				{/* Right column with heavy vertical offset so cards alternate one-by-one */}
				<div className="flex flex-col items-start gap-[120vh] md:gap-[150vh] pt-[90vh] md:pt-[130vh]">
					{right.map((p, i) => (
						<div
							key={p.title}
							className={[
								getCardSize(p.size),
								rightOffsets[i % rightOffsets.length],
								isOverTextRight(i) ? "relative z-20" : "relative z-0",
							].join(" ")}
						>
							<WorkCard
								title={p.title}
								year={p.year}
								image={p.image}
								index={i}
								link={p.link}
								description={p.description}
							/>
						</div>
					))}
				</div>
			</div>

			{/* Extra bottom space so the last card exits cleanly */}
			<div className="h-[60vh]" />
		</section>
	)
}

function isOverTextLeft(index: number) {
	// Choose some left-column cards to pass above the heading
	return index === 0 || index === 2
}
function isOverTextRight(index: number) {
	// Choose one right-column card to pass above the heading
	return index === 0
}

function getCardSize(size: string) {
	// Slightly larger general sizes
	switch (size) {
		case "large":
			return "w-72 md:w-80"
		case "medium":
			return "w-56 md:w-64"
		case "small":
			return "w-48 md:w-56"
		default:
			return "w-56 md:w-64"
	}
}
