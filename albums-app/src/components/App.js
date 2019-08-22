import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Albums from './pages/Albums';
import Users from './pages/Users';
import { useAlbumsActions } from '../hooks/commands/useAlbumsActions';
import { useUsersActions } from '../hooks/commands/useUsersActions';
import { useLoading } from '../hooks/queries/useUiQueries';

function App() {
    const { fetchAllAlbums } = useAlbumsActions();
    const { fetchAllUsers } = useUsersActions();

    useEffect(() => {
        fetchAllAlbums();
        fetchAllUsers();
    }, [fetchAllAlbums, fetchAllUsers])

    const loading = useLoading();

    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="users">Users</Link></li>
                    <li><Link to="albums">Albums</Link></li>
                </ul>
            </div>
            <hr />

            <h3>{loading ? 'Loading' : 'Ready!'}</h3>

            <Route path="/" exact component={() => <h1>Home</h1>} />
            <Route path="/users" component={Users} />
            <Route path="/albums" component={Albums} />
        </Router>
    )
}

export default App;
