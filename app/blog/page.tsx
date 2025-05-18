import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NeuralBackground from "@/components/neural-background";

export default function BlogPage() {
  const posts = [
    {
      id: "thoughts-pt-1",
      title: "Thoughts (Pt 1)",
      date: "December 30, 2024",
      excerpt:
        "At the time of writing this blog I have three stuffies beside me on my desk. Winter break is almost ending!!! I am also listening to ... Delaney Bailey??? When did i have her in my playlist jeez.",
      readTime: "3 min read",
      category: "Personal",
    },
    {
      id: "university-life-y1-t1",
      title: "University Life (Y1 T1)",
      date: "December 30, 2024",
      excerpt:
        "First term at uwaterloo in a nutshell. Banger food there actually. Got addicted to bs 😓. Learned a bunch of new things doing AI research and projects with friends. Overall great time tho.",
      readTime: "4 min read",
      category: "University",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <NeuralBackground />
      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-palette-blue via-palette-lightBlue to-palette-blueGray bg-clip-text text-transparent pb-2">
            My Blog
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Read my latest blog posts, I hope to have some collabs too ;). I
            write about anything tech and my life!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="border bg-background/60 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-palette-lightBlue">
                    {post.category}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {post.date}
                  </div>
                </div>
                <CardTitle className="mt-2">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {post.readTime}
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
                >
                  Read full article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
