import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setErrorText} from "../../../reducers/auth/errorReducer";
import {setStep, setAuthParams} from "../../../reducers/auth/authReducer";
import { loggerTypes, PROXY_EVENT, callbackEvents, createCallback } from '../../../scripts/eventConsts';
import {Link} from "react-router-dom"
import ErrorLabel from '../ErrorLabel';

function RegLoginStep(props) {
    const Dispatch = useDispatch();
    const errorText = useSelector(state => state.redErrorAuth.text);
    let login_state = useSelector(state => state.redAuth.login);
    let password_state = useSelector(state => state.redAuth.password);
    const step = useSelector(state => state.redAuth.step);

    const login_input = React.createRef();
    const password_input = React.createRef();
    const password_confirm_input = React.createRef();
    
    function checkFirstStep(){
        const login = login_input.current.value;
        const password = password_input.current.value;
        const passwordConfirm = password_confirm_input.current.value;

        if(!login){
            return Dispatch(setErrorText('Введите логин'));
        }

        if(login.length < 3){
            return Dispatch(setErrorText('Логин не может быть короче 3 символов'));
        }

        if(!password){
            return Dispatch(setErrorText('Введите пароль'));
        }

        if(password.length < 6){
            return Dispatch(setErrorText('Пароль должен быть длиннее 6 символов'));
        }

        if(passwordConfirm !== password){
            return Dispatch(setErrorText('Пароли не совпадают'));
        }

        let next_step = step+1;
        
        Dispatch(setAuthParams(login, password));

        if(window.mp){
            const loadingCallback = createCallback(callbackEvents.loading, true);
            window.mp.trigger(PROXY_EVENT, 
                JSON.stringify(
                    {
                        input: {login}, 
                        params: {next_step},
                        eventName:'auth:checkLoginInDB', 
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
                <input ref={login_input} type="text" placeholder="Логин" defaultValue={login_state}/>
                <input ref={password_input} type="password" placeholder="Пароль" defaultValue={password_state}/>
                <input ref={password_confirm_input} type="password" placeholder="Повторите пароль" defaultValue={password_state}/>
            </div>
            <div>
                <button className="menu_button_center" onClick={checkFirstStep}>Следующий шаг</button>
                <p className="message">Уже зарегистрированы? <Link onClick={props.undoStep} to="#">Войти</Link></p>
            </div>
        </>
    );
}

export default RegLoginStep