/**
 * Created by Donner on 21.06.2017.
 */

import React, { Component } from 'react';
import MainLogo from './MainLogo';
import store from '../index';
import {connect} from 'react-redux';
import axios from 'axios';

class Home extends Component {

    discordClick(){
        console.log('discord click');

        const discordDisableBtn = {
            type: 'DISCORD_DISABLE_BTN',
            payload: {
                discordBtn_disabled: 'disabled'
            }
        };

        store.dispatch(discordDisableBtn);

        const config = {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'bearer '+localStorage.getItem("accessToken"),
            }
        };
        console.log('discord point');
        axios.post('https://api.red.greg2010.me/v1/user/self/logout',{}, config)
            .then(function (response) {
                console.log('discord ok');
                console.log(response);
                const action = {
                    type: 'BTN_DISCORD_ERR',
                    payload: {
                        discordErrorResponse: response.status,
                        discordBtn_disabled: ''
                    }
                };
                store.dispatch(action);

            })
            .catch(function (error) {
                console.log('discord error');
                console.log(error.response);
                const res = error.response;
                const action = {
                    type: 'BTN_DISCORD_ERR',
                    payload: {
                        discordErrorResponse: res,
                        discordBtn_disabled: ''
                    }
                };
                store.dispatch(action);
            });


    }

    teamspeakClick(){
        console.log('teamspeak click');

        const teamspeakDisableBtn = {
            type: 'TEAMSPEAK_DISABLE_BTN',
            payload: {
                teamspeakBtn_disabled: 'disabled'
            }
        };

        store.dispatch(teamspeakDisableBtn);

        const config = {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'bearer '+localStorage.getItem("accessToken"),
            }
        };
        console.log('teamspeak point');
        axios.post('https://api.red.greg2010.me/v1/user/self/logout',{}, config)

            .then(function (response) {
                console.log('teamspeak ok');
                console.log(response);
                const action = {
                    type: 'BTN_TEAMSPEAK_ERR',
                    payload: {
                        teamspeakErrorResponse: response.status,
                        teamspeakBtn_disabled:'',
                    }
                };
                store.dispatch(action);

            })
            .catch(function (error) {
                console.log('teamspeak error');
                console.log(error.response);
                const res = error.response;
                const action = {
                    type: 'BTN_TEAMSPEAK_ERR',
                    payload: {
                        teamspeakErrorResponse: res,
                        teamspeakBtn_disabled: ''
                    }
                };
                store.dispatch(action);
            });









    }

    render() {
        return (
            <div className="mainWrap">
                <MainLogo discordLogin={this.discordClick}
                          discordBtn_disabled={this.props.discordBtn_disabled}
                          discordStatus={this.props.discordStatus}
                          teamspeakLogin={this.teamspeakClick}
                          teamspeakBtn_disabled={this.props.teamspeakBtn_disabled}
                          teamspeakStatus={this.props.teamspeakStatus}
                />


            </div>
        );
    }
}


const mapStateToProps = function (store) {
    return {
       /* sLogin: store.somereducer.loginState.errorResponse,
        login: store.somereducer.loginState.login,
        password: store.somereducer.loginState.password,*/
        discordBtn_disabled: store.somereducer.mainPageState.discordBtn_disabled,
        discordStatus: store.somereducer.mainPageState.discordErrorResponse,
        teamspeakBtn_disabled: store.somereducer.mainPageState.teamspeakBtn_disabled,
        teamspeakStatus: store.somereducer.mainPageState.teamspeakErrorResponse,

    }
};

export default connect(mapStateToProps)(Home);
