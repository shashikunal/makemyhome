import React, { useContext } from "react";
import { SidebarContext } from "./../../apis/SidebarContext";
import { FaTimes } from "react-icons/fa";
import HeaderMenu from "./HeaderMenu";
const SidebarMenu = () => {
  let { toggle, setToggle } = useContext(SidebarContext);

  let ShowSidebarMenu = () => {
    return (
      <nav
        className={`${toggle === true ? "open" : "close"} sidebar`}
        onClick={e => e.stopPropagation()}
      >
        <div className="closeIcon" onClick={() => setToggle(!toggle)}>
          <FaTimes />
          <HeaderMenu />
        </div>
      </nav>
    );
  };
  return <ShowSidebarMenu />;
};

export default SidebarMenu;
