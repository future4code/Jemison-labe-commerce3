import React from 'react'
// import { MockUp } from '../MockUp/MockUp';
import { CarrinhoDiv, DivItem, Botoes, Xis } from './CarrinhoStyled';


export function Carrinho(props) {
    
    const produtos = props.arrayModificado

    const produtosMapeados = produtos.map((produto, key) => {
        return (
            <DivItem key={produto.id} >
                <img src={produto.foto} alt="a" />
                <p>{produto.preco}</p>
                <p>{produto.nome}</p>
                <p>Qnt: <p>{produto.quant}</p></p>
                <Botoes>
                    <button>+</button>
                    <button>-</button>
                </Botoes>
                <Xis> X </Xis>
            </DivItem>
        )
    })

    return (
        <CarrinhoDiv>
            <h2>Carrinho</h2>
            {produtosMapeados}
            < p > Valor total: <span>11415</span> </p>
        </CarrinhoDiv >
    )
}