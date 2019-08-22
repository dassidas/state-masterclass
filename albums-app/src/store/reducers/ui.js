import { TOGGLE_LOADER } from '../actions/ui';

const initialUi = {
    loading: false,
}

export function uiReducer(ui = initialUi, action) {
    if (action.type === TOGGLE_LOADER) {
        return {
            ...ui,
            loading: action.payload,
        }
    }

    return ui
}
