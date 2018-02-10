import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    signup
} from '../redux/action_creators/user_actions_creators';
import { Login } from '../components/login';

const mapStateToProps = (state, props) => {
    const {
        error,
        jwt_token
    } = props;
    return {
        error,
        jwt_token
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    onUserSignup : credentials => {
        dispatch(signup(credentials));
    },
})


export const LoginContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Login)
);