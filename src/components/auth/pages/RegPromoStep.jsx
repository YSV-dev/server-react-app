import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setStep} from "../../../reducers/auth/authReducer";
import { loggerTypes, PROXY_EVENT, callbackEvents, createCallback } from '../../../scripts/eventConsts';
import ErrorLabel from '../ErrorLabel';
import MD5 from "crypto-js/md5";

function RegPromoStep(props) {
    const Dispatch = useDispatch();
    const promocode_input = React.createRef();
    const step = useSelector(state => state.redAuth.step);
    const promocode_state = useSelector(state => state.redAuth.promocode);
    const email_state = useSelector(state => state.redAuth.mail);
    const login_state = useSelector(state => state.redAuth.login);
    const password_state = useSelector(state => state.redAuth.password);

    const errorText = useSelector(state => state.redErrorAuth.text);

    function checkStep(){
        const promocode = promocode_input.current.value;

        let next_step = step+1;

        if(window.mp){
            const loadingCallback = createCallback(callbackEvents.loading, true);
            const registartionEvent = createCallback('auth:sendRegistration', false, null, 
                {
                    input: {
                        promocode, 
                        login: login_state,
                        password: MD5(password_state).toString(),
                        email: email_state
                    }
                }
            );
            window.mp.trigger(PROXY_EVENT, 
                JSON.stringify(
                    {
                        input: {promocode}, 
                        params: {next_step},
                        eventName:'auth:checkPromoInDB', 
                        logger: loggerTypes.general,
                        dataCallbackSuccess: 'auth:', 
                        dataCallbackFail: 'auth:showError',
                        callbackSuccess: [
                            loadingCallback,
                            registartionEvent,
                            createCallback('auth:clearError')
                        ],
                        callbackFail: [
                            loadingCallback
                        ]
                    })
                );
        } else {
            Dispatch(setStep(next_step));
        }
    }

    return (
        <>
            <div className="content-form">
                <ErrorLabel state={errorText}/>
                <p>Если у вас есть промокод, то вы можете ввести его. <br/> Учтите, что вы не сможете потом его заменить на другой!</p>
                <input ref={promocode_input} type="text" placeholder="Промокод" defaultValue={promocode_state}/>
            </div>
            <div>
                <button className="menu_button_center" onClick={checkStep}>Зарегистрироваться</button>
                <button className="menu_button_center" onClick={props.undoStep}>Предыдущий шаг</button>
            </div>
        </>
    )
}

export default RegPromoStep
