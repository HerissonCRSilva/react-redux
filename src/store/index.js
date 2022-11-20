import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enchacer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enchacer);

sagaMiddleware.run(rootSaga);
export default store;