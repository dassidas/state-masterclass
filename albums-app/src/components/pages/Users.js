import React, { useEffect } from 'react';
import { useUsersActions } from '../../hooks/commands/useUsersActions';
import { useAllUsers } from '../../hooks/queries/useUsersQueries';

const Users = () => {
    const { fetchAllUsers } = useUsersActions();
    const users = useAllUsers();

    useEffect(() => {
        fetchAllUsers();
    }, [fetchAllUsers]);

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
