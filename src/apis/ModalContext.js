import { createContext, useState } from "react";
export let ModalContext = createContext();

const ModalProvider = ({ children }) => {
  let [show, setShow] = useState(false);
  return (
    <ModalContext.Provider value={{ show, setShow }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
