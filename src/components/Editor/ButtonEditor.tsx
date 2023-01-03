import React from "react";

import { ButtonElement, useComponentStore } from "../../App";
import Button from "../Basic/Button";
import ComponentForm from "../ComponentForm";

const ButtonEditor = () => {
  const current = useComponentStore((state) => state.components.button.current);
  console.log("this is current", current);
  return (
    <div className="flex mt-5">
      <div className="p-10 flex items-center">
        <Button properties={current as ButtonElement}></Button>
      </div>
      <ComponentForm type="button" />
    </div>
  );
};

export { ButtonEditor };
