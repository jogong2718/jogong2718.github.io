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
                forWho="Velocity Incubator, App Dev, 2025"
                title="United Mobility & Healthcare - 2x Finalist 1x Winner"
                summary={
                  <span>
                    United Healthcare (Finalist Top 8) is a hospital monitoring
                    system that analyzes patient vitals, environment, and
                    behavior in real time to predict health risks and support
                    proactive care. United Mobility (Winner $2500) is a
                    decentralized scooter-sharing network that transforms idle,
                    privately-owned micromobility vehicles into a
                    community-powered transportation system by partnering with
                    local businesses
                  </span>
                }
                link="https://deliriumcontrol.vercel.app"
              />
              <ProjectCard
                forWho="AI Implemention, Web Dev, 2025"
                title="SoccerMetrics - Won GeeseHacks"
                summary={
                  <span>
                    The platform provides actionable biomechanical insights by
                    analyzing 3D pose and tracking ball movement. Using
                    MediaPipe's GHUM 3D model and Ultralytics YOLOv8, it
                    calculates joint angles and other metrics, enabling
                    comparisons to optimal standards.
                  </span>
                }
                link="https://github.com/jogong2718/SoccerMetrics"
              />
              <ProjectCard
                forWho="UWaterloo CSC, Web Dev, 2024"
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
                forWho="AI Research, Web Dev, 2024"
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
              <ProjectCard
                forWho="Published AI Research, 2024"
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
                forWho="AI Research"
                title="Hybrid Classification Segmentation Image model, 2023"
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
