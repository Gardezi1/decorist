import React from 'react'

import {Link} from 'react-router';
import {Navbar, Nav} from 'react-bootstrap';

export class AppContainer extends React.Component {

    showLogoutLink() {
        console.log(this.props.location.pathname);
        if (this.props.location.pathname === '/' || this.props.location.pathname === 'signup') {
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
                </Navbar>;
                <div className="container">
                    {this.renderChildrenWithProps()}
                </div>
            </div>
        )
    }
}
