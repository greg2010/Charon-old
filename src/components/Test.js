import React, { Component } from 'react';
import {browserHistory} from 'react-router';


class Test extends Component {

    componentDidMount(){
        /*localStorage.clear();
        setTimeout( function() { browserHistory.push('/');}.bind(this), 1000 );*/
    }


    render() {

        return (
            <div className="testWrap">
                <p>
                    TEST!
                </p>
            </div>
        );
    }
}

export default Test;