import React from "react";
import Footer from "../components/footer";
import ProjectCard from "../components/projectCard";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>Jonathan Gong Projects</title>
        <meta
          name="description"
          content="Jonathan, Gong, Jonathan Gong, Project, Projects, Jonathan Gong's Projects"
        />
      </Head>
      <main className="flex flex-col min-h-screen overflow-y-auto pb-24">
        <section className="bg-gray-transparent antialiased">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight  sm:text-4xl text-white">
                My projects
              </h2>
              <p className="mt-4 text-base font-normal sm:text-xl text-gray-400">
                Here are some of the projects I have worked on in the past. I am
                always looking for new opportunities to work on new projects and
                learn new things!
              </p>
            </div>

            <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                forWho="UWaterloo CSC, Web Dev"
                title="WatClub"
                summary={
                  <span>
                    WebApp for connecting students to clubs and organization in
                    the University of Waterloo, winning the best project award
                    among 300+ participants.
                  </span>
                }
                link="https://github.com/Brucewang15/WatClub"
              />
              <ProjectCard
                forWho="AI Research"
                title="Hybrid Classification Segmentation Image model"
                summary={
                  <span>
                    A model that can classify and segment images at the same
                    time with SOTA metrics. A paper was written helping me win a
                    competition, ranking in the top 0.5% of participants, along
                    with $11,500 in scholarships and the $1,000 cash prize.
                  </span>
                }
                link="https://github.com/jogong2718/COVID-19-Radiography-Models"
              />
              <ProjectCard
                forWho="Published AI Research"
                title="A multi-output network for medical imaging analysis."
                summary={
                  <p>
                    Inspired by my Hybrid Classification Segmentation Image
                    model, this model was further developed and published as a
                    paper in Discover Artificial Intelligence. Received media
                    coverage:{" "}
                    <a
                      className="underline text-blue-400"
                      href="https://doi.org/10.33548/SCIENTIA849"
                    >
                      Link
                    </a>
                  </p>
                }
                link="https://doi.org/10.1007/s44163-022-00045-1"
              />
              <ProjectCard
                forWho="AI Research, Web Dev"
                title="Skin Lesion Diagnostic Web Application"
                summary={
                  <span>
                    A web application that can diagnose skin lesions with SOTA
                    metrics. A paper was written for the model explaining the
                    architecture and the results.
                  </span>
                }
                link="https://monkeypox-h0h3a7dqcreaerd4.canadacentral-01.azurewebsites.net/"
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

export default page;
