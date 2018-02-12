import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import decoristReducers from '../reducers/decorist_reducer'

import sagas from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

/**
 * Add all the state in local storage
 * @param getState
 * @returns {function(*): function(*=)}
 */
const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(
            getState()
        ));
        return result;
    };
};


const store = createStore(
    decoristReducers,
    JSON.parse(localStorage.getItem('applicationState')), // re-hydrate the store
    applyMiddleware(
        sagaMiddleware,
        localStorageMiddleware,
    )
)

sagaMiddleware.run(sagas);

export default store;

