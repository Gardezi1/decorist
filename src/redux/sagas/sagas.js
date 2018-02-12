import { takeEvery } from 'redux-saga/effects';
import {USER_ACTIONS} from '../actions/user_actions';
import {FILM_ACTIONS} from '../actions/film_actions';


import {
	login,
	signUp
} from './user/user_saga';


import {
	getAllFilms,
	updateFilm
} from './film/film_saga'


export function* sagas(){
	yield takeEvery(USER_ACTIONS.LOGIN, login);
	yield takeEvery(USER_ACTIONS.SIGNUP, signUp);
	yield takeEvery(FILM_ACTIONS.GETALLFILMS, getAllFilms);
	yield takeEvery(FILM_ACTIONS.UPDATEFILMDETAIL, updateFilm);
}


export default sagas;