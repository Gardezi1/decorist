import {USER_ACTIONS} from '../actions/user_actions'


export const DEFAULT_USER_STATE = {
    error: '',
    jwt_token: '',
    user: {
        email: '',
        first_name: '',
        last_name: '',
        username: '',
        uuid: ''
    },
    loading: false
}


export const user = (state = DEFAULT_USER_STATE, action) => {
    switch (action.type) {
        case USER_ACTIONS.LOGIN:
            return {
                ...state,
                loading: true,
                error: '',
                action: "login"
            };

        case USER_ACTIONS.LOGIN_RESOLVED:
            return {
                ...state,
                jwt_token: action.payload.jwt_token,
                user: action.payload.user,
                loading: false,
                error: '',
                action: "login_resolved"
            };

        case USER_ACTIONS.LOGIN_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                action: "login_rejected"
            };

        case USER_ACTIONS.SIGNUP:
            return {
                ...state,
                loading: true,
                error: '',
                action: "signup"
            };

        case USER_ACTIONS.SIGNUP_RESOLVED:
            return {
                ...state,
                loading: false,
                error: '',
                action: "signup_resolved"
            };

        case USER_ACTIONS.SIGNUP_REJECTED:

            return {
                ...state,
                loading: false,
                error: action.payload.error,
                action: "signup_rejected"
            };


        case USER_ACTIONS.LOGOUT:
            return {
                ...DEFAULT_USER_STATE,
                loading: true,
                error: '',
                action: "logout"
            };

        case USER_ACTIONS.LOGOUT_RESOLVED:
            return {
                ...DEFAULT_USER_STATE,
                loading: false,
                error: '',
                action: "logout_resolved"
            };

        case USER_ACTIONS.LOGOUT_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                action: "logout_rejected"
            };

        default:
            return {
                ...state
            };
    }
}