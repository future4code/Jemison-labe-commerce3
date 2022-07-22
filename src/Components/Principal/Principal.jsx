import React, { useState } from 'react'
import { DivPrincipal } from './PrincipalStyled'
import { Main } from './../Main/Main';
import { Filter } from './../Filter/Filter';
import { Carrinho } from './../Carrinho/Carrinho';
import { MockUp } from './../MockUp/MockUp';

export function Principal() {

    const meuTeste = MockUp

    const [addCarrinho, setAddCarrinho] = useState([{}])
    const adicionarCarrinho = (id) => {
        addCarrinho.map((item) => {
            if (id == item.id) {
                meuTeste.quant++
                return addCarrinho
            } else {
                const novoCarrinho = meuTeste[id]
                const listaCarrinho = [...addCarrinho, novoCarrinho]
                setAddCarrinho(listaCarrinho)
                return addCarrinho
            }
        })
    }
    console.log(addCarrinho)
    return (
        <DivPrincipal>
            <Filter />
            <Main addCar={adicionarCarrinho} />
            <Carrinho arrayModificado={addCarrinho} />
        </DivPrincipal>
    )
}

