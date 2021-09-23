import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"
import { setErrorText } from "../../../reducers/auth/errorReducer";
import { loggerTypes, PROXY_EVENT, callbackEvents, createCallback } from '../../../scripts/eventConsts';
import ErrorLabel from '../ErrorLabel';
import MD5 from "crypto-js/md5";


function Login(props) {
    const Dispatch = useDispatch();  
    const errorText = useSelector(state => state.redErrorAuth.text);
    
    const login_input = React.createRef();
    const password_input = React.createRef();

    function onLogin(event){
        event.preventDefault();

        const login = login_input.current.value;
        const password = password_input.current.value;
        Dispatch(setErrorText(''));

        if(!login || login.length < 3){
            return Dispatch(setErrorText('Введите логин'));
        }

        if(!password || password.length < 6){
            return Dispatch(setErrorText('Введите пароль'));
        }
        
        if(window.mp){
            const loadingCallback = createCallback(callbackEvents.loading, true);
            window.mp.trigger(PROXY_EVENT, 
                JSON.stringify(
                    {
                        input: {login, password: MD5(password).toString()}, 
                        eventName:'auth:login', 
                        logger: loggerTypes.general,
                        dataCallbackSuccess: 'hideLoginDialog', //сменить на назначение Данных об аккаунте
                        dataCallbackFail: 'auth:showError',
                        callbackSuccess: [
                            loadingCallback,
                            createCallback('hideLoginDialog'),
                            createCallback('resetCamera'),
                            createCallback('showAllHUD'),
                            createCallback('auth:clearError')
                        ],
                        callbackFail: [
                            loadingCallback
                        ]
                    }) 
                );
        }
    }

    return (
        <>
            <ErrorLabel state={errorText}/>
            <div className="content-form">
                <input ref={login_input} type="text" placeholder="Логин"/>
                <input ref={password_input} type="password" placeholder="Пароль"/>
            </div>
            <div>
                <button className="menu_button_center" onClick={onLogin}>Войти</button>
                <p className="message">Не зарегистрированы? <Link onClick={props.nextStep} to="#"> создать аккаунт</Link></p>
            </div>
        </>
    )
}

export default Login