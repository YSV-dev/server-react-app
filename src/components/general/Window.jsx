import React from 'react' //rfce

function Window(props) {
    let windowType = "form-center";
    
    if(props.type === "center"){
        windowType = "form-center"
    } else if(props.type === "left") {
        windowType = "form-left"
    }

    return (
        <div className="page">
            <div className={windowType}
                style={{width: props.width}}>
                {props.content}
            </div>
        </div>
    )
}

export default Window