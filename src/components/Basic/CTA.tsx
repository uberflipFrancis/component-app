import React from "react";

import type { CTAElement } from "../../App";

interface CTAProps {
  properties: CTAElement;
}

const CTA = ({ properties }: CTAProps): JSX.Element => {
  const { tileBackground, buttonBackground } = properties;
  console.log("this is buttonBackground", buttonBackground);
  return (
    <div
      className="w-64 h-96
    flex flex-col justify-between items-center text-zinc-100"
      style={{ backgroundColor: tileBackground }}
    >
      <p className="mt-12 text-[32px]">CTA</p>
      <button
        className="mb-12 w-32 p-3 rounded-md text-zinc-100 text-lg"
        style={{
          backgroundColor: buttonBackground,
        }}
      >
        click here
      </button>
    </div>
  );
};

export default CTA;
