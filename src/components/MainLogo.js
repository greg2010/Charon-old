/**
 * Created by Donner on 21.06.2017.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

class MainLogo extends Component {
    render() {
        return (
            <main>
                <div className="col-md-6 col-md-offset-3 star">
                    <p className="coal"> coalition</p>
                    <p className="cname red">red menace</p>
                    <Link to="/reg" className="btn btn-default btn-lg regBut">registration</Link>
                </div>
            </main>
        );
    }
}

export default MainLogo;