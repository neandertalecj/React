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

const addTrackBtn = document.querySelectorAll('.addTrack')[0]
const trackInput = document.querySelectorAll('.trackInput')[0]
const list = document.querySelectorAll('.list')[0]

// console.log(store.getState())
store.subscribe(() => {
    console.log('subscribe', store.getState())
    list.innerHTML = ''
    trackInput.value = ''
    store.getState().forEach(track => {
        const li = document.createElement('li')
        li.textContent = track
        list.appendChild(li)
    })
})

// store.dispatch({
//     type: 'ADD_TRACK',
//     payload: 'Smells like spirit'
// })

// store.dispatch({
//     type: 'ADD_TRACK',
//     payload: 'Enter Spandman'
// })

addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value
    console.log('trackName', trackName)
    store.dispatch({
        type: 'ADD_TRACK',
        payload: trackName
    })
})
