import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux";
import bgImg from "../../../resources/images/bg/general/bg.png";
import { useMousePosition } from '../../../scripts/useMousePosition';
import useWindowDimensions from '../../../scripts/getWindowDimensions.js';
import CharacterSlot from '../CharacterSlot.jsx';


function SelectSlot() {
    const position = useMousePosition();
    const { height, width } = useWindowDimensions();
    const centerPosition = {x: (position.x * 100)/width - 50, y: (position.y * 100)/height - 50};
    const backgroundRef = React.createRef();
    const tableRef = React.createRef();
    const opendItemIDState = useSelector(state => state.authMenuReducer.opendItemID);

    const tableRotZ = -0;

    useEffect(() => {
        const bg = backgroundRef.current;
        const table = tableRef.current;

        const speed = 0.15;

        const positionOffset = {
            x: centerPosition.x * -speed,
            y: centerPosition.y * -speed
        }

        bg.style.backgroundPosition = positionOffset.x + '% ' + positionOffset.y + '% ';
        table.style.transform = `translate(${positionOffset.x}%, ${positionOffset.y}%) rotateZ(${tableRotZ}deg)`;
    });

    function closeItem(){
        //Dispatch(setMenuOpendItem(-300));
    }
    
    // ещё тень можно херануть наверх для динамики
    return (
        <div onClick={closeItem} className="auth">
            <div ref={backgroundRef} className="form-full-screen" style={{backgroundImage: `url(${bgImg})`,  backgroundSize: '25%', overflow: 'hidden'}}>
                <div className='account-menu' ref={tableRef} style={{
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: '2fr 1fr',
                    }}>
                        <CharacterSlot color='#c1c2c6' textColor='#191919' slotNum='1' name='Gordon Freeman' age='32' h='56' m='17' s='18'/>
                        <CharacterSlot color='#c1c2c6' textColor='#191919' slotNum='2' name='Max Paine' age='37' h='77' m='27' s='49'/>
                        <CharacterSlot color='#c1c2c6' textColor='#191919' slotNum='3' name='Vlad Lem' age='43' h='0' m='25' s='7'/>
                        
                        <div className='menu-element' style={{gridColumnStart: 1, gridColumnEnd: 3, background: '#191919'}}>
                            <h1 style={{color: '#c1c2c6'}}>Настройки</h1>
                        </div>
                        <div className='menu-element' style={{background: '#a51d1d'}}>
                            <h1 style={{color: '#c1c2c6'}}>Статистика</h1>
                        </div>
                        
                        
                </div>
            </div>
        </div>
    )
}

export default SelectSlot