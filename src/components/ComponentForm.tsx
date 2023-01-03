import React, { FormEvent, useState, useEffect } from "react";
import type { Field } from "../App";

import { useComponentStore } from "../App";

interface FormState {
  name: string;
  [key: string]: string | number;
}

interface FormProps {
  type: string;
}

const ComponentForm = ({ type }: FormProps): JSX.Element => {
  const [formState, setFormState] = useState<FormState>({} as FormState);
  const [formFields, setFormFields] = useState<JSX.Element[]>([]);
  const { fields } = useComponentStore((state) => state.components[type]);

  const setCurrent = useComponentStore((state) => state.setCurrent);

  //set up default state of form
  useEffect(() => {
    let defaultState: FormState = { name: "default" };
    (Object.keys(fields) as string[]).forEach((property) => {
      defaultState[property] = fields[property].default;
    });
    setFormState(defaultState);
  }, [fields]);

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
    console.log("this is the form state", formState);
    setCurrent(type, formState);
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