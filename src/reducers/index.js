/**
 * Created by Donner on 21.06.2017.
 */

import { combineReducers } from 'redux';
import somereducer from './somereducer';
import { routerReducer } from 'react-router-redux';



export default combineReducers({
    routing: routerReducer,
    somereducer
});



