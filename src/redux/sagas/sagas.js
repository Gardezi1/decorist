import { call, put, select, takeEvery } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import {USER_ACTIONS} from '../actions/user_actions';
//
// export function* login({credentials}){
// 	try{
// 		yield put({
// 			type: USER_ACTIONS.LOGIN_RESOLVED
// 		})
// 	} catch (error) {
// 		yield put ({
// 			type: USER_ACTIONS.LOGIN_REJECTED
// 		})
// 	}
// }


import {login} from './user/user_saga';


export function* sagas(){
	yield takeEvery(USER_ACTIONS.LOGIN, login)
}


export default sagas;