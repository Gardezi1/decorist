import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routes/routes'
import store from './redux/stores/decorist_store';
ReactDOM.render(<Routing store={store}/> , document.getElementById('main'));