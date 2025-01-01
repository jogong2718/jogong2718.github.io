"use client";
import InputNode from "./components/inputNode";
import Footer from "./components/footer";
import ANode from "./components/aNode";
import HiddenLayer from "./components/hiddenLayer";
import Output from "./components/output";
import Description from "./components/description";
import TheLink from "./components/theLink";
import { useState, useEffect } from "react";

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

  return (
    <main className="flex flex-col min-h-screen overflow-y-auto pb-24">
      <div className="flex flex-col items-center px-4 ">
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
        {/* <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/Jonathan_Resume-6.pdf">Resume</Link> */}
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

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}