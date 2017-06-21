import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';



import reducer from './reducers';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About'
import NotFound from './components/NotFound'


// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
/*const store = createStore(reducer, composeWithDevTools(applyMiddleware()));*/
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <Route path="login" component={Login}/>
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
