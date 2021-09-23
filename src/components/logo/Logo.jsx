import React from 'react';
import logo from "../../resources/images/logo/logo_dark.png";
import logo_text from "../../resources/images/logo/logo_text.png";

//<h1 className="logo">RED CUBE RP</h1>

function Logo(props) {
    let margin_top = props.margin_top ? props.margin_top : '10%';
    let margin_bottom = props.margin_bottom ? props.margin_bottom : '0%';
    return (
        <div style={{flex: props.flex, marginBottom: margin_bottom, marginTop: margin_top, transitionDuration: '1.25s'}}>
            <img src={logo} alt="logo" width="25%" style={{margin: "auto"}}/>
            <img src={logo_text} alt="logo_text" width="50%" style={{margin: "auto"}}/>
        </div>
    )
}

export default Logo
