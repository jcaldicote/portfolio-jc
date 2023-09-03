import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
