// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

import { createStore } from 'redux'

function playlist(state = [], action) {
    // console.log(action)
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }
    return state
}

const store = createStore(playlist)

// console.log(store.getState())
store.subscribe(() => {
    console.log('subscribe', store.getState())
})

store.dispatch({
    type: 'ADD_TRACK',
    payload: 'Smells like spirit'
})

store.dispatch({
    type: 'ADD_TRACK',
    payload: 'Enter Spandman'
})