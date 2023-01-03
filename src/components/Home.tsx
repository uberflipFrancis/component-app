import React from "react";

import Button from "./Basic/Button";
import CTA from "./Basic/CTA";
import Tile from "./Basic/Tile";

import { Link } from "react-router-dom";

const Home = () => {
  const componentContainer = "";
  const buttonContainer = "flex flex-col justify-start";
  const componentTitle = "text-xl mb-2 font-bold";
  const componentButton = "bg-red-700 text-zinc-100 p-3 rounded mb-2";
  return (
    <div>
      <h1>Component Editor</h1>
      <div className="border-l border-t border-r flex flex-col">
        <div className="flex p-5 justify-center items-center">
          <div className={`${componentContainer}`}>
            <h2 className={`${componentTitle}`}>Button</h2>
            <div className={`${buttonContainer}`}>
              <Link to="saved/button">
                <button className={`${componentButton}`}>
                  Saved Components
                </button>
              </Link>

              <button className={`${componentButton}`}>New Component</button>
            </div>
          </div>
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
        </div>
        <div className="flex p-5 justify-center items-center">
          <div className={`${componentContainer}`}>
            <h2 className={`${componentTitle}`}>Tile</h2>
            <div className={`${buttonContainer}`}>
              <Link to="saved/tile">
                <button className={`${componentButton}`}>
                  Saved Components
                </button>
              </Link>
              <button className={`${componentButton}`}>New Component</button>
            </div>
          </div>
          <div className="w-80 flex items-center justify-center">
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
          </div>
        </div>
        <div className="flex p-5 justify-center items-center">
          <div className={`${componentContainer}`}>
            <h2 className={`${componentTitle}`}>CTA</h2>
            <div className={`${buttonContainer}`}>
              <Link to="saved/cta">
                <button className={`${componentButton}`}>
                  Saved Components
                </button>
              </Link>
              <button className={`${componentButton}`}>New Component</button>
            </div>
          </div>
          <div className="w-80 flex items-center justify-center">
            <CTA
              properties={{
                name: "testing",
                tileBackground: "#FF0000",
                buttonBackground: "#000",
              }}
            ></CTA>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
