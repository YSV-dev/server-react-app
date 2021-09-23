import React from 'react'

function CharacterSlot(props) {
    return (
        <div className='menu-element' style={{background: props.color}}>
            <h1 style={{color: props.textColor}}>Слот #{props.slotNum}</h1>
            <h2 style={{color: props.textColor}}> Имя: <span>{props.name}</span> </h2>
            <h2 style={{color: props.textColor}}> Возраст: <span>{props.age}</span> </h2>
            <h3 style={{color: props.textColor}}> Время в игре: <span>{props.h}</span> ч. <span>{props.m}</span> мин. <span>{props.s}</span> сек.</h3>
        </div>
    )
}

export default CharacterSlot
