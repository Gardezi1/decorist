import {USER_ACTIONS} from '../actions/user_actions';

export const login = credentails => ({
	type: USER_ACTIONS.LOGIN,
	credentails
})


export const signup = credentials => ({
	type: USER_ACTIONS.SIGNUP,
	credentials
})

export const logout = () => ({
	type: USER_ACTIONS.LOGOUT
})