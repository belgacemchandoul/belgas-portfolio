import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FootyQuizMaster from "./pages/FootyQuizMaster";
import HireHaven from "./pages/HireHaven";
import Emotiscan from "./pages/Emotiscan";
import YouSafe from "./pages/YouSafe";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects/footyquizmaster",
    element: <FootyQuizMaster />,
  },
  {
    path: "/projects/hirehaven",
    element: <HireHaven />,
  },
  {
    path: "/projects/emotiscan",
    element: <Emotiscan />,
  },
  {
    path: "/projects/yousafe",
    element: <YouSafe />,
  },
]);

export default router;
