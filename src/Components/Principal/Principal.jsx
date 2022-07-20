import React from 'react'
import { DivPrincipal } from './PrincipalStyled'
import { Main } from './../Main/Main';
import { Filter } from './../Filter/Filter';
import { Carrinho } from './../Carrinho/Carrinho';


export function Principal() {
    return (
        <DivPrincipal>
            <Filter />
            <Main />
            <Carrinho/>
        </DivPrincipal>
    )
}