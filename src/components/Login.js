/**
 * Created by Donner on 21.06.2017.
 */


import React, {Component} from 'react';




class Login extends Component {

     /*loginClick(){
        const userName = document.querySelectorAll('.login')[0].value;
        const password = document.querySelectorAll('.password')[0].value;
        console.log(userName, password);
    };*/

    echoProps(){
        console.log(this);
    }

    render() {

        return (



            <div className="col-md-2 col-md-offset-5 loginWrap">
                <p className="loginTitle">log in </p>
                <p className="">ingame name/email</p>
                <input className="col-md-10 col-md-offset-1 login" type="text"/>
                <p className="">password</p>
                <input className="col-md-10 col-md-offset-1 password" type="password"/>
                <button className="col-md-6 col-md-offset-3 loginBtn" onClick={this.props.route.lgn.bind(this)}>Enter</button>
            </div>

        );
    }
}


export default Login;