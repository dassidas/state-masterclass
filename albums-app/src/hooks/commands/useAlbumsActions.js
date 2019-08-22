import { useDispatch } from 'react-redux';
import { apiRequest } from '../../store/actions/apiRequest';
import { setAlbums } from '../../store/actions/albums';

export function useAlbumsActions() {
    const dispatch = useDispatch();

    const fetchAllAlbums = () => {
        return dispatch(apiRequest({
            path: '/albums',
            onSuccess: onFetchAlbumByUserSuccess,
        }))
    };

    const fetchAlbumByUserId = (userId) => {
        return dispatch(apiRequest({
            path: `/albums?userId=${userId}`,
            onSuccess: onFetchAlbumByUserSuccess,
            onError: onFetchAlbumByUserError,
        }))
    };

    const onFetchAlbumByUserSuccess = (albums) => {
        dispatch(setAlbums({ albums }))
    };

    const onFetchAlbumByUserError = (error) => {
        console.log(error);
    }

    return { fetchAlbumByUserId, fetchAllAlbums }
}
