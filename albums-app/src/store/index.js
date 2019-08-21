import { createStore, applyMiddleware, compose } from 'redux';
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = createStore(
    state => ({ name: 'alex' }),
    composeEnhancer(applyMiddleware())
);
