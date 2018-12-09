import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import {Lesson, Counter, Button} from './Lesson';
import App from './Lesson8'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // <Lesson child={<Button />}><Counter /></Lesson>,
    <App />,
    document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
