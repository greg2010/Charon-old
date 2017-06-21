/**
 * Created by Donner on 21.06.2017.
 */

import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Menu extends Component {
    render() {
        return (
            <nav className="upMenu">
                <ul className="topleft">
                    <li><IndexLink to="/" activeClassName="red">home</IndexLink></li>
                    <li><Link to="/about" activeClassName="red">about</Link></li>
                    <li><Link to="/reg" activeClassName="red">registration</Link></li>
                    <li><Link to="/login" activeClassName="red">login</Link></li>
                </ul>
            </nav>);
    }
}


export default Menu;