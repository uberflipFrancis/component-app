import React from "react";

import { TileElement } from "../../App";

interface TileProps {
  properties: TileElement;
}

const Tile = ({ properties }: TileProps): JSX.Element => {
  const {
    tileBackground,
    descriptionBackground,
    tileTitle,
    titleSize,
    titleColor,
    tileDescription,
    descriptionColor,
    descriptionSize,
  } = properties;
  return (
    <div
      className="w-64 h-96
     bg-yellow-500 flex flex-col justify-between items-stretch text-zinc-100"
    >
      <div
        className="h-1/3 grow"
        style={{
          backgroundColor: tileBackground,
        }}
      ></div>
      <div
        className="h-2/3 flex flex-col items-start"
        style={{
          backgroundColor: descriptionBackground,
        }}
      >
        <h2
          style={{
            color: titleColor,
            fontSize: `${titleSize}px`,
          }}
        >
          {tileTitle}
        </h2>
        <p
          style={{ color: descriptionColor, fontSize: `${descriptionSize}px` }}
        >
          {tileDescription}
        </p>
      </div>
    </div>
  );
};

export default Tile;
