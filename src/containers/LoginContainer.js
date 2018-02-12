import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
    login
} from '../redux/action_creators/user_actions_creators';
import {Login} from '../components/login';

const mapStateToProps = (state, props) => {


    const {
        error,
        user,
        jwt_token,
        loading
    } = state.user;
    return {
        error,
        user,
        jwt_token,
        loading
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    onUserLogin: credentials => {
        dispatch(login(credentials));
    },
})


export const LoginContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Login)
);