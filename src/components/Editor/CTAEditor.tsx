import React, { useEffect, useState } from "react";

import { useComponentStore } from "../../App";

import type { CTAElement } from "../../App";

import CTA from "../Basic/CTA";
import ComponentForm from "../ComponentForm";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const CTAEditor = () => {
  const current = useComponentStore((state) => state.components.cta.current);
  const saved = useComponentStore((state) => state.components.cta.saved);
  const { id } = useParams();
  const [properties, setProperties] = useState(current);
  const componentButton = "bg-red-700 text-zinc-100 p-3 rounded mb-2";

  const addSaved = useComponentStore((state) => state.addSaved);
  useEffect(() => {
    console.log("this is saved", saved.length);
    if (Number(id) < saved.length) {
      setProperties(saved[Number(id)]);
    } else if (Number(id) === saved.length) {
      addSaved("cta", current, Number(id));
    }
  }, [id, saved, addSaved, current]);

  return (
    <div className="flex mt-5">
      <Link to="/component/saved/cta">
        <button className={componentButton}>Back to Saved</button>
      </Link>
      <div className="p-10 flex items-center">
        <CTA properties={properties as CTAElement}></CTA>
      </div>
      <ComponentForm type="cta" cIndex={Number(id)} properties={properties} />
    </div>
  );
};

export { CTAEditor };
