import React, { useEffect, useState } from "react";

import { TileElement, useComponentStore } from "../../App";
import Tile from "../Basic/Tile";
import ComponentForm from "../ComponentForm";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const TileEditor = () => {
  const current = useComponentStore((state) => state.components.tile.current);
  const saved = useComponentStore((state) => state.components.tile.saved);
  const { id } = useParams();
  const [properties, setProperties] = useState(current);
  const componentButton = "bg-red-700 text-zinc-100 p-3 rounded mb-2";

  const addSaved = useComponentStore((state) => state.addSaved);
  useEffect(() => {
    console.log("this is saved", saved);
    if (Number(id) < saved.length) {
      setProperties(saved[Number(id)]);
    } else if (Number(id) === saved.length) {
      addSaved("tile", current, Number(id));
    }
  }, [id, saved, addSaved, current]);

  return (
    <div className="flex mt-5">
      <Link to="/component/saved/tile">
        <button className={componentButton}>Back to Saved</button>
      </Link>
      <div className="p-10 flex items-center">
        <Tile properties={properties as TileElement}></Tile>
      </div>
      <ComponentForm type="tile" cIndex={Number(id)} properties={properties} />
    </div>
  );
};

export { TileEditor };
