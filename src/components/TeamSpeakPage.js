import React, {Component} from 'react';
import {connect} from 'react-redux';
import Parser from 'html-react-parser';
// import { render } from 'react-dom';
import getChars from './Teamspeak'
import {getTSstatus, putAthuReuest} from './Teamspeak';


class TeamSpeakPage extends Component {

    componentWillMount() {

        if ((localStorage.getItem("accessToken")) && (this.props.teamspeakCharsAvailabe === '')) {

            console.log('wherin');
            getChars();
            getTSstatus();
        }

    };


    render() {

        let names = [];
        let ids = [];
        let select = '';

        if (!(this.props.teamspeakCharsAvailabe === '')) {

            this.props.teamspeakCharsAvailabe.forEach(function (item) {
                names.push(item[0]);
                ids.push(item[1]);
            });
            console.log('Names: ', names, ' IDs ', ids);

            names.forEach(function (item, i) {
                select += '<option value="' + ids[i] + '">' + item + '</option>';
            });
            console.log('Select ', select);
        }



        return (
            <div className="teamSpeakCont">

                <p>TeamSpeak registration state: {this.props.teamspeakRegistarationStatus}</p>




                    <span>Available characters for register at TeamSpeak:</span>
                    <select id='tsReg' name='tsReg'>
                        {Parser(select)}
                    </select>

                    <button disabled={this.props.tsRegBtndisabled} onClick={putAthuReuest}>Регистрируй меня полностью!</button> <span>Я так хочу!:</span>

                <br/>
                <p>Тут будет какой то текст про удаление</p>
                <button disabled={this.props.tsDelBtndisabled}>Delete TS reg</button>

            </div>
        );
    }
}


const mapStateToProps = function (store) {
    return {
        teamspeakCharsAvailabe: store.somereducer.teamSpeakPageState.chars,
        teamspeakRegistarationStatus: store.somereducer.teamSpeakPageState.status,
        tsRegBtndisabled: store.somereducer.teamSpeakPageState.registerBtn_disabled,
        tsDelBtndisabled: store.somereducer.teamSpeakPageState.deleteBtn_disabled,

    }
};
export default connect(mapStateToProps)(TeamSpeakPage);
// export default TeamSpeakPage;