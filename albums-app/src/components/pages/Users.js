import React, { useEffect } from 'react';
import { useUsersActions } from '../../hooks/commands/useUsersActions';

const Users = () => {
    const { fetchAllUsers } = useUsersActions();

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
        </div>
    );
}

export default Users;
