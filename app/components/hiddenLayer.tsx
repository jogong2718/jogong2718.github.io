import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  isInputClicked: boolean;
  ANode1: ReactNode;
  ANode2: ReactNode;
  ANode3: ReactNode;
}

const lineVariants = {
  hidden: { strokeDashoffset: 310 },
  visible: {
    strokeDashoffset: 0,
    transition: { duration: 1.8 },
  },
};

const hiddenLayer = ({ isInputClicked, ANode1, ANode2, ANode3 }: Props) => {
  return isInputClicked ? (
    <div className="relative w-full max-w-md h-80">
      {/* Arrows and Hidden Nodes with Animation */}
      <AnimatePresence>
        {isInputClicked && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-start"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 50, y: -20 }}
            transition={{ duration: 2 }}
          >
            {/* SVG Arrows */}
            <svg className="absolute inset-0 w-full h-full">
              {/* Define arrowhead marker */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="0"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
              </defs>
              <filter
                id="glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="5"
                  result="blur"
                />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Arrow to Node 1 */}
              <motion.line
                x1="50%"
                y1="0%"
                x2="10%"
                y2="80%"
                stroke="white"
                strokeWidth="5"
                markerEnd="url(#arrowhead)"
                filter="url(#glow)"
                strokeDasharray="350"
                strokeDashoffset="100"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
              {/* Arrow to Node 2 */}
              <motion.line
                x1="50%"
                y1="0%"
                x2="50%"
                y2="77%"
                stroke="white"
                strokeWidth="5"
                markerEnd="url(#arrowhead)"
                filter="url(#glow)"
                strokeDasharray="350"
                strokeDashoffset="100"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
              {/* Arrow to Node 3 */}
              <motion.line
                x1="50%"
                y1="0%"
                x2="90%"
                y2="80%"
                stroke="white"
                strokeWidth="5"
                markerEnd="url(#arrowhead)"
                filter="url(#glow)"
                strokeDasharray="350"
                strokeDashoffset="100"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
            </svg>
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-start"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 50, y: -20 }}
              transition={{ duration: 1.3 }}
            >
              <div className="absolute bottom-0 left-0 w-full flex justify-between">
                {ANode1}
                {ANode2}
                {ANode3}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ) : null;
};

export default hiddenLayer;
