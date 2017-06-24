import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducer from './reducers';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About'
import NotFound from './components/NotFound'




const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
/*const store = createStore(reducer, composeWithDevTools(applyMiddleware()));*/
/*const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/

const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
    console.log('Подписко ', store.getState());
});




ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <Route path="login" component={Login} lgn={loginClick}/>
                <Route path="about" component={About}/>
                {/*<Route path="register" component={Register} />*/}
                <Route path="*" component={NotFound}/>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>,

    document.getElementById('root')
);
registerServiceWorker();






function loginClick() {
    const userName = document.querySelectorAll('.login')[0].value;
    const password = document.querySelectorAll('.password')[0].value;
    console.log(userName, password);
    /*axios.get('http://api.red.greg2010.me/v1/auth/login/legacy?name_or_email=test&password=test')*/
    axios.get('http://api.red.greg2010.me/v1/auth/login/&callback=?')
        .then(function(response) {
        console.log(response);
    })
        .catch(function (error) {
            console.log(error);
        });

}


