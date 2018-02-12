import {
    FILM_ACTIONS
} from '../actions/film_actions'

export const DEFAULT_FILM_STATE={
    error:'',
    loading: false,
    films: [],
    film:[],
    action: ''
}


export const films = (state= DEFAULT_FILM_STATE, actions) => {
    switch (actions.type) {
        case FILM_ACTIONS.GETALLFILMS:
            return {
                ...state,
                loading: true,
                error: '',
                action: "get"
            }
            break;
        case FILM_ACTIONS.GETALLFILMS_RESOLVED:
            return {
                ...state,
                loading: false,
                error: '',
                films: actions.payload.films.results,
                action: "get_resolved"
            }
            break;
        case FILM_ACTIONS.GETALLFILMS_REJECTED:
            return {
                ...state,
                loading: false,
                error: actions.payload.error,
                action: "get_rejected"
            }
            break;
        case FILM_ACTIONS.UPDATEFILMDETAIL:
            return {
                ...state,
                loading: true,
                error: '',
                action: "update"
            }
            break;
        case FILM_ACTIONS.UPDATEFILMDETAIL_RESOLVED:

            return {
                ...state,
                loading:false,
                error: '',
                action: "update_resolved"
            }
            break;
        case FILM_ACTIONS.UPDATEILMDETAIL_REJECTED:
            return {
                ...state,
                loading: false,
                error: actions.payload.error,
                action: "update_rejected"
            }
            break;
        default:
            return {
                ...state
            }
            break;

    }
}