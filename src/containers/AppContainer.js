import React from 'react'

import {withRouter} from 'react-router';
import {Navbar, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import {
    logout
} from '../redux/action_creators/user_actions_creators'

export class App extends React.Component {

    logout = () => {
        localStorage.removeItem('applicationState');
        this.props.logout();
    }

    showLogoutLink() {
        if (this.props.location.pathname === '/' || this.props.location.pathname === '/signup' || this.props.location.pathname === '/signIn') {
            return false
        } else {
            return true;
        }
    }

    renderChildrenWithProps() {
        const props = {
            ...this.props
        };

        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, props);
        });
    }

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>

                    <Navbar.Header className="navBarHeader">
                        <Navbar.Brand>
                            <span>Decorist</span>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    {this.showLogoutLink() &&
                    <div>
                        <Button className="pull-right navBarLogoutButton" onClick={this.logout}>
                            LogOut
                        </Button>
                    </div>
                    }
                </Navbar>;
                <div className="container">
                    {this.renderChildrenWithProps()}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    loading: state.loading,
    error: state.error,
    action: state.action
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    logout: () => {
        dispatch(logout())
    }
})

export const AppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
