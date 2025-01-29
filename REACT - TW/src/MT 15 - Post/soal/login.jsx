import { useState } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reasponse, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const navigate= useNavigate();

  const handleName = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://fakestoreapi.com/auth/login", {
      username: username,
      password: password,
    })
      .then((res) => {
        setResponse(event.target.value);
        console.log(res.data.token);   
        const token = res.data.token;  // Token yang ingin disimpan
        localStorage.setItem("authToken", token);
        if (token) {
            navigate("/product");
        }
      })
      .catch((err) => {
        setError(err.message);
        alert("Gagal mengirim data!");
        <P>{err.message}</P>
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 w-full max-w-md rounded-2xl shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
          Login
        </h1>

        <div className="space-y-5">
          <div>
            <input
              type="text"
              value={username}
              onChange={handleName}
              placeholder="Username"
              className="w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              className="w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white text-lg font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all"
          >
            Login
          </button>
          <br />

          {error && <p className="text-red-500">Silahkan cek kembali username dan password</p>}
        </div>
        <div className="mt-4">
          <p className="font-medium">username: mor_2314</p>
          <p className="font-medium">password: 83r5^_</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
