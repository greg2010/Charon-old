/**
 * Created by Donner on 21.06.2017.
 */


import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (

            <div className="col-md-2 col-md-offset-5 loginWrap">
                <p className="loginTitle">log in</p>
                <p className="">ingame name/email</p>
                <input className="col-md-10 col-md-offset-1" type="text"/>
                <p className="">password</p>
                <input className="col-md-10 col-md-offset-1" type="password"/>
                <button className="col-md-6 col-md-offset-3 loginBut">Enter</button>
            </div>

        );
    }
}

export default Login;