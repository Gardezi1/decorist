import {FILM_ACTIONS} from "../../actions/film_actions";
import {put, call} from "redux-saga/effects";
import { browserHistory } from 'react-router';
import {
    getAllFilmss
} from "../../utils/service";
import _ from "lodash";

export function* getAllFilms(jwt_token){

    try{
        const res = yield call(getAllFilmss, jwt_token);
        yield put({
            type: FILM_ACTIONS.GETALLFILMS_RESOLVED,
            payload: {
                films: res,
            }
        })
    } catch (error) {


        yield put ({
            type: FILM_ACTIONS.GETALLFILMS_REJECTED,
            payload: {
                error: createErrorString(error)
            }
        })
    }
}

function createErrorString(error){

    let data =  _.map(error.response.data, (data, key) => {

        let dataString = '';
        if(typeof  data === 'string')
            dataString = data;
        else
            dataString = data.join(',');
        return `${key}: ${dataString}`
    }).join(" ")
    return data;
}