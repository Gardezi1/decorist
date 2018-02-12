import {
    FILM_ACTIONS
} from '../actions/film_actions'


export const getAllFilms = (jwt_token, limit, queryStringData) => {
    return {
        type: FILM_ACTIONS.GETALLFILMS,
        jwt_token,
        limit,
        queryStringData
    }
}

export const updateFilm = (filmId, filmData, jwt_token) => {
    return {

        type: FILM_ACTIONS.UPDATEFILMDETAIL,
        filmId,
        filmData,
        jwt_token
    }
}

export const deleteFilm = (filmId, jwt_token) => {
    return {
        type: FILM_ACTIONS.DELETEFILM,
        filmId,
        jwt_token
    }
}

export const addFilm = (data, jwt_token) => {
    return {
        type: FILM_ACTIONS.ADDFILM,
        data,
        jwt_token
    }
}

export const addRating = (filmId, rating, jwt_token) => {
    return {
        type: FILM_ACTIONS.ADDRATING,
        filmId,
        rating,
        jwt_token
    }
}

export const filterResult = (queryStringData, jwt_token) => {
    return {
        type: FILM_ACTIONS.FILTERRESULT,
        queryStringData,
        jwt_token
    }
}