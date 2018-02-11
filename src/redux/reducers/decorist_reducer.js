import {combineReducers} from 'redux';
import {
	user

} from './user_reducers';
import {
	films
} from './film_reducers'


export const decoristReducers = combineReducers({
	user,
	films
});

export default decoristReducers;
