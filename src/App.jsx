import React from "react";
import * as Web from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Web.Error />,
    element: <Web.HomeLayout />,
    children: [
      { index: true, element: <Web.Landing /> },
      { path: "about", element: <Web.About /> },
      { path: "products", element: <Web.Products /> },
      { path: "products/:id", element: <Web.SingleProduct /> },
      { path: "cart", element: <Web.Cart /> },
      { path: "checkout", element: <Web.Checkout /> },
      { path: "orders", element: <Web.Orders /> },
    ],
  },
  { path: "/login", element: <Web.Login /> },
  { path: "/register", element: <Web.Register /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
