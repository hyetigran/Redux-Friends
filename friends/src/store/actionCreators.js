import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchFriendSuccess = characters => {
	return {
		type: actionTypes.FETCH_FRIEND_SUCCESS,
		characters: characters
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
			.get('https://localhost:5000/api/friends')
			.then(res => {
				dispatch(fetchFriendSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchFriendFail(err));
			});
	};
};
