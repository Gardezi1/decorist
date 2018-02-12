import {
    FILM_ACTIONS
} from '../actions/film_actions'


export const getAllFilms = (jwt_token) => ({
    type:FILM_ACTIONS.GETALLFILMS,
    jwt_token
})

export const updateFilm = (filmId,filmData, jwt_token) => {
    return {

        type: FILM_ACTIONS.UPDATEFILMDETAIL,
        filmId,
        filmData,
        jwt_token
    }
}