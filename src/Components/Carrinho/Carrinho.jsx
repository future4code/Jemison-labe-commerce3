import React from 'react'
import { CarrinhoDiv } from './CarrinhoStyled';
import { MockUp } from './../MockUp/MockUp';
import { CardCarrinho } from './../CardCarrinho/CardCarrinho';


export function Carrinho() {

    return (
        <CarrinhoDiv>
            <CardCarrinho meuCardCarrinho={MockUp} />
        </CarrinhoDiv>
    )
}