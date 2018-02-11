import React from 'react'
import {EMAIL, PASSWORD, AGAINENTERPASSWORD, SIGNUP, LOGIN} from '../../constants/user';
import { Link } from 'react-router';
import { Form, FormGroup, Col, Button, ControlLabel, FormControl} from 'react-bootstrap';
import './index.css';
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
        const email =  this.inputEmail.value;
        const password = this.inputPassword.value;
        const inputPasswordAgain = this.inputPasswordAgain.value;

        if(password !== inputPasswordAgain){
            alert("Password do not match")
            return;
        }

        const credentials = {
            email: email,
            password1: password,
            password2: inputPasswordAgain
        };
        this.props.onUserSignup(credentials);

    }

    render(){

        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            {EMAIL}
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder={EMAIL} inputRef={inputEmail => {this.inputEmail = inputEmail}}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            {PASSWORD}
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder={PASSWORD} inputRef={inputPassword => {this.inputPassword = inputPassword}}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            {AGAINENTERPASSWORD}
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder={AGAINENTERPASSWORD} inputRef={inputPasswordAgain => {this.inputPasswordAgain = inputPasswordAgain}}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={this.handleSubmit} bsClass="btn centerAlignSignUp">{SIGNUP}</Button>
                        </Col>
                    </FormGroup>
                </Form>
                <br/>
                <Link to="signUp" className="centerAlignSignInText" >{LOGIN}</Link>
            </div>
        );
    }
}