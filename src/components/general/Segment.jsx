import React from 'react'

function Segment(props) {
    const segmentStyle = {
        display: (props.state === props.valueState? "flex":"none"), 
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: "space-between",
        paddingBottom: '30%'
    }

    return (
        <div style={segmentStyle}>
            {props.content}
        </div>
    )
}

export default Segment
