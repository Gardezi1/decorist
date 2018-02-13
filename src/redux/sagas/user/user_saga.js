import {USER_ACTIONS} from "../../actions/user_actions";
import {put, call} from "redux-saga/effects";
import {browserHistory} from 'react-router';
import {
    signIn,
    userProfile,
    register
} from "../../utils/service";
import _ from "lodash";

export function* login(data) {

    try {
        const res = yield call(signIn, data.credentials);
        const res_profile = yield call(userProfile, res);
        yield put({
            type: USER_ACTIONS.LOGIN_RESOLVED,
            payload: {
                jwt_token: res,
                user: res_profile
            }
        })
    } catch (error) {


        yield put({
            type: USER_ACTIONS.LOGIN_REJECTED,
            payload: {
                error: createErrorString(error)
            }
        })
    }
}

export function* signUp(data) {

    try {
        const res = yield call(register, data.credentials);

        // yield call(browserHistory.push, '/');
        yield put({
            type: USER_ACTIONS.SIGNUP_RESOLVED,
            payload: res
        })
    } catch (error) {

        yield put({
            type: USER_ACTIONS.SIGNUP_REJECTED,
            payload: {
                error: createErrorString(error)

            }
        })
    }
}

export function* logingOut(data) {

    try {
        // const res = yield call(register, data.credentials);

        yield call(browserHistory.push, '/signIn');
        yield put({
            type: USER_ACTIONS.SIGNUP_RESOLVED,
            // payload: res
        })
    } catch (error) {

        yield put({
            type: USER_ACTIONS.SIGNUP_REJECTED,
            payload: {
                error: createErrorString(error)

            }
        })
    }
}

function createErrorString(error) {

    let data = _.map(error.response.data, (data, key) => {

        const dataString = data.join(',')
        return `${key}: ${dataString}`
    }).join(" ")
    return data;
}