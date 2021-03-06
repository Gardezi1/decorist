import
{
    takeEvery
} from 'redux-saga/effects';
import {USER_ACTIONS} from '../actions/user_actions';
import {FILM_ACTIONS} from '../actions/film_actions';


import {
    login,
    signUp,
    logingOut
} from './user/user_saga';


import {
    getAllFilms,
    updateFilm,
    deleteFilm,
    addFilm,
    addFilmRating,
    filterFilmResult,
} from './film/film_saga'


export function* sagas() {
    yield takeEvery(USER_ACTIONS.LOGIN, login);
    yield takeEvery(USER_ACTIONS.SIGNUP, signUp);
    yield takeEvery(USER_ACTIONS.LOGOUT, logingOut);
    yield takeEvery(FILM_ACTIONS.GETALLFILMS, getAllFilms);
    yield takeEvery(FILM_ACTIONS.UPDATEFILMDETAIL, updateFilm);
    yield takeEvery(FILM_ACTIONS.DELETEFILM, deleteFilm);
    yield takeEvery(FILM_ACTIONS.ADDFILM, addFilm);
    yield takeEvery(FILM_ACTIONS.ADDRATING, addFilmRating);
    yield takeEvery(FILM_ACTIONS.FILTERRESULT, filterFilmResult);
}


export default sagas;