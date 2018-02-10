import React from 'react'
import {EMAIL, PASSWORD, LOGIN, SIGNUPTEXTONLOGINPAGE} from '../../constants/user';
import { Link } from 'react-router';
import { Form, FormGroup, Col, Button, ControlLabel, FormControl} from 'react-bootstrap';
import './index.css';

export class Login extends React.Component{
	
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
			email: this.inputEmail.value,
			password: this.inputPassword.value
		};
		this.props.onUserLogin(credentials);

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

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit" onClick={this.handleSubmit} bsClass="btn centerAlign">{LOGIN}</Button>
						</Col>
					</FormGroup>
				</Form>
				<br/>
                <Link to="signUp" className="centerAlignSignUpText" >{SIGNUPTEXTONLOGINPAGE}</Link>
			</div>
		)
	}
}