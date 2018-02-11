import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import {LoginContainer} from '../containers/LoginContainer'
import {SignUpContainer} from '../containers/SignupContainer'
import { AppContainer } from '../containers/AppContainer';
import {FilmContainer} from "../containers/FilmContainer";

const Routing = ({store}) => {
	return(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={AppContainer}>
					<IndexRoute component={LoginContainer} />
                    <Route path="/signIn" component={LoginContainer}></Route>
					<Route path="/signUp" component={SignUpContainer}></Route>
					<Route path="/home" component={FilmContainer}></Route>
                </Route>
			</Router>
		</Provider>
	);
}


export default Routing;