import {USER_ACTIONS} from "../../actions/user_actions";
import {put, call} from "redux-saga/effects";
import {signIn} from "../../utils/service";

export function* login(data){

    try{
        const res = yield call(signIn, data.credentials);
        yield put({
            type: USER_ACTIONS.LOGIN_RESOLVED,
            payload: res
        })
    } catch (error) {
        yield put ({
            type: USER_ACTIONS.LOGIN_REJECTED,
            payload: error
        })
    }
}