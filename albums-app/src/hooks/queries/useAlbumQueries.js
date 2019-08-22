import { useSelector } from 'react-redux';

export function useAllAlbums() {
    return useSelector(state => state.albums);
}

export function useAlbums(userId) {
    return useSelector(state => state.albums);
}
