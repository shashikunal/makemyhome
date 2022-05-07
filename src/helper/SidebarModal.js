import ReactDOM from "react-dom";

const SidebarModal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("sidebarModal")
  );
};

export default SidebarModal;
