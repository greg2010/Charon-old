/**
 * Created by Donner on 21.06.2017.
 */


import React, {Component} from 'react';
import LoginDumb from './LoginDumb';
import axios from 'axios';
import store from '../index';
import {connect} from 'react-redux';




export class Login extends Component {






    loginClick() {
    const userName = document.querySelectorAll('.login')[0].value;
    const password = document.querySelectorAll('.password')[0].value;

    const disableBtn = {
        type: 'DISABLE_BTN',
        payload: {
            disabled: 'disabled'
        }
    };

    store.dispatch(disableBtn);

    axios.get(process.env.REACT_APP_BACKEND_BASE_URL+'/v1/auth/login/legacy?name_or_email=' + userName + '&password=' + password)
        .then(function (response) {
        })
        .catch(function (error) {
            const res = error.response.data.reason;
            const action = {
                type: 'BTN_LOGIN',
                payload: {
                    login: userName,
                    password: password,
                    errorResponse: res,
                    disabled: ''
                }
            };
            store.dispatch(action);
        });
    document.querySelectorAll('.login')[0].value = '';
    document.querySelectorAll('.password')[0].value = '';
}

    componentWillUnmount() {
        console.log("componentDidMount()");
        const action = {
            type: 'CLEAR_STATUS',
            payload: {
                login: '',
                password: '',
                errorResponse: '',
                disabled: ''
            }
        };
        store.dispatch(action);
    }

    render() {

        const SSO ='https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri='+process.env.REACT_APP_SSO_REDIRECT+'&client_id='+process.env.REACT_APP_SSO_CLIENT_ID+'&scope=characterAccountRead&state=uniquestate123';

        return (
            <LoginDumb SSO={SSO}  lgn={this.loginClick} sLogin={this.props.sLogin} disabled={this.props.disabled} login={''}/>
        );
    }
}


const mapStateToProps = function (store) {
    return {
        sLogin: store.somereducer.loginState.errorResponse,
        login: store.somereducer.loginState.login,
        password: store.somereducer.loginState.password,
        disabled: store.somereducer.loginState.disabled

    }
};

export default connect(mapStateToProps)(Login);



