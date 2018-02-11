import { takeEvery } from 'redux-saga/effects';
import {USER_ACTIONS} from '../actions/user_actions';


import {
	login,
	signUp
} from './user/user_saga';


export function* sagas(){
	yield takeEvery(USER_ACTIONS.LOGIN, login);
	yield takeEvery(USER_ACTIONS.SIGNUP, signUp);
}


export default sagas;