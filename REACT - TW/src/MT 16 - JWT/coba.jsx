import React, { useState } from "react";
import axios from "axios";
import { jwtDecode }from "jwt-decode";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = () => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        const token = res.data.token; // Token yang ingin disimpan
        if (token) {
          const decodedToken = jwtDecode(token);
          setUserProfile(decodedToken.user);
        }
      })
      .catch((err) => {
        setError(err.message);
        alert("Gagal mengirim data!");
      });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <div className="mb-3">
        <label className="block text-gray-700">Username:</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700">Password:</label>
        <input
          type="password"
          className="w-full p-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Login
      </button>

      {userProfile && (
        <div className="mt-4 p-4 bg-green-100 rounded-md">
          <h2 className="text-lg font-bold">User Profile:</h2>
          <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
            {JSON.stringify(userProfile, null, 2)}
          </pre>
        </div>
      )}

      {error && (
        <div className="mt-4 p-2 bg-red-100 text-red-600 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default Login;
