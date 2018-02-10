import {USER_ACTIONS}  from '../actions/user_actions'


export const DEFAULT_USER_STATE = {
	error:'',
	jwt_token: '',
	user: {
		email: '',
		firstName: '',
		lastName:''
	}
}


export const user = (state= DEFAULT_USER_STATE, action) => {
	switch (action.type){
		case USER_ACTIONS.LOGIN:
			return{
				...state
			};
			break;
		case USER_ACTIONS.LOGIN_RESOLVED:
			return{
				...state
			};
			break;
		case USER_ACTIONS.LOGIN_REJECTED:
			return{
				...state
			};
			break;			
		case USER_ACTIONS.SIGNUP:
			return {
				...state
			};
			break;
		case USER_ACTIONS.LOGOUT:
			return {
				...state
			};
			break;
		default:
			return {
				...state
			};			
	}
}