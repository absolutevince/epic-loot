import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./page/home/Home.jsx";
import Shop from "./page/shop/Shop.jsx";
import Wishlist from "./page/wishlist/Wishlist.jsx";
import Product from "./page/product/Product.jsx";
import ErrorPage from "./page/errorPage/ErrorPage.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/product", element: <Product /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
