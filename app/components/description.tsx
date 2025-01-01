import React from "react";

interface Props {
  NodeClicked: 0 | 1 | 2 | 3;
}

const Description = ({ NodeClicked }: Props) => {
  return NodeClicked === 0 ? null : (
    <div className="w-max">
      {NodeClicked === 1 ? (
        <div className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl sm:text-4xl text-white font-bold bg-transparent">
          Heeeey, you found my Blog!
        </div>
      ) : null}
      {NodeClicked === 2 ? (
        <div className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl sm:text-4xl text-white font-bold bg-transparent">
          Oh damn, you found my Projects!
        </div>
      ) : null}
      {NodeClicked === 3 ? (
        <div className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl sm:text-4xl text-white font-bold bg-transparent">
          You found my Experience!
        </div>
      ) : null}
    </div>
  );
};

export default Description;
