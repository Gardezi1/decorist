import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import {LoginContainer} from '../containers/LoginContainer'

const Routing = ({store}) => {
	return(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={LoginContainer}></Route>
			</Router>
		</Provider>
	);
}


export default Routing;