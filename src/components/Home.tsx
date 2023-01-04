import React from "react";

import Button from "./Basic/Button";
import CTA from "./Basic/CTA";
import Tile from "./Basic/Tile";

import { Link } from "react-router-dom";

import { useComponentStore } from "../App";

const Home = () => {
  const componentContainer = "p-5";
  const buttonContainer = "flex justify-start";
  const componentTitle = "text-xl mb-2 font-bold";
  const componentButton =
    "bg-red-700 text-zinc-100 p-3 rounded mb-2 first:mr-2";

  const buttonSaved = useComponentStore(
    (state) => state.components.button.saved
  );
  const tileSaved = useComponentStore((state) => state.components.tile.saved);
  const ctaSaved = useComponentStore((state) => state.components.cta.saved);

  return (
    <div>
      <h1 className="text-3xl font-bold p-5 text-center">Component Editor</h1>
      <div className="flex flex-col">
        <div className="grid sm:grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col p-5 justify-center items-center">
            <div className="w-80 flex items-center justify-center">
              <Button
                properties={{
                  name: "testing",
                  backgroundColor: "#000",
                  textColor: "#fff",
                  textSize: 12,
                  borderRadius: 0,
                }}
              ></Button>
            </div>
            <div className={`${componentContainer}`}>
              <h2 className={`${componentTitle}`}>Button</h2>
              <div className={`${buttonContainer}`}>
                <Link to="saved/button">
                  <button className={`${componentButton}`}>
                    Saved Components
                  </button>
                </Link>
                <Link to={`button/${buttonSaved.length}`}>
                  <button className={`${componentButton}`}>
                    New Component
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-5 justify-center items-center">
            <div className="w-80 flex flex-col items-center justify-center">
              <Tile
                properties={{
                  name: "test",
                  tileBackground: "#FF0000",
                  descriptionBackground: "#000",
                  tileTitle: "testing",
                  titleSize: 18,
                  titleColor: "#fff",
                  tileDescription: "tile description",
                  descriptionSize: 12,
                  descriptionColor: "#fff",
                }}
              ></Tile>
              <div className={`${componentContainer}`}>
                <h2 className={`${componentTitle}`}>Tile</h2>
                <div className={`${buttonContainer}`}>
                  <Link to="saved/tile">
                    <button className={`${componentButton}`}>
                      Saved Components
                    </button>
                  </Link>
                  <Link to={`tile/${tileSaved.length}`}>
                    <button className={`${componentButton}`}>
                      New Component
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <CTA
                properties={{
                  name: "testing",
                  tileBackground: "#FF0000",
                  buttonBackground: "#000",
                }}
              ></CTA>
              <div className={`${componentContainer}`}>
                <h2 className={`${componentTitle}`}>CTA</h2>
                <div className={`${buttonContainer}`}>
                  <Link to="saved/cta">
                    <button className={`${componentButton}`}>
                      Saved Components
                    </button>
                  </Link>
                  <Link to={`cta/${ctaSaved.length}`}>
                    <button className={`${componentButton}`}>
                      New Component
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3"></div>
      </div>
    </div>
  );
};

export default Home;
