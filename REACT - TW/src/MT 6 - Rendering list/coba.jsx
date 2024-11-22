export default function Map({}) {
    const user = [
        { id: 1, name: "Fadgham" },
        { id: 2, name: "Khairul" },
        { id: 3, name: "Hafizh" },
    ];

    // Filter nama yang berakhir dengan 'h'
    const filteredUsers = user.filter((user) => user.name.includes("g"));

    return (
        <ul>
            {/* Menampilkan semua pengguna */}
            {user.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}

            {/* Menampilkan nama hasil filter */}
            {filteredUsers.map((user) => (
                <li key={user.id}>Filtered: {user.name}</li>
            ))}
        </ul>
    );
}
