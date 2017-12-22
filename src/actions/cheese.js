import {API_BASE_URL} from '../config';

export const asyncAction = () => dispatch => {
    dispatch(syncActionRequest());
    return fetch(`{API_BASE_URL}/api/cheeses')
}