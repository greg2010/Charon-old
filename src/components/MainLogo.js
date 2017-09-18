/**
 * Created by Donner on 21.06.2017.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import store from '../index';

class MainLogo extends Component {

    componentWillUnmount() {
        console.log("componentDidUnMount()");
        const action = {
            type: 'MAINPAGE_CLEAR_STATUS',
            payload: {
                discordErrorResponse: '',
                teamspeakErrorResponse: '',
                discordBtn_disabled: '',
                teamspeakBtn_disabled: '',
            }
        };
        store.dispatch(action);
    }






    render() {




        if (localStorage.getItem("currentCharacterId") > 0) {
            return (
                <main>
                    <p>Discord: {this.props.discordStatus}</p>
                    <p>TeamSpeak: {this.props.teamspeakStatus}</p>
                    <div className="col-md-6 col-md-offset-3 star">
                        <p className="coal"> coalition</p>
                        <p className="cname red">red menace</p>
                        <button className="discordBtn btn btn-default btn-lg regBut"  onClick={this.props.discordLogin.bind(this)} disabled={this.props.discordBtn_disabled}>Discord мне запили!</button>
                        <br/>
                        <button className="teamspeakBtn btn btn-default btn-lg regBut" onClick={this.props.teamspeakLogin.bind(this)} disabled={this.props.teamspeakBtn_disabled} >TeamSpeack мне запили!</button>
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