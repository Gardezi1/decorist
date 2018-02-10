import React from 'react'
import {EMAIL, PASSWORD, LOGIN} from '../../constants/user';

export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    handleEmailChange = e => {

        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange = e => {

        this.setState({
            password: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const credentials = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.onUserLogin(credentials);

    }

    render(){
        const {email, password} = this.state;

        return (
            <div>


                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder={EMAIL}
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleEmailChange}
                    />

                    <br />

                    <label htmlFor="password">Password</label>
                    <input
                        placeholder={PASSWORD}
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handlePasswordChange}
                    />

                    <br />

                    <button
                        id="loginButton"
                        type="submit"
                    >{LOGIN}</button>
                </form>
            </div>
        )
    }
}