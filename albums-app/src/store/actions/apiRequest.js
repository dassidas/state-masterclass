const API_REQUEST = 'API_REQUEST';

export function apiRequest({
    method = 'GET',
    path,
    data = {},
    onSuccess,
    onError,
    trigger,
}) {
    return {
        type: API_REQUEST,
        payload: data,
        meta: { method, path, onSuccess, onError, trigger },
    }
}
