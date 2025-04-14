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
                forWho="Aview International"
                title="FullStack and ML Engineer"
                summary={
                  <div className="experience-card p-1 bg-transparent rounded-lg shadow-md text-left">
                    <p className="mt-2 text-gray-300">
                      Aview International is a startup that provides a platform
                      to transform how you create, localize, and distribute
                      content—all with the power of their AI toolkit.
                    </p>
                    <ul className="mt-4 pl-10 list-disc list-inside text-gray-300">
                      {/* <li>
                        Developed a <strong>React</strong> web application for
                        content creators to manage their projects and connect
                        with clients;
                      </li>
                      <li>
                        Implemented a <strong>Node.js</strong> backend with
                        Express and MongoDB to store user data and project
                        information;
                      </li>
                      <li>
                        Integrated <strong>Google Cloud Platform</strong> for
                        cloud storage and hosting;
                      </li>
                      <li>
                        Developed a <strong>Audio model</strong> to translate
                        and automatically generate subtitles and dubbing for
                        videos;
                      </li> */}
                      Incoming...
                    </ul>
                  </div>
                }
                link1="https://www.aviewint.com/"
                name1="Aview International"
              />
              <ExperienceCard
                forWho="SciUGo"
                title="CV & Data Engineer"
                summary={
                  <div className="experience-card p-1 bg-transparent rounded-lg shadow-md text-left">
                    <p className="mt-2 text-gray-300">
                      SciUGo helps resarchers refine and create their western
                      blot and gel figures. I worked on the CV model for the
                      platform.
                    </p>
                    <ul className="mt-4 pl-10 list-disc list-inside text-gray-300">
                      <li>
                        Developed a SIFT derivative and novel metric to compare
                        and match protein bands in western blot images,
                        achieving a<strong> 98% accuracy</strong>;
                      </li>
                    </ul>
                  </div>
                }
                link1="https://sciugo.com/"
                name1="SciUGo"
              />
              <ExperienceCard
                forWho="WAT.ai, Gluroo"
                title="AI Director, ML Engineer"
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
                        Designed a{" "}
                        <strong>robust sktime training pipeline</strong> with
                        hyperparameter tuning, dataset selection, train-test
                        splitting, and integration of models (
                        <strong>
                          ClaSPSegmentation, KNN, and HMM variations
                        </strong>
                        ). Managed model fitting, prediction, error analysis,
                        and ensured reliability with the{" "}
                        <strong>unittest framework</strong>.
                      </li>
                      <li>
                        Implemented a <strong>GMMHMM</strong> for blood glucose
                        data to predict and improve short-term prandial (during
                        meal-time) and postprandial blood glucose level outcomes
                        for PWD (<strong>MAE of 0.02, accuracy of 93%</strong>);
                      </li>
                      <li>
                        Developed novel ITS <strong>causal ML models</strong>{" "}
                        performing quasi-experiments to predict and interpolate
                        future possible blood glucose trends, improving the time
                        in range of PWD by <strong>60%</strong>;
                      </li>
                      <li>
                        Directed & led workshops, project showcases, and
                        long-term hackathons for{" "}
                        <strong>700+ organization members</strong>;
                      </li>
                      <li>
                        Created videos on AI models (ViTs, HMMs, DDPG, etc.) and
                        new technologies using the <strong>Manim Engine</strong>
                        .
                      </li>
                    </ul>
                  </div>
                }
                link1="https://github.com/Blood-Glucose-Control"
                link2="https://watai.ca/"
                link3="https://gluroo.com/"
                name1="Software"
                name2="WAT.ai"
                name3="Gluroo"
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
