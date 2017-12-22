import React from 'react';
import {createStore, applyMiddleware} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-exstension';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Cheeses from './components/cheese-list';
import {fetchCheeseReducer} from './reducers/cheese';
import {Provider} from 'react-redux'; 

const store = createStore(
    fetchCheeseReducer,
    applyMiddleware(thunk)
)

ReactDOM.render((
    <Provider store={store}>
        <Cheeses />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
