import React from "react";
import Footer from "../components/footer";
import Article from "../components/article";
import Head from "next/head";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Jonathan Gong Blog</title>
        <meta
          name="description"
          content="Jonathan, Gong, Jonathan Gong's Blog"
        />
      </Head>
      <main className="flex flex-col min-h-screen overflow-y-auto pb-24">
        <section className="bg-transparent">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
                My Blog
              </h2>
              <p className="font-light sm:text-xl text-gray-400">
                Read my latest blog posts, I hope to have some collabs too ;). I
                write about anything tech and my life!
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <Article
                date="Monday, Dec 30, 2024"
                title="Thoughts (Pt 1)"
                summary="At the time of writing this blog I have three stuffies beside me
                on my desk. Winter break is almost ending!!! I am also listening
                to ... Delaney Bailey??? When did i have her in my playlist
                jeez."
                link="1"
              />
              <Article
                date="Monday, Dec 30, 2024"
                title="University Life (Y1 T1)"
                summary="First term at uwaterloo in a nutshell. Banger food there
                actually. Got addicted to bs 😓. Learned a bunch of new things
                doing AI research and projects with friends. Overall great time tho."
                link="2"
              />
            </div>
          </div>
        </section>
        <div className="fixed bottom-0 w-full">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default BlogPage;
