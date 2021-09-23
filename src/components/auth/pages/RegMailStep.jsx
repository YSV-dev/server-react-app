import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setStep, setAuthMail} from "../../../reducers/auth/authReducer";
import { loggerTypes, PROXY_EVENT, callbackEvents, createCallback } from '../../../scripts/eventConsts';
import ErrorLabel from '../ErrorLabel';

function RegPromoStep(props) {
    const Dispatch = useDispatch();
    const mail_input = React.createRef();
    const step = useSelector(state => state.redAuth.step);
    const mail_state = useSelector(state => state.redAuth.mail);
    const errorText = useSelector(state => state.redErrorAuth.text);

    function checkStep(){
        const mail = mail_input.current.value;
        Dispatch(setAuthMail(mail));

        let next_step = step+1;

        if(window.mp){
            const loadingCallback = createCallback(callbackEvents.loading, true);
            window.mp.trigger(PROXY_EVENT,
                JSON.stringify(
                    {
                        input: {mail}, 
                        params: {next_step},
                        eventName:'auth:checkMailInDB', 
                        logger: loggerTypes.general,
                        dataCallbackSuccess: 'auth:goToStep',
                        dataCallbackFail: 'auth:showError',
                        callbackSuccess: [
                            loadingCallback,
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
                <p>Для повышения уровня безопасности, рекомендуем ввести адрес вашего почтового ящика.</p>
                <input ref={mail_input} type="text" placeholder="E-mail" defaultValue={mail_state}/>
            </div>
            <div>
                <button className="menu_button_center" onClick={checkStep}>Следующий шаг</button>
                <button className="menu_button_center" onClick={props.undoStep}>Предыдущий шаг</button>
            </div>
        </>
    )
}

export default RegPromoStep
