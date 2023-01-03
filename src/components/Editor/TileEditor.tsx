import React from "react";

import { TileElement, useComponentStore } from "../../App";
import Tile from "../Basic/Tile";
import ComponentForm from "../ComponentForm";

const TileEditor = () => {
  const current = useComponentStore((state) => state.components.tile.current);
  console.log("this is current", current);
  return (
    <div className="flex mt-5">
      <div className="p-10 flex items-center">
        <Tile properties={current as TileElement}></Tile>
      </div>
      <ComponentForm type="tile" />
    </div>
  );
};

export { TileEditor };
