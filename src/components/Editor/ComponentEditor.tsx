import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useComponentStore } from "../../App";
import ComponentForm from "../ComponentForm";

import { Link } from "react-router-dom";

const ComponentEditor = () => {
  const { id, type = "" } = useParams();
  const components = useComponentStore((state) => state.components);
  const current = useComponentStore((state) => state.components[type].current);
  const saved = useComponentStore((state) => state.components[type].saved);
  const addSaved = useComponentStore((state) => state.addSaved);

  const [properties, setProperties] = useState(current);

  const componentButton = "bg-red-700 text-zinc-100 p-3 rounded mb-2";

  useEffect(() => {
    if (Number(id) < saved.length) {
      setProperties(saved[Number(id)]);
    } else if (Number(id) === saved.length) {
      if (type) {
        addSaved(type, current, Number(id));
      }
    }
  }, [id, saved, addSaved, current, type]);

  let NewElement: any = components[type].component;

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold p-5 text-center">
        Component Editor - <span className="capitalize">{type}</span>
      </h1>
      <Link className="pl-5" to={`/component/saved/${type}`}>
        <button className={componentButton}>Back to Saved</button>
      </Link>
      <div className="flex mt-5">
        <div className="pl-5 pr-5 flex items-center">
          <NewElement properties={properties}></NewElement>
        </div>
        <ComponentForm
          type={type}
          cIndex={Number(id)}
          properties={properties}
        />
      </div>
    </div>
  );
};

export { ComponentEditor };
