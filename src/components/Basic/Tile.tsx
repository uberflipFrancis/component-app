import React from "react";

import { TileElement } from "../../App";

interface TileProps {
  properties: TileElement;
}

const Tile = ({ properties }: TileProps): JSX.Element => {
  return (
    <div
      className="w-64 h-96
     bg-yellow-500 flex flex-col justify-between items-stretch text-zinc-100"
    >
      <div className="h-1/3 bg-zinc-300 grow"></div>
      <div className="h-2/3 flex flex-col items-start">
        <h2 className="mt-2 text-3xl">tile title</h2>
        <p>tile description</p>
      </div>
    </div>
  );
};

export default Tile;
