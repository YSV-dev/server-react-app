import React from 'react'
import { setLegacy } from '../../../../reducers/auth/appearanceReducer';
import {useDispatch, useSelector} from "react-redux";

function CharacterPage() {
    const appearanceParams = useSelector(state => state.appearanceReducer);
    const Dispatch = useDispatch();

    const gender_input = React.createRef();
    const motherBlend_input = React.createRef();
    const fatherBlend_input = React.createRef();
    const fBlendShape_input = React.createRef();
    const fBlendSkin_input = React.createRef();
    const рairHighlight_input = React.createRef();
    const hairColour_input = React.createRef();

    function onParametrChanged(){
        const gender = gender_input.current.value;
        const motherBlend = motherBlend_input.current.value;
        const fatherBlend = fatherBlend_input.current.value;
        const fBlendShape = fBlendShape_input.current.value;
        const fBlendSkin = fBlendSkin_input.current.value;

        Dispatch(setLegacy(gender, motherBlend, fatherBlend, fBlendShape, fBlendSkin));
        if(window.mp){
            window.mp.trigger('auth:setPlayerAppearance', JSON.stringify({gender, motherBlend, fatherBlend, fBlendShape, fBlendSkin}) );
        }
    }

    return (
        <div>
            <label> gender </label>
            <input onChange={onParametrChanged} ref={gender_input} type="checkbox" placeholder="gender" />
            <label> motherBlend </label>
            <input onChange={onParametrChanged} ref={motherBlend_input} type="number" placeholder="MotherBlend" value={appearanceParams.motherBlend}/>
            <label> fatherBlend </label>
            <input onChange={onParametrChanged} ref={fatherBlend_input} type="number" placeholder="FatherBlend" value={appearanceParams.fatherBlend}/>
            <label> fBlendShape </label>
            <input onChange={onParametrChanged} ref={fBlendShape_input} type="number" placeholder="fBlendShape" value={appearanceParams.fBlendShape}/>
            <label> fBlendSkin </label>
            <input onChange={onParametrChanged} ref={fBlendSkin_input} type="number" placeholder="fBlendSkin" value={appearanceParams.fBlendSkin}/>
            <label> hairHighlight </label>
            <input onChange={onParametrChanged} ref={рairHighlight_input} type="number" placeholder="HairHighlight" value={appearanceParams.hairHighlight}/>
            <label> hairColour </label>
            <input onChange={onParametrChanged} ref={hairColour_input} type="number" placeholder="HairColour" value={appearanceParams.hairColour}/>
        </div>
    )
}

export default CharacterPage
