import React from "react";
import Footer from "../../components/footer";
import Image from "next/image";
import Link from "next/link";
import GuraImage from "../../../public/Gawr-Gura-PNG-Isolated-Image.png";
import food1 from "../../../public/IMG_0164.png";
import food2 from "../../../public/IMG_0166.png";
import food3 from "../../../public/IMG_0213.png";
import food4 from "../../../public/IMG_0216.png";
import niagra from "../../../public/IMG_0383.png";
import capybara from "../../../public/IMG_0299.png";
import goose from "../../../public/IMG_0255.png";
import construction from "../../../public/IMG_0306.png";
import ta from "../../../public/ta_bruh.png";

const page = () => {
  return (
    <main
      className="flex flex-col min-h-screen overflow-y-auto pb-24 pt-4"
      style={{
        fontFamily: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ].join(", "),
      }}
    >
      <div className="bg-transparent antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-white">
                  <Image
                    className="mr-4 w-16 h-16 rounded-full"
                    src={GuraImage}
                    alt="Image"
                    width={64}
                    height={64}
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-white"
                    >
                      Jonathan Gong
                    </a>
                    <p className="text-base text-gray-400">Your friend</p>
                    <p className="text-base text-gray-400">
                      <time dateTime="2024-12-31" title="December 31st, 2024">
                        Dec. 31, 2024
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
                University Life (Y1 T1)
              </h1>
            </header>
            <p className="lead">
              A new chapter in my life has begun, or so they say. One of the
              first huge decisions one makes in their life is choosing their
              university. Yet I don&apos;t feel much has changed.
            </p>
            <p>
              I made up my mind starting uni to eat good. To ensure that there
              was really only one option: to cook myself. Cost-effective and
              delicious sure, but there&apos;s a reason why people don&apos;t
              cook for themselves, it&apos;s a lot of work. Yet if cooking
              myself was only a means of survival, I wouldn&apos;t have lasted
              long. I&apos;ve come to enjoy the process of cooking, and sharing
              the moment with friends. An important decision one must make for
              themselves as how to destress. Uni is stressful, not matter how
              hard I try to hide it, under good grades or a smile. I&apos;ve
              found that cooking is a great way to destress. So heres some pics,
              heh.
            </p>
            <figure className="grid grid-cols-2 gap-2 my-2">
              <div>
                <Image src={food1} alt="" width={400} height={300} />
              </div>
              <div>
                <Image src={food2} alt="" width={400} height={300} />
              </div>
              <div>
                <Image src={food3} alt="" width={400} height={300} />
              </div>
              <div>
                <Image src={food4} alt="" width={400} height={300} />
              </div>
            </figure>

            <h3>Studying</h3>
            <p>
              In my opinion the first big shock is the grading system. Unlike
              high-school where consistency is valued, university is all about
              two big exams: the midterm and final. Midterms creep up on you
              quickly, and before you feel like you&apos;re settled in into uni,
              you&apos;re already writing your first midterm. Yet UWaterloo and
              I think other universities give a week without classes before
              midterms to &quot;study&quot; (reading week). Being studious in
              these times is important, but so is taking breaks. You might be
              like me, and lose sense of what I am studying for. A friend of
              mine asked me to go on a day trip to niagara falls and I was
              hesitant at first, but I went. A relaxing trip was all I needed to
              rethink my priorities. Realising that the age that I am at is a
              time I will never get back, and that I should make the most of it.
            </p>
            <Image src={niagra} alt="" width={700} height={500} />

            <h3>Computer Science</h3>
            <p>
              The day in my life as a CS student has changed quite drasticly
              since I&apos;ve started uni until now. I think the weather of
              Waterloo played a big part in it as well. I remember the first
              weeks of uni, I was going to the library study after class, and
              always had time to do fun things like go downtown on the weekends.
              But as the weather got colder, I found myself spending more and
              more time in my dorm at my desk studying.
            </p>
            <p>
              The major in of itself is quite interesting, but I have mixed
              reviews about it. Here I am going to rate my courses and give my
              thoughts.
            </p>
            <div className="pl-12">
              <h4>Courses</h4>
              <p>
                These are the typical CS courses that first years take. However
                I skipped Calc 1 (MATH 137) with my AP credits.
              </p>
              <table>
                <thead>
                  <tr>
                    <th className="pl-2">Course</th>
                    <th className="pl-2">Difficulty &amp; Interest </th>
                    <th className="pl-2">HS Courses that Helped</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CS 135</td>
                    <td>7/10 &amp; 5/10</td>
                    <td>
                      <strong>
                        Any CS course, consider learning the Racket language (I
                        hate this) in advance
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>MATH 135</td>
                    <td>7.5/10 &amp; 8/10</td>
                    <td>
                      <strong>Algebra courses. AoPS helped a lot</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>MATH 138</td>
                    <td>5/10 &amp; 6/10</td>
                    <td>
                      <strong>
                        If you&apos;re in IB or AP take your hardest calc
                        classes
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>COMMST 223</td>
                    <td>2/10 &amp; 6/10</td>
                    <td>
                      <strong>Bird class, speeches in HS helped</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>ECON 102</td>
                    <td>3/10, 7/10</td>
                    <td>
                      <strong>
                        Bird class, any econ class in HS but learn some Canadian
                        context
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Here&apos;s a picture of me malding over my ta destroying my MATH
              135 quiz
            </p>
            <Image src={ta} alt="" width={700} height={500} />

            <h3>Stuff ouside of studying</h3>
            <p>
              Of course at UWaterloo there are many opportunities to get
              involved in clubs or research or orginizations. I joined the UW
              undergraduate AI orginization named{" "}
              <Link href={"/experience"}>WAT.ai</Link> and became a researcher
              for a project on diabetes management. At the same time I
              collaborated with some friends to create a webapp called{" "}
              <Link href={"/projects"}>WatClub</Link> that helps students
              connect with clubs and orginizations in the university. Doing
              these projects was a great way to learn new things, and also
              opened my eyes to how smart and talented the people around me are.
              It made me really excited to learn from these peopleas well as to
              share my knowledge with them. Here&apos;s a picture of some prizes
              we won using WatClub!
            </p>
            <Image src={capybara} alt="" width={700} height={500} />
            <h3>Friends</h3>
            <p>
              I am very grateful for the friends I have made at UWaterloo.
              Extremely grateful I should say. Waterloo is generally a pretty
              depressing city, with the weather being cold and the architecture
              in campus being extremely brutalist in nature. Yet the friends I
              have made have made my experience at Waterloo a lot better.
              Studying with them is fun, and I have learned a lot from them.
              Every other day having dinner together and going for desserts
              while working on projects and playing games is the highlight of my
              day no question. Without them I would have gone insane by now.
              University is really like other people say. It is what you make of
              it. You can go to the most beautiful campus in the world, but if
              you don&apos;t have friends, you will be miserable. Humans are
              sociable creatures, and we need other people to be happy.
            </p>
            <p>
              Here is a final photo dump! I found a goose that lost a leg!?!?
              Construction also started on the new math building :(
            </p>

            <figure className="grid grid-cols-2 gap-2 my-2">
              <div>
                <Image src={goose} alt="" width={400} height={300} />
              </div>
              <div>
                <Image src={construction} alt="" width={400} height={300} />
              </div>
            </figure>
            <h2>Thanks for Reading!</h2>
          </article>
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
};

export default page;
