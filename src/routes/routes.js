import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import {LoginContainer} from '../containers/LoginContainer'
import {SignUpContainer} from '../containers/SignupContainer'


const Routing = ({store}) => {
	return(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={LoginContainer}></Route>
                <Route path="/signUp" component={SignUpContainer}></Route>
			</Router>
		</Provider>
	);
}


export default Routing;