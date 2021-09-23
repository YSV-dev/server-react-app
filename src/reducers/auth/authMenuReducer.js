const SET_MENU_OPENED_ITEM = "SET_MENU_OPENED_ITEM";

const defaultState = {
    opendItemID: -1
}

export default function authMenuReducer(state = defaultState, action){
    switch (action.type){
        case SET_MENU_OPENED_ITEM:
            console.log(action.opendItemID);
            return {
                ...state, 
                opendItemID: action.opendItemID
            }
        default: return state;
    }
}

export const setMenuOpendItem = (opendItemID) => ({
    type: SET_MENU_OPENED_ITEM, 
    opendItemID: opendItemID
});