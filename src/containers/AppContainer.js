import React from 'react'
import { Navbar} from 'react-bootstrap';

export class AppContainer extends React.Component {

    renderChildrenWithProps() {
        const props = {
            ...this.props
        };

        console.log(this.props.location.pathname);
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, props);
        });
    }

    render(){
        return(
            <div>
                <Navbar inverse collapseOnSelect>

                    <Navbar.Header className="navBarHeader">
                        <Navbar.Brand>
                            <span >Decorist</span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>;
                <div className="container">
                    {this.renderChildrenWithProps()}
                </div>
            </div>
        )
    }
}
