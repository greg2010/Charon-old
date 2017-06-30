/**
 * Created by Donner on 21.06.2017.
 */
const initialState = {
    loginState: {
        errorResponse : '',
        login: '',
        password: '',
        disabled: ''
    }
};

export default function someReducer(state = initialState, action) {
    if (action.type === 'START') {
        return {
            ...state
        };
    } else if (action.type === 'BTN_LOGIN'){
        const loginState = action.payload;
        return {...state, loginState}
    } else if (action.type === 'CLEAR_STATUS'){
        const loginState = action.payload;
        return {...state, loginState}
    } else if (action.type === 'DISABLE_BTN'){
        const loginState = action.payload;
        return {...state, loginState}
    }
        return state;
}