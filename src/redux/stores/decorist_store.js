import {createStore, applyMiddleware} from 'redux'
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


const reHydrateStore = () => {

    if (localStorage.getItem('applicationState') !== null) {
        return JSON.parse(localStorage.getItem('applicationState')) // re-hydrate the store

    }
}


const store = createStore(
    decoristReducers,
    reHydrateStore(),
    applyMiddleware(
        sagaMiddleware,
        localStorageMiddleware,
    )
)

sagaMiddleware.run(sagas);

export default store;

