import { useSelector } from 'react-redux';

export function useAllUsers(state) {
    return useSelector(state => state.users);
}
