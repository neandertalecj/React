import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducer from './reducers'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'


// const initialState = {
    // tracks: [
    //     'Smels like spirit',
    //     'Enter Sandman'
    // ],
    // playlist: [
    //     'My home playlist',
    //     'My work playlistnpm'
    // ]

// }

// function playlist(state = initialState, action) {
//     if (action.type === 'ADD_TRACK') {
//         return {
//             ...state,
//             tracks :[...state.tracks, action.payload]
//         }
//     }
//     return state
// }

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()






   // ----------------------------------
// import { createStore } from 'redux'

// function playlist(state = [], action) {
//     if (action.type === 'ADD_TRACK') {
//         return [
//             ...state,
//             action.payload
//         ]
//     }
//     return state
// }

// const store = createStore(playlist)

// const addTrackBtn = document.querySelectorAll('.addTrack')[0]
// const trackInput = document.querySelectorAll('.trackInput')[0]
// const list = document.querySelectorAll('.list')[0]

// store.subscribe(() => {
//     console.log('subscribe', store.getState())
//     list.innerHTML = ''
//     trackInput.value = ''
//     store.getState().forEach(track => {
//         const li = document.createElement('li')
//         li.textContent = track
//         list.appendChild(li)
//     })
// })

// // store.dispatch({
// //     type: 'ADD_TRACK',
// //     payload: 'Smells like spirit'
// // })

// // store.dispatch({
// //     type: 'ADD_TRACK',
// //     payload: 'Enter Spandman'
// // })

// addTrackBtn.addEventListener('click', () => {
//     const trackName = trackInput.value
//     console.log('trackName', trackName)
//     store.dispatch({
//         type: 'ADD_TRACK',
//         payload: trackName
//     })
// })
