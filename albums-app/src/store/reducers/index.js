import { combineReducers } from 'redux';
import { albumsReducer } from './albums';
import { usersReducer } from './users';
import { uiReducer } from './ui';

export const rootReducer = combineReducers({
    albums: albumsReducer,
    users: usersReducer,
    ui: uiReducer,
})
