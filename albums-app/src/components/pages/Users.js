import React from 'react';
import { useAllUsers } from '../../hooks/queries/useUsersQueries';

const Users = () => {
    const users = useAllUsers();

    return (
        <div>
            <h1>Users</h1>
            <pre>
                {JSON.stringify(users,1,1)}
            </pre>
        </div>
    )
}

export default Users;
