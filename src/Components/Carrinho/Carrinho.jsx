import React from 'react'
import { CarrinhoDiv } from './CarrinhoStyled';


export function Carrinho() {
    return (
        <CarrinhoDiv>
            <h2>Carrinho</h2>
            <p>Valor total: <span>9</span> </p>
        </CarrinhoDiv>
    )
}