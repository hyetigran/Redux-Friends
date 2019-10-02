import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import friendsReducer from './store/reducers';

import './index.css';
import App from './App';

const store = createStore(
	friendsReducer,
	{},
	compose(
		applyMiddleware(thunk, logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
