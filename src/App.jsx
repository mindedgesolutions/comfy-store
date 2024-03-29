import React from "react";
import * as Web from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorElement } from "./components";

// Loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { store } from "./store";

// Actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Web.Error />,
    element: <Web.HomeLayout />,
    children: [
      {
        index: true,
        element: <Web.Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      { path: "about", element: <Web.About /> },
      { path: "products", element: <Web.Products />, loader: productsLoader },
      {
        path: "products/:id",
        element: <Web.SingleProduct />,
        loader: singleProductLoader,
      },
      { path: "cart", element: <Web.Cart /> },
      { path: "checkout", element: <Web.Checkout /> },
      { path: "orders", element: <Web.Orders /> },
    ],
  },
  { path: "/login", element: <Web.Login />, action: loginAction(store) },
  { path: "/register", element: <Web.Register />, action: registerAction },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
