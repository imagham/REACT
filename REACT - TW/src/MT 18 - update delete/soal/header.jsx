import React from 'react';

const Header = ({ userName }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl">User Management</h1>
      <div className="flex items-center space-x-4">
        <span>{userName}</span>
        <button className="p-2 bg-red-500 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Header;