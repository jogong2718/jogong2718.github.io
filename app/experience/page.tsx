import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NeuralBackground from "@/components/neural-background";
import { ExternalLink } from "lucide-react";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "FullStack and ML Engineer",
      company: "Aview International",
      period: "2025 - Present",
      description:
        "Aview International is a startup that provides a platform to transform how you create, localize, and distribute content—all with the power of their AI toolkit.",
      skills: ["AI", "ML", "React", "Node.js"],
      link: "https://www.aviewint.com/",
    },
    {
      title: "CV & Data Engineer",
      company: "SciUGo",
      period: "2025 - Present",
      description:
        "SciUGo helps researchers refine and create their western blot and gel figures. I worked on the CV model for the platform. Developed a SIFT derivative and novel metric to compare and match protein bands in western blot images, achieving a 98% accuracy.",
      skills: [
        "Computer Vision",
        "SIFT",
        "Image Processing",
        "Data Engineering",
      ],
      link: "https://sciugo.com/",
    },
    {
      title: "ML Engineer",
      company: "Gluroo",
      period: "2024 - Present",
      description:
        "Gluroo simplifies diabetes management by tracking fitness, nutrition, and insulin use for people with diabetes (PWD). As part of the WAT.ai research team that is collaborating with Gluroo, I collaborated with 20 graduates and undergraduates to develop innovative healthcare solutions for type 1 diabetes. Designed a robust sktime training pipeline with hyperparameter tuning and implemented a GMMHMM for blood glucose data (MAE of 0.02, accuracy of 93%).",
      skills: [
        "sktime",
        "ClaSPSegmentation",
        "KNN",
        "HMM",
        "GMMHMM",
        "Causal ML",
      ],
      link: "https://gluroo.com/",
    },
    {
      title: "AI Director",
      company: "WAT.ai",
      period: "2024 - Present",
      description:
        "WAT.ai is a student-run organization at the University of Waterloo that focuses on artificial intelligence research and development. As a Director, I led initiatives to foster collaboration and innovation among students passionate about AI. Directed & led workshops, project showcases, and long-term hackathons for 700+ organization members. Created videos on AI models (ViTs, HMMs, DDPG, etc.) and new technologies using the Manim Engine.",
      skills: ["Leadership", "ViTs", "HMMs", "DDPG", "Manim Engine"],
      link: "https://watai.ca/",
    },
  ];

  const education = [
    {
      degree: "B.S. in Computer Science",
      institution: "University of Waterloo",
      period: "2024 - 2029",
      focus: "Specialization in Artificial Intelligence",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <NeuralBackground />
      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-palette-blue via-palette-lightBlue to-palette-blueGray bg-clip-text text-transparent pb-2">
            Experience
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            My professional journey and educational background in machine
            learning and software development.
          </p>
        </div>

        <div className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border bg-background/60 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-blue-500"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn more
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="border bg-background/60 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{edu.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
