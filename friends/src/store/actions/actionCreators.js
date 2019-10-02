import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchFriendSuccess = friends => {
	return {
		type: actionTypes.FETCH_FRIEND_SUCCESS,
		friends: friends
	};
};

export const fetchFriendFail = error => {
	return {
		type: actionTypes.FETCH_FRIEND_FAIL,
		error: error
	};
};

export const fetchFriendStart = () => {
	return {
		type: actionTypes.FETCH_FRIEND_START
	};
};

export const fetchFriends = () => {
	return dispatch => {
		dispatch(fetchFriendStart());
		axios
			.get('http://localhost:5000/api/friends')
			.then(res => {
				dispatch(fetchFriendSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchFriendFail(err));
			});
	};
};

export const login = (username, password) => dispatch => {
	const credentials = { username, password };

	axios
		.post('http://localhost:5000/api/login', credentials)
		.then(res => {
			localStorage.setItem('token', res.data.token);
		})
		.catch(res => {
			console.log('AUTH FAILED');
		});
};
