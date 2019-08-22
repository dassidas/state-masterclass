import { useDispatch } from 'react-redux';
import { apiRequest } from '../../store/actions/apiRequest';
import { setUsers } from '../../store/actions/setUsers';

export function useUsersActions() {
    const dispatch = useDispatch();

    const fetchAllUsers = () => {
        dispatch(apiRequest({
            path: '/users',
            method: 'GET',
            onSuccess: onFetchUsersSuccess,
            trigger: 'Fetch all users [ useUsersActions ]'
        }))
    };

    const onFetchUsersSuccess = (users) => {
        dispatch(setUsers({ users }));
    };

    return { fetchAllUsers }
}
