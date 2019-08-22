import { API_REQUEST } from '../actions/apiRequest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
    if (action.type === API_REQUEST) {
        const { method, path, onSuccess, onError } = action.meta;

        fetch(BASE_URL + path, { method })
            .then( response => response.json() )
            .then(onSuccess)
            .catch(onError);
    } else {
        next(action);
    }
}
