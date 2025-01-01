import React from "react";

interface Props {
  NodeClicked: 0 | 1 | 2 | 3;
}

const output = ({ NodeClicked }: Props) => {
  return NodeClicked !== 0 ? (
    <div className="w-max max-w-md mx-auto overflow-x-hidden">
      {NodeClicked === 1 ? (
        <div className="flex flex-col w-screen bg-transparent text-gray-200 font-mono">
          <div className="flex-1 p-4">
            <div className="flex">
              <div className="mr-2">&gt;</div>
              <div className="w-max">
                <div className="animate-typing overflow-hidden whitespace-nowrap">
                  import numpy as np
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">&gt;</div>
              <div className="w-max">
                <div className="animate-typing overflow-hidden whitespace-nowrap">
                  np.argmax(np.array([1, 0, 0]))
                </div>
              </div>
            </div>

            <div className="mt-2">
              <span className="text-green-500">&gt; Output:</span>
              <div className="bg-transparent p-2 mt-1">
                <div className="w-max">
                  <div className="animate-typing overflow-hidden whitespace-nowrap">
                    |████████████████| Blog downloaded!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {NodeClicked === 2 ? (
        <div className="flex flex-col w-screen bg-transparent text-gray-200 font-mono">
          <div className="flex-1 p-4">
            <div className="flex">
              <div className="mr-2">&gt;</div>
              <div className="w-max">
                <div className="animate-typing overflow-hidden whitespace-nowrap">
                  import numpy as np
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">&gt;</div>
              <div className="w-max">
                <div className="animate-typing overflow-hidden whitespace-nowrap">
                  np.argmax(np.array([0, 1, 0]))
                </div>
              </div>
            </div>

            <div className="mt-2">
              <span className="text-green-500">&gt; Output:</span>
              <div className="bg-transparent p-2 mt-1">
                <div className="w-max">
                  <div className="animate-typing overflow-hidden whitespace-nowrap">
                    |████████████| Projects downloaded!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {NodeClicked === 3 ? (
        <div className="flex flex-col w-screen bg-transparent text-gray-200 font-mono">
          <div className="flex-1 p-4">
            <div className="flex">
              <div className="mr-2">&gt;</div>
              <div className="w-max">
                <div className="animate-typing overflow-hidden whitespace-nowrap">
                  import numpy as np
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">&gt;</div>
              <div className="w-max">
                <div className="animate-typing overflow-hidden whitespace-nowrap">
                  np.argmax(np.array([0, 0, 1]))
                </div>
              </div>
            </div>

            <div className="mt-2">
              <span className="text-green-500">&gt; Output:</span>
              <div className="bg-transparent p-2 mt-1">
                <div className="w-max">
                  <div className="animate-typing overflow-hidden whitespace-nowrap">
                    |██████████████| Resume downloaded!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
};

export default output;
