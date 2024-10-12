import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Login from "./components/Login";
import "./index.css";
import "./utils.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./Layouts.jsx";
import CardContainer from "./components/CardContainer.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,

    children: [
      {
        path: "/",
        element: <CardContainer />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
