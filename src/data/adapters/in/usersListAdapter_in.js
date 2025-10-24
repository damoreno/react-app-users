const usersListAdapter = (totalUsers, users) => {
    // Asumimos que la respuesta del API tiene la forma { total: number, usuarios: [...] }
    // y lo adaptamos a { totalUsers: number, users: [...] }
    return {
        totalUsers: totalUsers || 0,
        users: users || []
    };
};

export default usersListAdapter;
