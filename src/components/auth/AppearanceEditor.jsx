import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import Cleave from 'cleave.js/react';
import moment from 'moment';
import ErrorLabel from './ErrorLabel';
import { setErrorText } from '../../reducers/auth/errorReducer';
import CharacterPage from './pages/AppearancePages/CharacterPage';

function AppearanceEditor() {
    const Dispatch = useDispatch();
    const dateBirth_input = React.createRef();
    const errorText = useSelector(state => state.redErrorAuth.text);
    
    function onDateBirthChange(){
        const dateText = dateBirth_input.current.state.value;
        const size = dateText.length;
        var parts = dateText.split('.');
        Dispatch(setErrorText(''));
        if(size>9){ 
            var a = moment([2021, 7, 27]);
            var b = moment([parts[2], parts[1]-1, parts[0]]);

            var diffDuration = moment.duration(a.diff(b));
            if(diffDuration.years() < 18){
                Dispatch(setErrorText('Ваш персонаж не может быть младше 18 лет.'));
            } else if(diffDuration.years() > 60) {
                Dispatch(setErrorText('Ваш персонаж не может быть старше 60 лет.'));
            }
        }

    }

    return (
        <div style={{display: "block", width: "100%", height: "100%"}}>
            <div className='menu'>
                <h3>Создание персонажа</h3>
                <hr/>
                <ErrorLabel state={errorText}/>
                <input type="text" placeholder="Имя и фамилия"/>
                <Cleave ref={dateBirth_input} placeholder="Дата рождения" 
                options={
                    {
                        date: true, 
                        delimiter: '.', 
                        datePattern: ['d', 'm', 'Y'],
                    }
                }
                onKeyUp = {onDateBirthChange} />
                <button className="menu_button_center">Персонаж</button>
                <button className="menu_button_center">Внешний вид</button>
                <button className="menu_button_center">Волосы</button>
                <button className="menu_button_center">Лицо</button>
                <button className="menu_button_center">Одежда</button>
                <div className='footer'>
                    <hr/>
                    <button className="menu_button_center">Завершить</button>
                </div>
            </div>
        
            <div className="content" >
                <CharacterPage/>
            </div>
        </div>
    )
}

export default AppearanceEditor
