import React, { useContext } from "react";
import Styles from "./navbar.module.css";
import { FaHeart, FaBars } from "react-icons/fa";
import { SidebarContext } from "../../apis/SidebarContext";

const Menu = () => {
  let { setToggle } = useContext(SidebarContext);
  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li>
          <a href="#">Download app</a>
        </li>
        <li>
          <a href="#">
            List property <span>free</span>
          </a>
        </li>
        <li>
          <a href="#">
            saved{" "}
            <span>
              <FaHeart />
            </span>
          </a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#" className={Styles.dashboardMenu}>
            Dashboard
          </a>
        </li>
        <li>
          <button
            href="#"
            onClick={() => setToggle(true)}
            className="toggleBtn"
          >
            <FaBars />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
