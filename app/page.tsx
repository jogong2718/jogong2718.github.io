import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeuralBackground from "@/components/neural-background";

export default function Home() {
  // Sample of top projects from projects page
  const featuredProjects = [
    {
      id: "united-mobility",
      title: "United Mobility & Healthcare",
      description:
        "United Healthcare monitors patients' vitals in real time to predict health risks. United Mobility (Winner $2500) creates a decentralized scooter-sharing network.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI", "Healthcare"],
    },
    {
      id: "soccer-metrics",
      title: "SoccerMetrics - Won GeeseHacks",
      description:
        "Platform providing biomechanical insights by analyzing 3D pose and tracking ball movement using MediaPipe's GHUM 3D model.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Computer Vision", "Sports Analytics"],
    },
    {
      id: "hybrid-model",
      title: "Hybrid Classification Segmentation Model",
      description:
        "A model for simultaneous image classification and segmentation with SOTA metrics, winning $11,500 in scholarships.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI Research", "Medical Imaging"],
    },
  ];

  // Updated with the new blog posts
  const featuredPosts = [
    {
      id: "thoughts-pt-1",
      title: "Thoughts (Pt 1)",
      date: "December 30, 2024",
      excerpt:
        "At the time of writing this blog I have three stuffies beside me on my desk. Winter break is almost ending!!!",
      category: "Personal",
    },
    {
      id: "university-life-y1-t1",
      title: "University Life (Y1 T1)",
      date: "December 30, 2024",
      excerpt:
        "First term at uwaterloo in a nutshell. Banger food there actually. Got addicted to bs 😓.",
      category: "University",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <NeuralBackground />
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-palette-blue via-palette-lightBlue to-palette-blueGray bg-clip-text text-transparent pb-2">
              Jonathan Gong
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Computer Science student at the University of Waterloo with a
              passion for AI, and building intelligent applications.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/experience">My Experience</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link
              href="https://github.com/jogong2718"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jonathan-gong-005491263/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:jonathangong2005@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-shadow duration-300 ease-in-out"
              >
                <div className="mb-4 text-sm font-medium text-palette-lightBlue">
                  {project.tags[0]}
                </div>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <Link
                  href={`/projects#${project.id}`}
                  className="inline-flex items-center text-sm font-medium text-foreground"
                >
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">
            Latest Articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-shadow duration-300 ease-in-out"
              >
                <div className="mb-2 text-sm text-muted-foreground">
                  {post.date}
                </div>
                <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-medium text-foreground"
                >
                  Read more <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
