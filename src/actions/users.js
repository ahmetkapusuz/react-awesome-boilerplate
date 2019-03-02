import {FETCH_USERS} from './actionTypes';
const axios = require('axios');

export const fetchUsers = () => {

  return async (dispatch) => {
    const userListResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: FETCH_USERS,
      payload: userListResponse.data
    });
  };

};
