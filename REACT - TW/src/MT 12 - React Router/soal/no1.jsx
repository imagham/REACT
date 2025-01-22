import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";

const HomePages = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-400">
    <h1 className="text-5xl font-extrabold text-white animate-fade-in">
      Ini adalah halaman utama
    </h1>
    <Link
      to="/about"
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition mt-4 shadow-xl"
    > Tentang Kami</Link>
    <p className="mt-4 text-xl text-white opacity-80 animate-slide-up">
      Selamat datang di halaman utama kami!
    </p>
  </div>
);

const AboutPages = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-400 ">
    <h1 className="text-5xl font-extrabold text-white animate-fade-in">
      Ini adalah halaman about
    </h1>
    <Link
      to="/"
      className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition  mt-4 shadow-xl"
    >
      Halaman Utama
    </Link>
    
    <p className="mt-4 text-xl text-white opacity-80 animate-slide-up">
      Terima kasih telah mengunjungi halaman tentang kami!
    </p>
  </div>
);
const Eror=()=>(
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-600 to-orange-500">
    <h1 className="text-5xl font-extrabold text-white animate-fade-in">
      Halaman tidak ditemukan
    </h1>
    <p className="mt-4 text-xl text-white opacity-80 animate-slide-up">
      Halaman yang Anda cari tidak ditemukan.
    </p>
  </div>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/about",
    element: <AboutPages />,
  },
  {
    path: "*",
    element: <Eror />,
  },
]);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
