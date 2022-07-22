import React from 'react'
import { CardBox } from './CardStyled';

export function Card(props) {

    
    const arrayCartas = props.meuTeste.map((item) => {
        return (
            <CardBox>
                <h1>{item.nome}</h1>
                <img src={item.foto} alt={item.nome} />
                <p>{item.preco}</p>
                <button onClick={() => props.addCar1(item.id)}>Comprar</button>
            </CardBox>
        )
    })

    return (
        <div>{arrayCartas}</div>
    )
}