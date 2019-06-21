import * as actionTypes from '../actions/actionTypes';

const initialState = {
	friends: [],
	loading: false,
	error: null
};

const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};

const fetchFriendStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchFriendSuccess = (state, action) => {
	return updateObject(state, { friends: action.friends, loading: false });
};
const fetchFriendFail = (state, action) => {
	return updateObject(state, { loading: false });
};

export const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_FRIEND_START:
			return fetchFriendStart(state, action);
		case actionTypes.FETCH_FRIEND_SUCCESS:
			return fetchFriendSuccess(state, action);
		case actionTypes.FETCH_FRIEND_FAIL:
			return fetchFriendFail(state, action);
		default:
			return state;
	}
};
