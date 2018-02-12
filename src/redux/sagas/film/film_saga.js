import {FILM_ACTIONS} from "../../actions/film_actions";
import {put, call} from "redux-saga/effects";
import {browserHistory} from 'react-router';
import {
    getAllFilmss,
    updateFilmDetails,
    deleteFilmDetails,
    addANewFilm,
    addMyFilmRating,
    filterFilms
} from "../../utils/service";
import _ from "lodash";

export function* getAllFilms({jwt_token, limit, queryStringData}) {
    try {
        const res = yield call(getAllFilmss, jwt_token, limit, queryStringData);
        yield put({
            type: FILM_ACTIONS.GETALLFILMS_RESOLVED,
            payload: {
                films: res,
            }
        })
    } catch (error) {


        yield put({
            type: FILM_ACTIONS.GETALLFILMS_REJECTED,
            payload: {
                error: createErrorString(error)
            }
        })
    }
}

export function* updateFilm({filmId, filmData, jwt_token}) {
    try {
        const res = yield call(updateFilmDetails, filmId, filmData, jwt_token);
        yield put({
            type: FILM_ACTIONS.UPDATEFILMDETAIL_RESOLVED,
            payload: {
                films: res,
            }
        })
    } catch (error) {


        yield put({
            type: FILM_ACTIONS.UPDATEILMDETAIL_REJECTED,
            payload: {
                error: createErrorString(error)
            }
        })
    }
}

export function* deleteFilm({filmId, jwt_token}) {
    try {
        const res = yield call(deleteFilmDetails, filmId, jwt_token);
        yield put({
            type: FILM_ACTIONS.GETALLFILMS,
            jwt_token
        })
    } catch (error) {


        yield put({
            type: FILM_ACTIONS.DELETEFILM_REJECTED,
            payload: {
                error: createErrorString(error)
            }
        })
    }
}

export function* addFilm({data, jwt_token}) {
    try {
        const res = yield call(addANewFilm, data, jwt_token);

        yield put({
            type: FILM_ACTIONS.GETALLFILMS,
            jwt_token
        })
    } catch (error) {


        yield put({
            type: FILM_ACTIONS.ADDFILM_REJECTED,
            payload: {
                error: createErrorString(error)
            }
        })
    }
}

export function* addFilmRating({filmId, rating, jwt_token}) {

    try {
        const res = yield call(addMyFilmRating, filmId, rating, jwt_token);
        yield put({
            type: FILM_ACTIONS.ADDRATING_RESOLVED,
        })
    } catch (error) {


        yield put({
            type: FILM_ACTIONS.ADDRATING_REJECTED,
            payload: {
                error: createErrorString(error)
            }
        })
    }
}

export function* filterFilmResult({queryStringData, jwt_token}) {

    try {
        const res = yield call(filterFilms, queryStringData, jwt_token);
        console.log(res);
        yield put({
            type: FILM_ACTIONS.FILTERRESULT_RESOLVED,
            payload: {
                films: res,
            }

        })
    } catch (error) {


        yield put({
            type: FILM_ACTIONS.FILTERRESULT_REJECTED,
            payload: {
                error: createErrorString(error)
            }
        })
    }
}

function createErrorString(error) {

    let data = _.map(error.response.data, (data, key) => {

        let dataString = '';
        if (typeof  data === 'string')
            dataString = data;
        else
            dataString = data.join(',');
        return `${key}: ${dataString}`
    }).join(" ")
    return data;
}