import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/pagenotfound/PageNotFound";

let MainRoutes = () => {
  let customRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return customRoutes;
};

export default MainRoutes;
