const ADD_PROCESS = "ADD_PROCESS";
const REMOVE_PROCESS = "REMOVE_PROCESS";

const defaultState = {
    isLoading: false,
    proccesses: []
}

function setLoadingStatus(state){
    state.isLoading = state.proccesses.length > 0? true : false;
    return state;
}

export default function reposeErrorReducer(state = defaultState, action){
    switch (action.type){
        case ADD_PROCESS:
            if(state.proccesses.indexOf(action.key) === -1){
                state.proccesses.push(action.key)
            } 
            state = setLoadingStatus(state);
            return state;
        case REMOVE_PROCESS:
            var index = state.proccesses.indexOf(action.key);
            console.log(index);
            if( index !== -1){
                state.proccesses.splice(index, 1);
            } 
            state = setLoadingStatus(state);
            return state;
        default: return state;
    }
}

export const addProcess = (key) => ({type: ADD_PROCESS, key: key});
export const removeProcess = (key) => ({type: REMOVE_PROCESS, key: key});