/**
 * Created by Donner on 30.06.2017.
 */


import React, { Component } from 'react';
import {connect} from 'react-redux';



export default class App extends Component {



    render() {


        return (
            <div className="App">

                {this.props.children}

            </div>
        );
    }
}



/*
const mapStateToProps = function (store) {
    return {
        sLogin: store.somereducer.loginState.errorResponse
    }
};

export default connect(mapStateToProps)(App);*/
