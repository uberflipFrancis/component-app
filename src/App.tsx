import React, { ReactNode } from "react";
import { isStringLiteral } from "typescript";
import ComponentForm from "./components/ComponentForm";

import { ButtonEditor } from "./components/Editor/ButtonEditor";
import { CTAEditor } from "./components/Editor/CTAEditor";
import { TileEditor } from "./components/Editor/TileEditor";
import { ComponentEditor } from "./components/Editor/ComponentEditor";

import SavedComponents from "./components/SavedComponents";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import create from "zustand";
import Button from "./components/Basic/Button";
import CTA from "./components/Basic/CTA";
import Tile from "./components/Basic/Tile";
import Home from "./components/Home";

type ComponentFunction = () => JSX.Element;

const useComponentStore = create<State>()((set) => ({
  components: {
    tile: {
      component: Tile as ComponentFunction,
      fields: {
        name: {
          input: "text",
          default: "new tile",
        },
        tileBackground: {
          input: "color",
          default: "#FF0000",
        },
        descriptionBackground: {
          input: "color",
          default: "#ffffff",
        },
        tileTitle: {
          input: "text",
          default: "tile title",
        },
        titleSize: {
          input: "number",
          default: 14,
        },
        titleColor: {
          input: "color",
          default: "#ffffff",
        },
        tileDescription: {
          input: "text",
          default: "tile description",
        },
        descriptionSize: {
          input: "number",
          default: 12,
        },
        descriptionColor: {
          input: "color",
          default: "#ffffff",
        },
      },
      current: {
        name: "test",
        tileBackground: "#FF0000",
        descriptionBackground: "#000000",
        tileTitle: "testing",
        titleSize: 18,
        titleColor: "#ffffff",
        tileDescription: "tile description",
        descriptionSize: 12,
        descriptionColor: "#ffffff",
      },
      saved: [
        {
          name: "tileTest1",
          tileBackground: "#eda01a",
          descriptionBackground: "#000000",
          tileTitle: "tileTest1",
          titleSize: 22,
          titleColor: "#ffffff",
          tileDescription: "tile test description",
          descriptionSize: 14,
          descriptionColor: "#ffffff",
        },
        {
          name: "tileTest2",
          tileBackground: "#bfed1a",
          descriptionBackground: "#000",
          tileTitle: "tileTest2",
          titleSize: 18,
          titleColor: "#ffffff",
          tileDescription: "tile test 2 description",
          descriptionColor: "#ffffff",
        },
      ],
    },
    cta: {
      component: CTA as ComponentFunction,
      fields: {
        name: {
          input: "text",
          default: "new element",
        },
        tileBackground: {
          input: "color",
          default: "#FF0000",
        },
        buttonBackground: {
          input: "color",
          default: "#000",
        },
      },
      current: {
        name: "testing",
        tileBackground: "#FF0000",
        buttonBackground: "#000",
      },
      saved: [
        {
          name: "cta test 1",
          tileBackground: "#4287f5",
          buttonBackground: "#92b6f0",
        },
        {
          name: "cta test 2",
          tileBackground: "#8859d9",
          buttonBackground: "#9f85cc",
        },
      ],
    },
    button: {
      component: Button as ComponentFunction,
      fields: {
        name: {
          input: "text",
          default: "new element",
        },
        backgroundColor: {
          input: "color",
          default: "#ffffff",
        },
        textColor: {
          input: "color",
          default: "#ffffff",
        },
        textSize: {
          input: "number",
          default: 12,
        },
        borderRadius: {
          input: "number",
          default: 0,
        },
      },
      current: {
        name: "testing",
        backgroundColor: "#000000",
        textColor: "#000000",
        textSize: 12,
        borderRadius: 0,
      } as ButtonElement,
      saved: [
        {
          name: "button test 1",
          backgroundColor: "#fcc81c",
          textColor: "#000000",
          textSize: 14,
          borderRadius: 0,
        },
        {
          name: "button test 2",
          backgroundColor: "#f27024",
          textColor: "#000000",
          textSize: 12,
          borderRadius: 10,
        },
      ],
    },
  },
  setCurrent: (type, element) => {
    console.log("this is element", type);
    set((state) => {
      return {
        ...state,
        components: {
          ...state.components,
          [type]: {
            ...state.components[type],
            current: element,
          },
        },
      };
    });
  },
  setSaved: (type, element, index) => {
    set((state) => {
      return {
        ...state,
        components: {
          ...state.components,
          [type]: {
            ...state.components[type],
            saved: state.components[type].saved.map((sElement, eIndex) => {
              if (eIndex !== index) {
                return sElement;
              } else {
                return element;
              }
            }),
          },
        },
      };
    });
  },
  addSaved: (type, element, id) => {
    set((state) => {
      if (state.components[type].saved.length === id) {
        return {
          ...state,
          components: {
            ...state.components,
            [type]: {
              ...state.components[type],
              saved: [...state.components[type].saved, element],
            },
          },
        };
      } else {
        return state;
      }
    });
  },
}));

interface Field {
  input: string;
  default: string | number;
}

interface Property {
  type: string;
  value: string | number;
}

interface Component {
  fields: { [key: string]: Field };
  component: () => JSX.Element;
  current: Element;
  saved: Element[];
}

interface State {
  components: {
    [key: string]: Component;
  };
  setCurrent: (component: string, element: Element) => void;
  setSaved: (component: string, element: Element, index: number) => void;
  addSaved: (type: string, element: Element, index: number) => void;
}

interface Element {
  name: string;
  [key: string]: any;
}

interface ButtonElement extends Element {
  backgroundColor: string;
  textColor: string;
  textSize: number;
  borderRadius: number;
}

interface CTAElement extends Element {
  tileBackground: string;
  buttonBackground: string;
}

interface TileElement extends Element {
  tileBackground: string;
  descriptionBackground: string;
  tileTitle: string;
  titleSize: number;
  titleColor: string;
  tileDescription: string;
  descriptionSize: number;
  descriptionColor: string;
}

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="component" element={<Home />}></Route>
          <Route
            path="component/saved/:type"
            element={<SavedComponents />}
          ></Route>
          <Route path="component/button/:id" element={<ButtonEditor />}></Route>
          <Route path="component/cta/:id" element={<CTAEditor />}></Route>
          <Route path="component/tile/:id" element={<TileEditor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export type {
  Property,
  Field,
  ButtonElement,
  CTAElement,
  TileElement,
  Element,
};
export { useComponentStore };

export default App;
