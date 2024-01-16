import React from "react";
import styled from "styled-components";
import { createContext, useContext } from "react";
import { useState } from "react";

const ToggleContext = createContext("");

export const ToggleItemsButton = ({ children }) => {
  const [despliegueDropDown, setDespliegueDropDown] = useState("");

  return (
    <ToggleContext.Provider
      value={{ setDespliegueDropDown, despliegueDropDown }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export const TriggerOptions = ({ title, ButtonNotOpened, ButtonOpened }) => {
  const { setDespliegueDropDown, despliegueDropDown } =
    useContext(ToggleContext);

  const onActivateMenu = () => {
    setDespliegueDropDown((pastValue) => !pastValue);
  };
  return (
    <div className="flex items-center mb-4 pl-2 justify-between w-[200px]">
      <h6 className="font-bold text-gray-500 text-md">{title}</h6>
      <button onClick={onActivateMenu}>
        {despliegueDropDown ? <ButtonNotOpened /> : <ButtonOpened />}
      </button>
    </div>
  );
};

const ShowOptions = ({ children }) => {
  const { despliegueDropDown } = useContext(ToggleContext);

  return despliegueDropDown ? children : <></>;
};

ToggleItemsButton.ShowOptions = ShowOptions;
ToggleItemsButton.TriggerOptions = TriggerOptions;
