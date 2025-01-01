import React from "react";
import Footer from "../../components/footer";
import Image from "next/image";
import GuraImage from "../../../public/Gawr-Gura-PNG-Isolated-Image.png";
import food1 from "../../../public/IMG_0164.png";
import food2 from "../../../public/IMG_0166.png";
import food3 from "../../../public/IMG_0213.png";
import food4 from "../../../public/IMG_0216.png";
import niagra from "../../../public/IMG_0383.png";

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
              reviews about it.
            </p>

            <h2>To Be Cont...</h2>
            {/* <p>
              It also includes a JavaScript file that enables interactive
              components, such as modals, dropdowns, and datepickers which you
              can optionally include into your project via CDN or NPM.
            </p>
            <p>
              You can check out the{" "}
              <a href="https://flowbite.com/docs/getting-started/quickstart/">
                quickstart guide
              </a>{" "}
              to explore the elements by including the CDN files into your
              project. But if you want to build a project with Flowbite I
              recommend you to follow the build tools steps so that you can
              purge and minify the generated CSS.
            </p>
            <p>
              You&apos;ll also receive a lot of useful application UI, marketing UI,
              and e-commerce pages that can help you get started with your
              projects even faster. You can check out this{" "}
              <a href="https://flowbite.com/docs/components/tables/">
                comparison table
              </a>{" "}
              to better understand the differences between the open-source and
              pro version of Flowbite.
            </p>
            <h2>When does design come in handy?</h2>
            <p>
              While it might seem like extra work at a first glance, here are
              some key moments in which prototyping will come in handy:
            </p>
            <ol>
              <li>
                <strong>Usability testing</strong>. Does your user know how to
                exit out of screens? Can they follow your intended user journey
                and buy something from the site you’ve designed? By running a
                usability test, you’ll be able to see how users will interact
                with your design once it’s live;
              </li>
              <li>
                <strong>Involving stakeholders</strong>. Need to check if your
                GDPR consent boxes are displaying properly? Pass your prototype
                to your data protection team and they can test it for real;
              </li>
              <li>
                <strong>Impressing a client</strong>. Prototypes can help
                explain or even sell your idea by providing your client with a
                hands-on experience;
              </li>
              <li>
                <strong>Communicating your vision</strong>. By using an
                interactive medium to preview and test design elements,
                designers and developers can understand each other — and the
                project — better.
              </li>
            </ol>
            <h3>Laying the groundwork for best design</h3>
            <p>
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p>
              Let&apos;s start by including the CSS file inside the <code>head</code>{" "}
              tag of your HTML.
            </p>
            <h3>Understanding typography</h3>
            <h4>Type properties</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Measurement from the baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h3>Type classNameification</h3>
            <h4>Serif</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classNameified as one
              of the following:
            </p>
            <h4>Old-Style serifs</h4>
            <ul>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ul>
            <Image src={GuraImage} alt="" width={800} height={500} />
            <ol>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ol>
            <h3>Laying the best for successful prototyping</h3>
            <p>
              A serif is a small shape or projection that appears at the
              beginning:
            </p>
            <blockquote>
              <p>
                Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.
              </p>
            </blockquote>
            <h4>Code example</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classNameified as one
              of the following:
            </p>

            <h4>Table example</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter.
            </p>

            <h3>Best practices for setting up your prototype</h3>
            <p>
              <strong>Low fidelity or high fidelity?</strong> Fidelity refers to
              how close a prototype will be to the real deal. If you’re simply
              preparing a quick visual aid for a presentation, a low-fidelity
              prototype — like a wireframe with placeholder images and some
              basic text — would be more than enough. But if you’re going for
              more intricate usability testing, a high-fidelity prototype — with
              on-brand colors, fonts and imagery — could help get more pointed
              results.
            </p>
            <p>
              <strong>Consider your user</strong>. To create an intuitive user
              flow, try to think as your user would when interacting with your
              product. While you can fine-tune this during beta testing,
              considering your user’s needs and habits early on will save you
              time by setting you on the right path.
            </p>
            <p>
              <strong>Start from the inside out</strong>. A nice way to both
              organize your tasks and create more user-friendly prototypes is by
              building your prototypes ‘inside out’. Start by focusing on what
              will be important to your user, like a Buy now button or an image
              gallery, and list each element by order of priority. This way,
              you’ll be able to create a prototype that puts your users’ needs
              at the heart of your design.
            </p>
            <p>
              And there you have it! Everything you need to design and share
              prototypes — right in Flowbite Figma.
            </p> */}
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
