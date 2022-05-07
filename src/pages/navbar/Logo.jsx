import React from "react";
import { FaHome } from "react-icons/fa";
import Styles from "./navbar.module.css";
const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <a href="#">
        <span style={{ position: "relative" }}>
          <FaHome />
        </span>
        <span>MakeMyHome</span>
      </a>
    </div>
  );
};

export default Logo;
