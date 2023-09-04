import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/portfolio-jc/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
