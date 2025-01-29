import { useState } from "react";
import axios from "axios";

const SimpleUserForm = () => {
  const [name, setName] = useState(""); // State untuk menyimpan nama pengguna
  const [email, setEmail] = useState(""); // State untuk menyimpan email pengguna
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan pengiriman data ke server menggunakan Axios
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: name,
        email: email,
      })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Form Pengguna
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">
              Nama Pengguna
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm transition"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
              Email Pengguna
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm transition"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Submit
          </button>
        </form>

        {responseData && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg shadow-md">
            <p className="font-semibold">Data Terkirim!</p>
            <p>Nama: {responseData.name}</p>
            <p>Email: {responseData.email}</p>
          </div>
        )}

        {error && (
          <p className="mt-4 text-red-500 text-center bg-red-100 p-3 rounded-lg shadow-md">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default SimpleUserForm;
