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
import LogOut from './components/LogOut';
import About from './components/About';
import NotFound from './components/NotFound';
import Auth from './components/Auth';
import Test from './components/Test'
import App from './components/App';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
/*const store = createStore(reducer, composeWithDevTools(applyMiddleware()));*/
/*const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/
store.dispatch({type: 'START'});


const history = syncHistoryWithStore(browserHistory, store);

/*
 store.subscribe(() => {
 console.log('Подписко ', store.getState());
 });

 */


ReactDOM.render(
    <Provider store={store}>

            <Router history={history}>
                <Route path="/" component={Main}>

                    <Route path="login" component={Login}/>
                    <Route path="about" component={About}/>
                    <Route path="auth/:code" component={Auth}/>
                    <Route path="logout" component={LogOut}/>
                    <Route path="test" component={Test}/>
                    {/*<Route path="register" component={Register} />*/}
                    <Route path="*" component={NotFound}/>
                    <IndexRoute component={Home}/>
                </Route>
            </Router>

    </Provider>,

    document.getElementById('root')
);
registerServiceWorker();




export default store;