import {
    FILM_ACTIONS
} from '../actions/film_actions'

export const DEFAULT_FILM_STATE={
    error:'',
    loading: false,
    films: [],
    film:[]
}


export const films = (state= DEFAULT_FILM_STATE, actions) => {
    switch (actions.type) {
        case FILM_ACTIONS.GETALLFILMS:
            return {
                ...state,
                loading: true,
                error: ''
            }
            break;
        case FILM_ACTIONS.GETALLFILMS_RESOLVED:
            return {
                ...state,
                loading: false,
                error: '',
                films: actions.payload.films.results
            }
            break;
        case FILM_ACTIONS.GETALLFILMS_REJECTED:
            return {
                ...state,
                loading: false,
                error: actions.payload.error
            }
            break;
        default:
            return {
                ...state
            }
            break;

    }
}