import {USER_ACTIONS} from "../../actions/user_actions";
import {put} from "redux-saga/effects";

export function* login({credentials}){
    try{
        yield put({
            type: USER_ACTIONS.LOGIN_RESOLVED
        })
    } catch (error) {
        yield put ({
            type: USER_ACTIONS.LOGIN_REJECTED
        })
    }
}