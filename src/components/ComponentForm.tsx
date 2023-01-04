import React, { FormEvent, useState, useEffect } from "react";
import type { Element } from "../App";

import { useComponentStore } from "../App";

interface FormState {
  name: string;
  [key: string]: string | number;
}

interface FormProps {
  type: string;
  cIndex: number;
  properties: Element;
}

const ComponentForm = ({
  type,
  cIndex,
  properties,
}: FormProps): JSX.Element => {
  const [formState, setFormState] = useState<FormState>({} as FormState);
  const [formFields, setFormFields] = useState<JSX.Element[]>([]);
  const { fields } = useComponentStore((state) => state.components[type]);

  console.log("this is properties", properties);

  const setSaved = useComponentStore((state) => state.setSaved);

  //set up default state of form
  useEffect(() => {
    let defaultState: FormState = { name: "default" };
    (Object.keys(fields) as string[]).forEach((property) => {
      defaultState[property] = properties[property];
    });
    setFormState(defaultState);
  }, [fields, properties]);

  useEffect(() => {
    const handleChange = (fieldName: string, fieldValue: string | number) => {
      setFormState({
        ...formState,
        [fieldName]: fieldValue,
      });
    };

    let newFormFields = Object.keys(formState).map((property, index) => {
      return (
        <label className="flex mb-3" key={index}>
          <span>{property}</span>
          <input
            className="ml-auto w-50 border"
            key={index}
            name={property}
            type={fields[property].input}
            value={formState[property]}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </label>
      );
    });

    setFormFields(newFormFields);
  }, [fields, formState]);

  let handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSaved(type, formState, cIndex);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col p-5 border-solid border border-black w-80"
      >
        {formFields}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComponentForm;
