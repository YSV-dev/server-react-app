import React from 'react'

function ErrorLabel(props) {
    return (
        <div className="error">{props.state}</div>
    )
}

export default ErrorLabel