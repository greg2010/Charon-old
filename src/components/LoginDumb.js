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


                    <a href="https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=http://coalition.alliance.red:3000/auth/code&client_id=8e3260c3ebe64414b365c85044989259"><img src="https://images.contentful.com/idjq7aai9ylm/4fSjj56uD6CYwYyus4KmES/4f6385c91e6de56274d99496e6adebab/EVE_SSO_Login_Buttons_Large_Black.png?w=270&h=45" alt=""/></a>
                    
                   {/* <p className="">ingame name/email</p>
                    <input className="col-md-10 col-md-offset-1 login" type="text" />
                    <p className="">password</p>
                    <input className="col-md-10 col-md-offset-1 password" type="password" />
                    <button className="col-md-6 col-md-offset-3 loginBtn" disabled = {this.props.disabled}  onClick={this.props.lgn.bind(this)}>
                        Enter
                    </button>*/}
                </div>

                {/*<p className="col-md-4 col-md-offset-4 loginError"> {this.props.sLogin}</p>*/}
            </div>
        );
    }
}


