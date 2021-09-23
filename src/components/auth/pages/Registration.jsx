import React from 'react';
import {Window, Segment} from '../../general/';
import {useSelector, useDispatch} from "react-redux";
import {Login, RegLoginStep, RegPromoStep, RegMailStep, SelectSlot} from './';
import Logo from '../../logo/Logo';
import { setErrorText } from '../../../reducers/auth/errorReducer';
import { setStep, subscribeStepObs } from '../../../reducers/auth/authReducer';

let step = 0;

function Registration() {
    const Dispatch = useDispatch();
    const stepState = useSelector(state => state.redAuth.step);
    const KEY_ENTER = 13;
    
    subscribeStepObs(changeStepEvent);
    
    function changeStepEvent(newStep){
        
        if(step !== newStep){
            step = newStep;
        }
    }
    
    const win_params = [
        {width: "30%", type: "center", logoMargin_top: '40%', logoMargin_bottom: '0'},
        {width: "30%", type: "center"},
        {width: "30%", type: "center"},
        {width: "30%", type: "center"},
        {width: "30%", type: "center"}
    ];

    function clearError(){
        Dispatch(setErrorText(''));
    }

    //#region step functions
    function toStep(nextStep){
        clearError();
        Dispatch(setStep(nextStep));
    }

    function nextStep(){
        clearError();
        const nextStep = stepState + 1;
        Dispatch(setStep(nextStep));
    }

    function undoStep(){
        clearError();
        const nextStep = stepState - 1;
        Dispatch(setStep(nextStep));
    }
    //#endregion

    const handleKeyDown = (event) => {
        if(event.keyCode === KEY_ENTER){
            if(step===0){
                toStep(1);
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    

    const enterTextContent = 
    <>
        <div style={{ marginTop: '5%', fontSize: '18px', animation: 'blinker 1.25s infinite', animationTimingFunction: 'cubic-bezier(0.25,0.5,0.25,0.5)'}}>
            <p>Нажмите клавишу [Enter] для продолжения</p>
        </div>
    </>
    
    const content = 
    <div className="content">
        <Logo flex={"0 0 30%"} margin_bottom = {win_params[step].logoMargin_bottom} margin_top = {win_params[step].logoMargin_top}/>
        <div style={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
                flexDirection: 'column'
            }}>
            <Segment content={enterTextContent} state={step} valueState={0}/>
            <Segment content={<Login nextStep={nextStep}/>} state={step} valueState={1}/>
            <Segment content={<RegLoginStep undoStep={undoStep} nextStep={nextStep}/>} state={step} valueState={2}/>
            <Segment content={<RegMailStep undoStep={undoStep} nextStep={nextStep}/>} state={step} valueState={3}/>
            <Segment content={<RegPromoStep undoStep={undoStep} nextStep={nextStep}/>} state={step} valueState={4}/>
        </div>
    </div>;
    
    return (
        <div className="auth">
        <Window width={win_params[step].width} content={content} type={win_params[step].type}/>
        </div>
    )
    
}

export default Registration