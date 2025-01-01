import React from "react";
import Footer from "../components/footer";
import ProjectCard from "../components/projectCard";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen overflow-y-auto pb-24">
      <section className="bg-gray-transparent antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              My projects
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Here are some of the projects I have worked on in the past. I am
              always looking for new opportunities to work on new projects and
              learn new things!
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              forWho="UWaterloo CSC"
              title="WatClub"
              summary="WebApp for connecting students to clubs and organization in the University of Waterloo"
              link="https://github.com/Brucewang15/WatClub"
            />
            <ProjectCard
              forWho="Personal"
              title="Hybrid Classification Segmentation Image model"
              summary="A model that can classify and segment images at the same time with SOTA metrics"
              link="https://github.com/jogong2718/COVID-19-Radiography-Models"
            />
            <ProjectCard
              forWho="Personal"
              title="Skin Lesion Diagnostic Web Application"
              summary="A web application that can diagnose skin lesions with SOTA metrics"
              link="https://monkeypox-h0h3a7dqcreaerd4.canadacentral-01.azurewebsites.net/"
            />
          </div>
        </div>
      </section>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
};

export default page;
