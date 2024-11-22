export const users = [
  { id: 1, name: "Alex", age: 30 },
  { id: 2, name: "Belva", age: 22 },
  { id: 3, name: "Chris", age: 27 },
  { id: 4, name: "Diana", age: 24 },
  { id: 5, name: "Evelyn", age: 29 },
];

export default function DataUsers() {
    return (
        <ul  className="text-center py-10 bg-slate-200  mx-auto mt-20 w-1/4 rounded-lg shadow-2xl text-[15px] font-semibold">
          <p className="text-[30px] font-bold text-white rounded-lg  py-2 mb-10 mx-10 bg-slate-400">
            Data Users
          </p>
          <p className="text-[20px] font-bold mb-3 py-2 ">
            detail
          </p>
            {users.map((user) => (
                <li key={user.id}> 
                 {user.id} {user.name} {user.age}</li>
            ))}
            <br />
            {users.filter((user) => user.age > 25).map((user) => (
                <li key={user.id}>{user.name} </li>
            ))}
            <br />
            {users.filter((user) => user.name.includes("e")).map((user) => (
                <li key={user.id}>{user.name} </li>
            ))}
        </ul>
        
    );
} 
