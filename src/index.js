import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SignUp from "./client/routes/SignUp";
import SignIn from "./client/routes/SignIn";
import ErrorPage from "./ErrorPage";
import SuccessSignUp from "./client/routes/SuccessSignUp"
import App from "./client/routes/App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signup" replace={true} />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todo",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/succeedsignup",
    element: <SuccessSignUp />,
    errorElement: <ErrorPage />,
  }
]);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
