import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { ButtonElement, useComponentStore } from "../../App";
import Button from "../Basic/Button";
import ComponentForm from "../ComponentForm";

import { Link } from "react-router-dom";

const ButtonEditor = () => {
  const current = useComponentStore((state) => state.components.button.current);
  const saved = useComponentStore((state) => state.components.button.saved);
  const addSaved = useComponentStore((state) => state.addSaved);
  const { id } = useParams();

  const [properties, setProperties] = useState(current);

  const componentButton = "bg-red-700 text-zinc-100 p-3 rounded mb-2";

  useEffect(() => {
    if (Number(id) < saved.length) {
      setProperties(saved[Number(id)]);
    } else if (Number(id) === saved.length) {
      addSaved("button", current, Number(id));
    }
  }, [id, saved, addSaved, current]);

  return (
    <div>
      <div className="flex mt-5">
        <Link to="/component/saved/button">
          <button className={componentButton}>Back to Saved</button>
        </Link>

        <div className="p-10 flex items-center">
          <Button properties={properties as ButtonElement}></Button>
        </div>
        <ComponentForm
          type="button"
          cIndex={Number(id)}
          properties={properties}
        />
      </div>
    </div>
  );
};

export { ButtonEditor };
