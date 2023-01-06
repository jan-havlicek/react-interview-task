import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import reducers from './rootReducer';
import reportsSagas from '../../reports/sagas/reportsSagas';

/**
 * Redux store bootstrapping.
 */

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];

const store = createStore(
    reducers,
    undefined,
    composeEnhancers(applyMiddleware(...middlewares))
);

// Run redux-saga middleware.
sagaMiddleware.run(reportsSagas);

export default store;
