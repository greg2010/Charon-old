/**
 * Created by Donner on 21.06.2017.
 */
const initialState = [];

export default function somereducer(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    }
    return state;
}