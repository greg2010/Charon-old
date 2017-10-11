
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
                 //type: 'SET_TEAMSPEAK_AVAIBLE_CHARS',
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
            // const res = error.response;
            /*const action = {
                type: 'BTN_DISCORD_ERR',
                payload: {
                    discordErrorResponse: res,
                    discordBtn_disabled: ''
                }
            };
            store.dispatch(action);*/
        });

}



export default getChars;