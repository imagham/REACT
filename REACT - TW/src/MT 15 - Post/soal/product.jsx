import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [jumlah, setJumlah] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setJumlah(response.data.map(() => 0)); // Inisialisasi jumlah sesuai jumlah produk
        
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const updateJumlah = (index, value) => {
    setJumlah((prevJumlah) =>
      prevJumlah.map((jml, i) => (i === index ? Math.max(jml + value, 0) : jml))
    );
  };

  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-24 px-6 sm:px-12 relative">
        <Link to="/" className="absolute top-4 right-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 py-3 px-5">
          logOut
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Temukan Produk Terbaik Anda
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Nikmati belanja mudah dan nyaman dengan pilihan produk terbaik
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
          Mulai Belanja
        </button>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-10 bg-gradient-to-r from-gray-100 to-white">
        {products.map((product, index) => (
          <div key={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-t-lg" />
            </Link>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
              <p className="text-lg font-semibold text-gray-600">Rp {product.price}</p>
              <div className="flex items-center mt-4 mb-3">
                <button
                  onClick={() => updateJumlah(index, -1)}
                  className="py-2 px-4 bg-red-500 text-white rounded-lg mr-2 hover:bg-red-600 transition duration-300"
                  disabled={jumlah[index] === 0}
                >
                  Kurang
                </button>
                <p className="text-xl font-semibold">{jumlah[index]}</p>
                <button
                  onClick={() => updateJumlah(index, 1)}
                  className="py-2 px-4 bg-green-500 text-white rounded-lg ml-2 hover:bg-green-600 transition duration-300"
                >
                  Tambah
                </button>
              </div>
              <p className="font-semibold text-lg text-green-600">
                Total Harga: Rp {jumlah[index] * product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const DetailProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center text-lg font-semibold">Produk tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-300"
      >
        Back
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600">Harga: Rp {product.price}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
