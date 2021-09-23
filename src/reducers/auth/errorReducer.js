const SET_ERROR_TEXT = "SET_ERROR_TEXT";

const defaultState = {
    text: ""
}

export default function reposeErrorReducer(state = defaultState, action){
    switch (action.type){
        case SET_ERROR_TEXT:
            return {
                ...state, 
                text: action.text
            }
        default: return state;
    }
}

export const setErrorText = (text) => ({type: SET_ERROR_TEXT, text: text});