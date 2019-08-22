import { API_REQUEST } from '../actions/apiRequest';
import { setLoading } from '../actions/ui';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
    if (action.type === API_REQUEST) {
        const { method, path, onSuccess, onError } = action.meta;

        setLoading({ loading: true });

        fetch(BASE_URL + path, { method })
            .then( response => response.json() )
            .then( response => {
                setLoading({ loading: false });
                onSuccess(response);
            })
            .catch(error => onError(error) );
    } else {
        next(action);
    }
}
