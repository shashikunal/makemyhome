import { createContext, useState } from "react";
export let SidebarContext = createContext();

let SideBarProvider = ({ children }) => {
  let [toggle, setToggle] = useState(false);

  return (
    <SidebarContext.Provider value={{ toggle, setToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SideBarProvider;
