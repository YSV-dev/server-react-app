import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import authMenuReducer, { setMenuOpendItem } from '../../../reducers/auth/authMenuReducer';
import down_folder from "../../../resources/images/auth/menu_components/redFolderDown.png";
import up_folder from "../../../resources/images/auth/menu_components/redFolderUp.png";
import up_folder_ from "../../../resources/images/auth/menu_components/redFolderUp_.png";
import paper from "../../../resources/images/auth/menu_components/TEST.png";
import VIPdown_folder from "../../../resources/images/auth/menu_components/VIPFolderDown.png";
import VIPup_folder from "../../../resources/images/auth/menu_components/VIPFolderUp.png";
import VIPup_folder_ from "../../../resources/images/auth/menu_components/VIPFolderUp_.png";

function AuthFolder(props) {
    const [openState, setOpenState] = useState("");
    const opendItemIDState = useSelector(state => state.authMenuReducer.opendItemID);
    const Dispatch = useDispatch();

    const curStyle = props.type == 0? elementsRed : elementsVIP;
    const X = opendItemIDState===props.id? '70%' : props.posX;
    const Y = opendItemIDState===props.id? '50%' : props.posY;
    const Z = opendItemIDState===props.id? '100' : props.id;
    const objTransform = opendItemIDState===props.id? 
        `rotateZ(${-props.tableRotZ}deg) rotateX(0deg) rotateY(0.05deg) scale(2)`:
        `rotateZ(0deg) rotateX(15deg) rotateY(0.05deg) scale(1)`
        ;
    

    function handleOpen(e) {
        console.log(opendItemIDState);
        Dispatch(setMenuOpendItem(props.id));
    }

    return (
        <>
            <div onClick={handleOpen} 
                className={'authFolder ' + (opendItemIDState===props.id? "opened": "")} 
                style={{
                    // transform: objTransform,
                    border: '1px solid #ffee00'
                    }}>
                <div className='element back' style={{backgroundImage: `url(${curStyle.down})`}}/>
                <div className='element paper' style={{backgroundImage: `url(${curStyle.paper})`}}/>
                <div className='element up_' style={{backgroundImage: `url(${curStyle.up_})`}}/>
                <div className='element up'  style={{backgroundImage: `url(${curStyle.up})`}}/>
            </div>            
        </>
    )
}

const elementsRed = {
    down: down_folder,
    paper: paper,
    up_: up_folder_,
    up: up_folder
}

const elementsVIP = {
    down: VIPdown_folder,
    paper: paper,
    up_: VIPup_folder_,
    up: VIPup_folder
}

export default AuthFolder
