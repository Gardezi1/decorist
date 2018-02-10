import {createStore, applyMiddleware}  from 'redux'
import createSagaMiddleware from 'redux-saga';
import decoristReducers from '../reducers/decorist_reducer'

import sagas from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	decoristReducers,
 	applyMiddleware(
 		sagaMiddleware
	)
)

sagaMiddleware.run(sagas);

export default store;

