import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';


class Auth extends Component {

    render() {
/*

                axios.post('http://api.red.greg2010.me/v1/auth/login/sso', {
                    authCode: this.props.location.query.code
                })
        */
        console.log(this.props.location.query.code);

        axios({
            method: 'post',
            url: 'https://api.red.greg2010.me/v1/auth/login/sso',
            crossDomain: true,
            headers: {
                /*'Content-Type' : 'application/json',*/
                "Access-Control-Allow-Origin": "*",
                /*"Origin" : "http://coalition.alliance.red:3000"*/
            },


            data: {
                "authCode": this.props.location.query.code
            }

        })
            .then(function (response) {
                console.log(response);

                if (response.status === 200){

                    localStorage.setItem('accessToken', response.data.data.accessToken);
                    localStorage.setItem('refreshToken', response.data.data.refreshToken);
                    localStorage.setItem('currentCharacterId', response.data.data.currentCharacterId);
                    axios.get('https://esi.tech.ccp.is/latest/characters/names/', {
                        params: {
                            character_ids: localStorage.getItem("currentCharacterId"),
                            datasource: "tranquility"
                        }
                    })
                        .then(function (response) {
                            console.log(response.data[0].character_name);
                            localStorage.setItem('currentCharacterName',response.data[0].character_name);
                            browserHistory.push('/');

                        })
                        .catch(function (error) {
                            console.log(error.response);
                            console.log(error);

                        });





                }

            })
            .catch(function (error) {
                console.log(error.response.data.reason);
                console.log(error);
                document.getElementById("status").innerText = error.response.data.reason;

            });

        return (
            <div className="auth">

                <h1 id="status">Ждём тупой драйвер</h1>
                <p>

                    <p> { localStorage.getItem('accessToken') } </p>
                    <p> { localStorage.getItem('refreshToken') } </p>
                    <p> { localStorage.getItem('currentCharacterId') } </p>

                </p>
            </div>
        );


    }
}

export default Auth;