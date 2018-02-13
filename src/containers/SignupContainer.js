import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
    signup
} from '../redux/action_creators/user_actions_creators';
import {SignUp} from '../components/signup';

const mapStateToProps = (state, props) => {
    const {
        error,
        jwt_token,
        action
    } = state.user;
    return {
        error,
        jwt_token,
        action
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    onUserSignup: credentials => {
        dispatch(signup(credentials));
    },
})


export const SignUpContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SignUp)
);