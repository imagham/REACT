import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Home = () => <h1 className="text-3xl font-bold text-center mt-20 py-3 px-5 bg-blue-400">Beranda</h1>;
const About = () => <h1 className="text-3xl font-bold text-center mt-20 py-3 px-5 bg-blue-400">Tentang Kami</h1>;
const Contact = () => <h1 className="text-3xl font-bold text-center mt-20 py-3 px-5 bg-blue-400">Kontak</h1>;
const NotFound = () => <h1  className="text-3xl font-bold text-center mt-20 py-3 px-5 bg-red-400" >404 - Halaman Tidak Ditemukan</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
