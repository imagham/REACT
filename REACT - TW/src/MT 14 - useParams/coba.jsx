import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// Komponen Home
function Home() {
  const produk = [
    { id: 1, nama: "Produk A" },
    { id: 2, nama: "Produk B" },
    { id: 3, nama: "Produk C" },
  ];

  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {produk.map((item) => (
          <li key={item.id}>
            <Link to={`/produk/${item.id}`}>{item.nama}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Komponen DetailProduk
function DetailProduk() {
  const { id } = useParams(); // Ambil parameter "id" dari URL

  return (
    <div>
      <h1>Detail Produk</h1>
      <p>ID Produk: {id}</p>
      <Link to="/">Kembali ke Daftar Produk</Link>
    </div>
  );
}

// Komponen Utama
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk/:id" element={<DetailProduk />} />
      </Routes>
    </Router>
  );
}

export default App;
