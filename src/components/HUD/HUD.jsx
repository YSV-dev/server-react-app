import React from 'react'
import {useSelector} from "react-redux";
import logo_loading from "../../resources/images/logo/logo_loading.gif";

function HUD() {
    const loading = useSelector(state => state.loadingReducer.isLoading);

    return (
        <>
        {
            loading?
            <img src={logo_loading} alt='LOADING' className='loading-icon'/>:
            null
        }     
        </>
    );
}

export default HUD;