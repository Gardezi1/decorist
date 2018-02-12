import {
    FILM_ACTIONS
} from '../actions/film_actions'

export const DEFAULT_FILM_STATE = {
    error: '',
    loading: false,
    films: [],
    film: [],
    action: ''
}


export const films = (state = DEFAULT_FILM_STATE, actions) => {
    switch (actions.type) {
        case FILM_ACTIONS.GETALLFILMS:
            return {
                ...state,
                loading: true,
                error: '',
                action: "get"
            }

        case FILM_ACTIONS.GETALLFILMS_RESOLVED:
            return {
                ...state,
                loading: false,
                error: '',
                films: actions.payload.films.results,
                action: "get_resolved"
            }

        case FILM_ACTIONS.GETALLFILMS_REJECTED:
            return {
                ...state,
                loading: false,
                error: actions.payload.error,
                action: "get_rejected"
            }

        case FILM_ACTIONS.UPDATEFILMDETAIL:
            return {
                ...state,
                loading: true,
                error: '',
                action: "update"
            }

        case FILM_ACTIONS.UPDATEFILMDETAIL_RESOLVED:

            return {
                ...state,
                loading: false,
                error: '',
                action: "update_resolved"
            }

        case FILM_ACTIONS.UPDATEILMDETAIL_REJECTED:
            return {
                ...state,
                loading: false,
                error: actions.payload.error,
                action: "update_rejected"
            }

        case FILM_ACTIONS.DELETEFILM_RESOLVED:
            return {
                ...state,
                loading: false,
                error: '',
                action: "delete_resolved"
            }

        case FILM_ACTIONS.DELETEFILM_REJECTED:
            return {
                ...state,
                loading: false,
                error: actions.payload.error,
                action: "delete_rejected"
            }

        case FILM_ACTIONS.ADDFILM:
            return {
                ...state,
                loading: true,
                error: '',
                action: "add"
            }

        case FILM_ACTIONS.ADDFILM_RESOLVED:

            return {
                ...state,
                loading: false,
                error: '',
                action: "add_resolved"
            }

        case FILM_ACTIONS.ADDFILM_REJECTED:
            return {
                ...state,
                loading: false,
                error: actions.payload.error,
                action: "add_rejected"
            }

        case FILM_ACTIONS.ADDRATING:
            return {
                ...state,
                loading: true,
                error: '',
                action: "addrating"
            }
        case FILM_ACTIONS.ADDRATING_RESOLVED:
            return {
                ...state,
                loading: false,
                error: '',
                action: "addrating_resolved"
            }
        case FILM_ACTIONS.ADDRATING_REJECTED:
            return {
                ...state,
                loading: false,
                error: actions.payload.error,
                action: "addrating_rejected"
            }
        case FILM_ACTIONS.FILTERRESULT:
            return {
                ...state,
                loading: true,
                error: '',
                action: "filterresult"
            }
        case FILM_ACTIONS.FILTERRESULT_RESOLVED:

            return {
                ...state,
                loading: false,
                error: '',
                films: actions.payload.films.results,
                action: "filterresult_resolved"
            }
        case FILM_ACTIONS.FILTERRESULT_REJECTED:
            return {
                ...state,
                loading: false,
                error: actions.payload.error,
                action: "filterresult_rejected"
            }
        default:
            return {
                ...state
            }


    }
}