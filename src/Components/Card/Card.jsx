import React from 'react'
import { CardBox, Fdp } from './CardStyled';

export function Card(props) {


    const arrayCartas = props.meuTeste.map((item, index) => {
        return (
            <CardBox key={index}>
                <h1>{item.nome}</h1>
                <img src={item.foto} alt={item.nome} />
                <p>{item.preco}</p>
                <button onClick={() => props.idCarrinho1(item.id)}>Comprar</button>
            </CardBox>
        )
    })

    return (
        <Fdp>
            {arrayCartas}
        </Fdp>
    )
}