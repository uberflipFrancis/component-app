import React from "react";

import { useComponentStore } from "../../App";

import type { CTAElement } from "../../App";

import CTA from "../Basic/CTA";
import ComponentForm from "../ComponentForm";

const CTAEditor = () => {
  const current = useComponentStore((state) => state.components.cta.current);
  console.log("this is current", current);
  return (
    <div className="flex mt-5">
      <div className="p-10 flex items-center">
        <CTA properties={current as CTAElement}></CTA>
      </div>
      <ComponentForm type="cta" />
    </div>
  );
};

export { CTAEditor };
