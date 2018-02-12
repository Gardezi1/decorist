import {combineReducers} from 'redux';
import {
    user

} from './user_reducers';
import {
    films
} from './film_reducers'


const appReducer = combineReducers({
    user,
    films
});

const decoristReducers = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined
    }

    return appReducer(state, action)
}

export default decoristReducers;
