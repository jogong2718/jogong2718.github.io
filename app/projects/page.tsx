import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NeuralBackground from "@/components/neural-background";

export default function ProjectsPage() {
  const projects = [
    {
      id: "united-mobility",
      title: "United Mobility & Healthcare",
      description:
        "United Healthcare (Finalist Top 8) monitors patients' vitals, environment, and behavior in real time to predict health risks. United Mobility (Winner $2500) creates a decentralized scooter-sharing network partnering with local businesses.",
      image: "/Gawr-Gura-PNG-Isolated-Image.png",
      tags: ["AI", "Healthcare", "Mobility", "Velocity Incubator"],
      github: "https://github.com/Tony911029/delirium_control",
      demo: "https://deliriumcontrol.vercel.app",
    },
    {
      id: "soccer-metrics",
      title: "SoccerMetrics - Won GeeseHacks",
      description:
        "Platform providing biomechanical insights by analyzing 3D pose and tracking ball movement using MediaPipe's GHUM 3D model and Ultralytics YOLOv8 to calculate joint angles for optimization.",
      image: "/Gawr-Gura-PNG-Isolated-Image.png",
      tags: ["AI", "Computer Vision", "Sports Analytics", "MediaPipe"],
      github: "https://github.com/jogong2718/SoccerMetrics",
      demo: "https://github.com/jogong2718/SoccerMetrics",
    },
    {
      id: "watclub",
      title: "WatClub",
      description:
        "WebApp for connecting students to clubs and organizations at the University of Waterloo, winning the best project award among 300+ participants.",
      image: "/Gawr-Gura-PNG-Isolated-Image.png",
      tags: [
        "Web Development",
        "University of Waterloo",
        "Student Organizations",
      ],
      github: "https://github.com/Brucewang15/WatClub",
      demo: "https://github.com/Brucewang15/WatClub",
    },
    {
      id: "skin-lesion",
      title: "Skin Lesion Diagnostic Web Application",
      description:
        "A web application that can diagnose skin lesions with state-of-the-art metrics, accompanied by a research paper explaining the model architecture and results.",
      image: "/Gawr-Gura-PNG-Isolated-Image.png",
      tags: ["AI Research", "Medical Imaging", "Web Development"],
      demo: "https://monkeypox-h0h3a7dqcreaerd4.canadacentral-01.azurewebsites.net/",
    },
    {
      id: "multi-output-network",
      title: "Multi-output Network for Medical Imaging Analysis",
      description:
        "Published research in Discover Artificial Intelligence on a multi-output network for medical imaging analysis, receiving media coverage.",
      image: "/Gawr-Gura-PNG-Isolated-Image.png",
      tags: ["AI Research", "Medical Imaging", "Publication"],
      demo: "https://doi.org/10.1007/s44163-022-00045-1",
    },
    {
      id: "hybrid-model",
      title: "Hybrid Classification Segmentation Image Model",
      description:
        "A model for simultaneous image classification and segmentation with SOTA metrics. The research won competitions, ranking in top 0.5% of participants, with $11,500 in scholarships and a $1,000 cash prize.",
      image: "/Gawr-Gura-PNG-Isolated-Image.png",
      tags: ["AI Research", "Computer Vision", "Medical Imaging"],
      github: "https://github.com/jogong2718/COVID-19-Radiography-Models",
      demo: "https://github.com/jogong2718/COVID-19-Radiography-Models",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <NeuralBackground />
      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-palette-blue via-palette-lightBlue to-palette-blueGray bg-clip-text text-transparent pb-2">
            Projects
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            A showcase of my work in machine learning, neural networks, and
            software development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              className="overflow-hidden border bg-background/60 backdrop-blur-sm"
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                <Button size="sm" asChild>
                  <Link href={project.demo}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
