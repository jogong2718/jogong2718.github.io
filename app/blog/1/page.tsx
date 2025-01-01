import React from "react";
import Footer from "../../components/footer";
import Image from "next/image";
import GuraImage from "../../../public/Gawr-Gura-PNG-Isolated-Image.png";

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
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
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
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Jonathan Gong
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Your friend
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time dateTime="2024-12-31" title="December 31st, 2024">
                        Dec. 31, 2024
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                In Progress..
              </h1>
            </header>
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
