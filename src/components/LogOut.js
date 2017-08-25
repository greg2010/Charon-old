import React, { Component } from 'react';
import {browserHistory} from 'react-router';


class LogOut extends Component {

    componentDidMount(){
        localStorage.clear();

        /*setTimeout( function() { browserHistory.push('/');}.bind(this), 1000 );*/
        setTimeout( function() { browserHistory.push('/');}, 1000 )
}


    render() {

        return (
            <div className="aboutWrap">
                <p>
                    Bye-Bye!

                </p>
            </div>
        );
    }
}

export default LogOut;