"use client";

import dynamic from "next/dynamic";

// Import the component dynamically with SSR disabled
const NeuralNetworkBackground = dynamic(
  () => import("./NeuralNetworkBackground"),
  { ssr: false } // This ensures the component only renders on the client side
);

export default function ClientBackgroundWrapper() {
  return <NeuralNetworkBackground />;
}
