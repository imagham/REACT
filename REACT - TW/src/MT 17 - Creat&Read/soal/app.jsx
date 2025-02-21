import React, { useState } from "react";
import Header from "./Header";
import CreateUser from "./createuser";
import ReadUsers from "./readuser";


const App = () => {
  const [userName, setUserName] = useState("John Doe"); // Contoh nama pengguna
  const [users, setUsers] = useState([]); // State untuk daftar pengguna

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header userName={userName} />
      <div className="container mx-auto p-4">
        <CreateUser addUser={addUser} />
        <ReadUsers users={users} />
      </div>
    </div>
  );
};

export default App;
