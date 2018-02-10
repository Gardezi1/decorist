import {combineReducers} from 'redux';
import {user} from './user_reducers';


export const decoristReducers = combineReducers({
	user
});

export default decoristReducers;
