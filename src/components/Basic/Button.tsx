import React from "react";

import type { ButtonElement } from "../../App";

interface ButtonProps {
  properties: ButtonElement;
}

const Button = ({ properties }: ButtonProps): JSX.Element => {
  const { backgroundColor, textColor, textSize, borderRadius } = properties;

  return (
    <button
      className={`w-40 p-2 text-zinc-100 rounded-md`}
      style={{
        backgroundColor,
        color: textColor,
        fontSize: `${textSize}px`,
        borderRadius: `${borderRadius}px`,
      }}
    >
      This is a button
    </button>
  );
};

export default Button;
