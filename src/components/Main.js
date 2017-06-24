import React, { Component } from 'react';
import Menu from './Menu';


class Main extends Component {

    render() {
        return (
            <div className="cont">
                <Menu />
                {this.props.children}

            </div>
        );
    }
}

export default Main;
