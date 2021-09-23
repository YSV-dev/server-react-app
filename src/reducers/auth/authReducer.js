import {Observable} from "../general/Observer";

const SET_AUTH_PARAMS = "SET_AUTH_PARAMS";
const SET_AUTH_PROMO = "SET_AUTH_PROMO";
const SET_AUTH_STEP = "SET_AUTH_STEP";
const SET_AUTH_MAIL = "SET_AUTH_MAIL";

const defaultState = {
    step: 0,
    login: "",
    password: "",
    mail: "",
    promocode: ""
}

const stepObserver = new Observable();

export function subscribeStepObs(fun){
    stepObserver.subscribe(fun);
}

export default function reposeErrorReducer(state = defaultState, action){
    switch (action.type){
        case SET_AUTH_PARAMS:
            return {
                ...state, 
                login: action.login,
                password: action.password
            }
        case SET_AUTH_PROMO:
            return {
                ...state, 
                promocode: action.promocode
            }
        case SET_AUTH_MAIL:
            return {
                ...state, 
                mail: action.mail
            }
        case SET_AUTH_STEP:
            stepObserver.notify(action.step)
            return {
                ...state, 
                step: action.step
            }
        default: return state;
    }
}

export const setAuthParams = (login, password) => ({
    type: SET_AUTH_PARAMS, 
    login: login,
    password: password
});

export const setAuthPromocode = (promocode) => ({
    type: SET_AUTH_PROMO, 
    promocode: promocode
});

export const setAuthMail = (mail) => ({
    type: SET_AUTH_MAIL, 
    mail: mail
});

export const setStep = (step) => ({
    type: SET_AUTH_STEP, 
    step: step
});