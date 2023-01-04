import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useComponentStore } from "../App";

import type { Element } from "../App";
import { Link } from "react-router-dom";

const EmptyList = () => {
  return (
    <div>
      <h1>Looks like there isn't a component with that name</h1>
    </div>
  );
};

const SavedComponents = () => {
  const { type } = useParams();
  const { components } = useComponentStore((state) => state);
  const [componentList, setComponentList] = useState<JSX.Element[]>([]);
  const componentButton = "bg-red-700 text-zinc-100 p-3 rounded mb-2";

  const saved = useComponentStore(
    (state) => state.components[type ? type : "button"].saved
  );

  if (type) {
    console.log("this is saved", saved);
  }

  useEffect(() => {
    const makeList = (
      component: () => JSX.Element,
      saved: Element[],
      type: string
    ): JSX.Element[] => {
      return saved.map((properties: Element, index) => {
        let NewElement: any = component; //edit

        return (
          <Link
            key={index}
            to={`/component/${type}/${index}`}
            className="flex border-l border-t border-r border-black last:border-b"
          >
            <div className="flex w-80 p-5 justify-center items-center border-r border-black">
              <h3>{properties.name}</h3>
            </div>
            <div className="flex justify-center items-center w-80 p-5">
              <NewElement properties={properties} />
            </div>
          </Link>
        );
      });
    };
    if (type && type in components) {
      setComponentList(
        makeList(components[type].component, components[type].saved, type)
      );
    } else {
      setComponentList([<EmptyList />]);
    }
  }, [components, type]);

  return (
    <div>
      <h1 className="text-3xl font-bold p-5 text-center">
        Saved Components - <span className="capitalize">{type}</span>
      </h1>
      <Link to="/component">
        <button className={componentButton}>Back home</button>
      </Link>
      <div>
        <div className="flex border-l border-t border-r border-black">
          <div className="flex w-80 p-2 justify-center items-center border-r border-black">
            <h2>Name</h2>
          </div>
          <div className="flex justify-center items-center w-80 p-2">
            <h2>Preview</h2>
          </div>
        </div>
        {componentList}
      </div>
    </div>
  );
};

export default SavedComponents;
