import React, { useContext } from "react";
import UserIcon from "./UserIcon.webp";
import Styles from "./sidebar.module.css";
import Modal from "./../../helper/Modal";

import { ModalContext } from "../../apis/ModalContext";
import AuthBlock from "../auth/AuthBlock";

const HeaderMenu = () => {
  const { show, setShow } = useContext(ModalContext);
  return (
    <header>
      <main className={Styles.sidebarHeaderBlock}>
        <div className={Styles.userIcon}>
          <img src={UserIcon} alt="userIcon" />
        </div>
        <div className={Styles.contentUser}>
          <h3>Hello</h3>
          <p>Easy Contact with sellers</p>
          <p>Personalized experience</p>
        </div>

        <div className={Styles.authMenu}>
          <button
            onClick={e => {
              e.stopPropagation();
              setShow(true);
            }}
          >
            Login
          </button>
          <Modal onClose={() => setShow(false)} show={show}>
            <AuthBlock />
          </Modal>
        </div>
      </main>
    </header>
  );
};

export default HeaderMenu;
