import React from 'react'
import { CardBox } from './CardStyled';


export function Card(props) {
    return (
        <CardBox>
            <h1>{props.nome}</h1>
            <p>foto</p>
            <p>{props.preco}</p>
        </CardBox>
    )
}