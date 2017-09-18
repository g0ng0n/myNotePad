import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'
import reduxImmutableStateInvariant frort 'reduxImmutableStateInvariant';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(thunk, reduxImmutableStateInvariant())
			window.devToolsExtension ? window.devToolsExtension() : f => f
		));
}