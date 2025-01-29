import { Product, DetailProducts } from "./product";
import Login from "./login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/product",
        element: <Product />,
    },
    {
        path: "/product/:id",
        element: <DetailProducts />,
    },
]); 

function App() {
  return <RouterProvider router={router} />;
}

export default App;
