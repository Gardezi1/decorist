import {USER_ACTIONS} from '../actions/user_actions';

export const login = credentials => ({
	type: USER_ACTIONS.LOGIN,
	credentials
})

export const signup = credentials => ({
	type: USER_ACTIONS.SIGNUP,
	credentials
})

export const logout = () => ({
	type: USER_ACTIONS.LOGOUT
})