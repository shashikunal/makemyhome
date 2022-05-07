import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SideBarProvider from "./apis/SidebarContext";
import SidebarMenu from "./components/sidebars/SidebarMenu";
import Navbar from "./pages/navbar/Navbar";
import MainRoutes from "./routes/MainRoute";
import SidebarModal from "./helper/SidebarModal";
import ModalProvider from "./apis/ModalContext";

const App = () => {
  return (
    <Router>
      <ModalProvider>
        <SideBarProvider>
          <nav>
            <Navbar />
          </nav>
          <ToastContainer theme="dark" pauseOnHover />
          <aside>
            <SidebarModal>
              <SidebarMenu />
            </SidebarModal>
          </aside>
          <main>
            <MainRoutes />
          </main>
        </SideBarProvider>
      </ModalProvider>
    </Router>
  );
};

export default App;
