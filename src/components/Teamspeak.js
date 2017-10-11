
import axios from 'axios';
import store from '../index';




/*
const getStatus = () => {


};
*/



const getChars = () => {
    console.log('gettingChars');

    const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization':'bearer '+localStorage.getItem("accessToken"),
        }
    };
    console.log('axios chars request');
    axios.get(process.env.REACT_APP_BACKEND_BASE_URL+'/v1/user/self/eve', config)
        .then(function (response) {
            console.log('axios chars response');
            console.log(response);
           const charList = response.data.data.map(function(char){
               return [char['characterName'], char['characterId']];
           });

           console.log(charList);
             const action = {
                 type: 'DISPATCH_TEAMSPEAK',
                 payload: {
                     chars: charList,
                 }
             };
             store.dispatch(action);

        })
        .catch(function (error) {
            console.log('axios chars error');
            console.log(error.response);
        });

};


export const getTSstatus = () => {
    console.log('getTSstatus');

    const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization':'bearer '+localStorage.getItem("accessToken"),
        }
    };
    console.log('getTSstatus request');
    axios.get(process.env.REACT_APP_BACKEND_BASE_URL+'/v1/user/self/teamspeak', config)
        .then(function (response) {
            console.log('getTSstatus response');
            console.log(response);
            const status = response.status;

            console.log(status);
            const action = {
                type: 'DISPATCH_TEAMSPEAK',
                payload: {
                    status: status,
                }
            };
            store.dispatch(action);

        })
        .catch(function (error) {
            console.log('getTSstatus error');
            console.log(error.response.statusText);
            const action = {
                type: 'DISPATCH_TEAMSPEAK',
                payload: {
                    status: error.response.statusText,
                }
            };
            store.dispatch(action);




        });

};


export default getChars;