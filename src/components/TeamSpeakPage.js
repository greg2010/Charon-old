import React, { Component } from 'react';
import {connect} from 'react-redux';
import getChars from './Teamspeak'
import Parser from 'html-react-parser';
// import { render } from 'react-dom';

class TeamSpeakPage extends Component {

    componentWillMount(){

      getChars();




    };


    render() {

        let names = [];
        let ids = [];
        let select = '';
        this.props.teamspeakCharsAvailabe.forEach(function(item) {
            names.push(item[0]);
            ids.push(item[1]);
        });
        console.log('Names: ',names,' IDs ',ids);

        names.forEach(function (item,i) {
            select +='<option value="'+ids[i]+'">'+item+'</option>';
        });
        console.log('Select ',select);

        return (
            <div className="teamSpeakCont">

               <p>TeamSpeak registration state:</p>


                <form action="">

                    <span>Avaibale characters to register at TeamSpeak:</span>
                    <select>
                        {Parser(select)}
                    </select>
                </form>







                <button disabled='1'>Delete TS reg</button>


            </div>
        );
    }
}


const mapStateToProps = function (store) {
    return {
         teamspeakCharsAvailabe: store.somereducer.teamSpeakPageState.chars,
    }
};
export default connect(mapStateToProps)(TeamSpeakPage);
// export default TeamSpeakPage;