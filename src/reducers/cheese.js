'use strict';

import {
    FETCH_CHEESE_REQUEST,
    FETCH_CHEESE_SUCCESS,
    FETCH_CHEESE_ERROR
} from './actions';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

const fetchCheeseReducer = (state=initialState, action) => {
    if (action.type === FETCH_CHEESE_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === FETCH_CHEESE_SUCCESS) {
        return Object.assign({}, state, {
            cheeses: action.cheese,
            loading: false,
            error: null
        });
    }
    else if (action.type === FETCH_CHEESE_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}