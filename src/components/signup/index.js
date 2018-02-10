import React from 'react'
import {EMAIL, PASSWORD, AGAINENTERPASSWORD, SIGNUP, LOGIN} from '../../constants/user';
import { Link } from 'react-router';

export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            passwordTwo: ''
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

    handleRewritePasswordChange = e => {
        this.setState({
            passwordTwo: e.target.value
        });
    }

    handleSubmit = e => {

        e.preventDefault();

        const {
            email,
            password,
            passwordTwo
        } = this.state;

        if(password !== passwordTwo){
            alert("Password do not match")
            return;
        }
        const credentials = {
            email,
            password
        };
        this.props.onUserLogin(credentials);

    }

    render(){
        const {email, password, passwordTwo} = this.state;

        return (
            <div>
                <Link to="/" >{LOGIN}</Link>
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

                    <br/>

                    <label htmlFor="password2">Password</label>
                    <input
                        placeholder={AGAINENTERPASSWORD}
                        type="password"
                        name="password2"
                        value={passwordTwo}
                        onChange={this.handleRewritePasswordChange}
                    />

                    <br />

                    <button
                        id="signupButton"
                        type="submit"
                    >{SIGNUP}</button>
                </form>
            </div>
        )
    }
}