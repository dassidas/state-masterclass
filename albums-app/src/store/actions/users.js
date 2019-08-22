export const FETCH_USERS = 'FETCH_USERS';
export const SET_USERS = 'SET_USERS';

export function fetchAllUsers() {
    return {
        type: FETCH_USERS,
    }
}

export function setUsers({ users }) {
    return {
        type: SET_USERS,
        payload: users,
    }
}
