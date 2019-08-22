export const TOGGLE_LOADER = 'TOGGLE_LOADER';

export function setLoading({ loading = false }) {
    return {
        type: TOGGLE_LOADER,
        payload: loading,
    }
}
