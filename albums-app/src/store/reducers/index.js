import { combineReducers } from 'redux';
import { albumsReducer } from './albums';
import { usersReducer } from './users';

export const rootReducer = combineReducers({
    albums: albumsReducer,
    users: usersReducer,
})
