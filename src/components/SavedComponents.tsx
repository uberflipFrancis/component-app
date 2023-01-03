import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useComponentStore } from "../App";

import type { Element } from "../App";

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

  let list = <EmptyList />;

  console.log("this is components", components);

  useEffect(() => {
    const makeList = (
      component: () => JSX.Element,
      saved: Element[]
    ): JSX.Element[] => {
      return saved.map((properties: Element) => {
        let NewElement: any = component; //edit
        console.log("this is properties", properties);
        console.log("this is newElement", NewElement);
        return (
          <div className="flex border-l border-t border-r border-black last:border-b">
            <div className="flex w-80 p-5 justify-center items-center border-r border-black">
              <h3>{properties.name}</h3>
            </div>
            <div className="flex justify-center items-center w-80 p-5">
              <NewElement properties={properties} />
            </div>
          </div>
        );
      });
    };
    if (type && type in components) {
      console.log("we have found the type");
      setComponentList(
        makeList(components[type].component, components[type].saved)
      );
    } else {
      setComponentList([<EmptyList />]);
    }
  }, [components, type]);

  return (
    <div>
      <h1>Saved Components - {type}</h1>
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
