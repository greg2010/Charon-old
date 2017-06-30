/**
 * Created by Donner on 30.06.2017.
 */


import React, {Component} from 'react';


export default class LoginDumb extends Component {


    render() {
        console.log(this.props.test);

        return (



                <div>


                <div className="col-md-2 col-md-offset-5 loginWrap">
                    <p className="loginTitle">log in </p>
                    <p className="">ingame name/email</p>
                    <input className="col-md-10 col-md-offset-1 login" type="text" />
                    <p className="">password</p>
                    <input className="col-md-10 col-md-offset-1 password" type="password" />
                    <button className="col-md-6 col-md-offset-3 loginBtn" disabled = {this.props.disabled}  onClick={this.props.lgn.bind(this)}>
                        Enter
                    </button>
                </div>
                <p className="col-md-4 col-md-offset-4 loginError"> {this.props.sLogin}</p>
            </div>
        );
    }
}


