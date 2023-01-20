import React, { useState, useEffect } from "react";

import { useComponentStore } from "../App";
import { Link } from "react-router-dom";

interface SelectorButtonProps {
  name: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  selected: boolean;
}

const SelectorButton = ({
  name,
  setCurrent,
  selected,
}: SelectorButtonProps) => {
  return (
    <div
      className={`p-3 border-b border-black w-32 ${
        selected ? "bg-red-700 text-white" : ""
      }`}
      onClick={() => {
        setCurrent(name);
      }}
    >
      {name}
    </div>
  );
};

const ComponentSelector = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [current, setCurrent] = useState<string>("tile");
  const { components } = useComponentStore((state) => state);
  console.log("this is components", components);
  const componentButton =
    "bg-red-700 text-zinc-100 p-3 rounded mb-2 first:mr-2";

  const NewElement: any = components[current].component;

  useEffect(() => {
    setCategories([...Object.keys(components)]);
  }, [components]);

  return (
    <div className="flex">
      <div className="border border-black">
        {categories.map((category, index) => {
          if (category === current) {
            return (
              <SelectorButton
                name={category}
                setCurrent={setCurrent}
                selected={true}
              />
            );
          }

          return (
            <SelectorButton
              name={category}
              setCurrent={setCurrent}
              selected={false}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center border-black border-t border-r border-b">
        <div className="p-5 min-h-[430px]">
          <NewElement properties={components[current].current} />
        </div>

        <div className="border-black border-t p-3">
          <Link to={`saved/${current}`}>
            <button className={`${componentButton}`}>Saved Components</button>
          </Link>
          <Link to={`${current}/${components[current].saved.length}`}>
            <button className={`${componentButton}`}>New Component</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComponentSelector;
