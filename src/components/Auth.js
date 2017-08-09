import React, { Component } from 'react';



class Auth extends Component {
    render() {

        return (
            <div className="auth">

                <h1>Auth</h1>
                <p>
                    <span>{this.props.location.query.code} 11  </span>
                </p>
            </div>
        );
    }
}

export default Auth;