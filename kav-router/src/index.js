import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import Home from './components/home/home'
import Contacts from './components/contacts/comtacts'
import Posts from './components/posts/posts'
import Post from './components/post/post'
import Error from './components/error/error'

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contacts" component={Contacts} />
                <Route exact path="/posts" component={Posts} />
                <Route path='/posts/:id' component={Post} />
                <Route path="*" component={Error} />
            </Switch>
        </App>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
