import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {compose} from 'redux';

import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
);

export const store = createStore(
    rootReducer,
    enhancer
);
export default store;