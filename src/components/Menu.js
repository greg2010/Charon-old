/**
 * Created by Donner on 21.06.2017.
 */

import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';



class Menu extends Component {
    render() {






        if (localStorage.getItem("currentCharacterId") > 0) {
            const charId = "https://imageserver.eveonline.com/Character/"+localStorage.getItem("currentCharacterId")+"_128.jpg";


            return (



                <nav className="upMenu">



                    <ul className="topleft">
                        <li><Link to="/logout" activeClassName="red">logout</Link></li>
                        <li><IndexLink to="/" activeClassName="red">home</IndexLink></li>
                        <li><Link to="/about" activeClassName="red">about</Link></li>
                    </ul>
                    <img src={charId} alt=""/>
                    <p>{localStorage.getItem('currentCharacterName')}</p>
                </nav>);
        } else {
            return (
                <nav className="upMenu">
                    <ul className="topleft">
                        <li><IndexLink to="/" activeClassName="red">home</IndexLink></li>
                        <li><Link to="/about" activeClassName="red">about</Link></li>
                        <li><Link to="/login" activeClassName="red">login</Link></li>
                    </ul>
                </nav>);
        }
    }
}


export default Menu;