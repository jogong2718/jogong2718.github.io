import React from "react";
import Footer from "../components/footer";
import ExperienceCard from "../components/experienceCard";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>Jonathan Gong Experience</title>
        <meta
          name="description"
          content="Jonathan, Gong, Jonathan Gong, Expereince, Experiences, Jonathan Gong's Experience"
        />
      </Head>
      <main className="flex flex-col min-h-screen overflow-y-auto pb-24">
        <section className="bg-gray-transparent antialiased">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight  sm:text-4xl text-white">
                Experience
              </h2>
              <p className="mt-4 text-base font-normal sm:text-xl text-gray-400">
                Here are my latest jobs, positions, interships, and experiences
              </p>
            </div>

            <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-1 lg:grid-cols-1">
              <ExperienceCard
                forWho="WAT.ai, Gluroo"
                title="Causal Modeling and Time Series Representation Learning for Diabetes Management"
                summary={
                  <div className="experience-card p-1 bg-transparent rounded-lg shadow-md text-left">
                    <p className="mt-2 text-gray-300">
                      Gluroo simplifies diabetes management by tracking fitness,
                      nutrition, and insulin use for people with diabetes (PWD).
                      As part of the WAT.ai research team, I collaborated with
                      20 graduates and undergraduates to develop innovative
                      healthcare solutions for type 1 diabetes.
                    </p>
                    <ul className="mt-4 pl-10 list-disc list-inside text-gray-300">
                      <li>
                        <strong>Designed</strong> a robust <em>sktime</em>{" "}
                        training pipeline with hyperparameter tuning, dataset
                        selection, train-test splitting, and integration of
                        models (ClaSPSegmentation, KNN, HMM variations).
                      </li>
                      <li>
                        <strong>Implemented</strong> the <em>GMMHMM</em> model
                        for blood glucose data, enhancing blood glucose level
                        outcomes for PWD with a MAE of <strong>0.02</strong> and{" "}
                        <strong>93% accuracy</strong>.
                      </li>
                    </ul>
                  </div>
                }
                link1="https://github.com/RobotPsychologist/bg_control"
                link2="https://watai.ca/"
                link3="https://gluroo.com/"
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
