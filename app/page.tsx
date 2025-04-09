"use client";
import InputNode from "./components/inputNode";
import Footer from "./components/footer";
import ANode from "./components/aNode";
import HiddenLayer from "./components/hiddenLayer";
import Output from "./components/output";
import Description from "./components/description";
import TheLink from "./components/theLink";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  type ToggleStates = {
    toggle1: boolean;
    toggle2: boolean;
    toggle3: boolean;
  };

  const [toggleStates, setToggleStates] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
  });

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleToggle = (toggleName: keyof ToggleStates) => {
    setToggleStates(() => ({
      toggle1: toggleName === "toggle1" ? !toggleStates.toggle1 : false,
      toggle2: toggleName === "toggle2" ? !toggleStates.toggle2 : false,
      toggle3: toggleName === "toggle3" ? !toggleStates.toggle3 : false,
    }));
  };

  const [output, setOutput] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    if (toggleStates.toggle1) {
      setOutput(1);
    } else if (toggleStates.toggle2) {
      setOutput(2);
    } else if (toggleStates.toggle3) {
      setOutput(3);
    } else {
      setOutput(0);
    }
  }, [toggleStates]);

  // Add a ref to track if initial render is complete
  const [isInitialRender, setIsInitialRender] = useState(true);

  return (
    <>
      <Head>
        <title>Jonathan Gong Website</title>
        <meta
          name="description"
          content="Jonathan, Gong, Jonathan Gong, Website, Jonathan Gong's website"
        />
        <meta
          name="google-site-verification"
          content="6H2VmUQh_Soz3ztvZr6dWmeaWJqJeHk03uwnv9vB0vc"
        />
        <link rel="icon" type="image/x-icon" href={"/favicon.ico"} />
      </Head>
      <main className="flex flex-col min-h-screen relative z-10">
        <div className="flex-grow">
          <div className="flex flex-col items-center px-4 pt-8">
            <InputNode onClick={handleClick} isClicked={isClicked} />
            <HiddenLayer
              isInputClicked={isClicked}
              ANode1={
                <ANode
                  onClick={() => handleToggle("toggle1")}
                  checked={toggleStates.toggle1}
                />
              }
              ANode2={
                <ANode
                  onClick={() => handleToggle("toggle2")}
                  checked={toggleStates.toggle2}
                />
              }
              ANode3={
                <ANode
                  onClick={() => handleToggle("toggle3")}
                  checked={toggleStates.toggle3}
                />
              }
            />
          </div>
          <div className="flex flex-col justify-center items-center pt-12 px-4 sm:px-6 md:px-8">
            <Description NodeClicked={output} />
          </div>
          <div className="flex flex-col justify-center items-center pt-12 pb-2 w-full">
            <Output NodeClicked={output} />
          </div>

          <div className="flex flex-col justify-center items-center pt-12 pb-20 w-full">
            <TheLink link={output} />
          </div>
        </div>

        <div className="w-full mt-auto">
          <Footer />
        </div>
      </main>
    </>
  );
}
