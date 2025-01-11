import { useState } from "react";

const SimpleNameList = () => {
  const [name, setName] = useState(["Fadgham", "Khairul"]);

  return (
    <div>
      <h2>Daftar Nama:</h2>
      <ul>
        {name.map((nama, index) => (
          <li key={index}>{nama}</li>
        ))}
      </ul>
      <button
        onClick={() => setName([...name, "Hafizh"])}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Tambah Nama
      </button>
    </div>
  );
};

// ----------------------

const UpdateStateWithMap = () => {
  const [user, setUser] = useState([
    { id: 1, name: "Fadgham", active: false },
    { id: 2, name: "Khairul", active: false },
    { id: 3, name: "Hafizh", active: false },
  ]);
};

const UserList = () => {
  const [user, setUser] = useState([
    { id: 1, name: "Fadgham", active: true },
    { id: 2, name: "Khairul", active: false },
  ]);

  const toggleActive = (id) => {
    setUser((prevUser) =>
      prevUser.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {user.map((user) => (
          <li key={user.id} className="mb-2">
            <span>
              {user.name} - {user.active ? "aktif" : "tidak aktif"}
            </span>
            <button
              onClick={() => toggleActive(user.id)}
              className="px-4 py-2 ml-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
