import ReactDOM from "react-dom";
import { useContext } from "react";
import Styles from "./modal.module.css";
import { FaTimes } from "react-icons/fa";
import { ModalContext } from "./../apis/ModalContext";

const Modal = props => {
  let { show, setShow } = useContext(ModalContext);
  return ReactDOM.createPortal(
    props.show === false ? (
      ""
    ) : (
      <div onClick={e => e.stopPropagation()} id={Styles.modalBlock}>
        <div className={Styles.modalContainer} style={{ position: "relative" }}>
          <span className={Styles.closeIcon} onClick={() => setShow(false)}>
            <FaTimes />
          </span>
          {props.children}
        </div>
      </div>
    ),

    document.getElementById("modal")
  );
};

export default Modal;
