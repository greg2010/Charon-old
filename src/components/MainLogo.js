/**
 * Created by Donner on 21.06.2017.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

class MainLogo extends Component {
    render() {


        if (localStorage.getItem("currentCharacterId") > 0) {
            return (
                <main>
                    <div className="col-md-6 col-md-offset-3 star">
                        <p className="coal"> coalition</p>
                        <p className="cname red">red menace</p>
                        <Link to="/test" className="btn btn-default btn-lg regBut">TEST THIS</Link>
                    </div>
                </main>


            )
        } else {


            return (
                <main>
                    <div className="col-md-6 col-md-offset-3 star">
                        <p className="coal"> coalition</p>
                        <p className="cname red">red menace</p>
                        <Link to="/login" className="btn btn-default btn-lg regBut">login</Link>
                    </div>
                </main>
            );
        }
    }
}

export default MainLogo;