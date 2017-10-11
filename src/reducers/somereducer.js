/**
 * Created by Donner on 21.06.2017.
 */
const initialState = {

    loginState: {
        errorResponse : '',
        login: '',
        password: '',
        disabled: ''
    },

    mainPageState : {
        discordBtn_disabled: '',
        teamspeakBtn_disabled: '',
        discordErrorResponse: '',
        teamspeakErrorResponse: '',

    },

    teamSpeakPageState :{
    chars: [],
    status: '',
    deleteBtn_disabled: '1',
    registerBtn_disabled: '1',
    teamSpeakUserName:'',
    }

};

export default function someReducer(state = initialState, action) {
/*    if (action.type === 'START') {
        const mainPageState ={
            discordBtn_disabled: '',
            teamspeakBtn_disabled: '',
            discordErrorResponse: '',
            teamspeakErrorResponse: '',

        };

        const teamSpeakPageState={
            chars: [],
            status: '',
            deleteBtn_disabled: '1',
            registerBtn_disabled: '1',
            teamSpeakUserName:'',
        };
        return {
            ...state, mainPageState, teamSpeakPageState

        };
    } */

    if (action.type === 'DISPATCH_TEAMSPEAK'){

        //const teamSpeakPageState = Object.assign(state.teamSpeakPageState,action.payload);
        // console.log('storage state', {...state.teamSpeakPageState});
        const teamSpeakPageState = action.payload;
        return {...state, teamSpeakPageState}
    } else if (action.type === 'BTN_LOGIN'){
        const loginState = action.payload;
        return {...state, loginState}
    } else if (action.type === 'CLEAR_STATUS'){
        const loginState = action.payload;
        return {...state, loginState}
    } else if (action.type === 'DISABLE_BTN'){
        const loginState = action.payload;
        return {...state, loginState}
    } else if (action.type === 'DISCORD_DISABLE_BTN'){
        const mainPageState = action.payload;
        return {...state, mainPageState}
    } else if (action.type === 'MAINPAGE_CLEAR_STATUS'){
        const mainPageState = action.payload;
        return {...state, mainPageState}
    } else if (action.type === 'BTN_DISCORD_ERR'){
        const mainPageState = action.payload;
        return {...state, mainPageState}
    } else if (action.type === 'TEAMSPEAK_DISABLE_BTN') {
        const mainPageState = action.payload;
        return {...state, mainPageState};
    } else if (action.type === 'BTN_TEAMSPEAK_ERR') {
        const mainPageState = action.payload;
        return {...state, mainPageState}
    }
        return state;
}