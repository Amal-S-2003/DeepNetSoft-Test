import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();
export const MenuContextProvider = (props) => {
  const [selectedMenu, setSelectedMenu] = useState("Food");


  const value = { selectedMenu, setSelectedMenu };
  return (
    <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
  );
}