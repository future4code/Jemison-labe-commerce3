import React, {useState} from 'react'
import { CarrinhoDiv, DivItem, Botoes, Xis } from './CarrinhoStyled';


export function Carrinho({arrayModificado}) {
    const [botaoQuant, setBotaoQuant] = useState(1)

    const adicionaQuantMais = () => {
        setBotaoQuant(botaoQuant + 1)
        return botaoQuant
    }
    const adicionaQuantMenos = () => {
        setBotaoQuant(botaoQuant - 1)
        return botaoQuant
    }

    const testeSomando = () => {
        return arrayModificado.reduce((sum, {preco}) => sum + preco, 0)
    }

    const produtosMapeados = arrayModificado.map((produto, key) => {

        return (
            <DivItem key={key} >
                <img src={produto.foto} alt="a" />
                <p>{produto.preco}</p>
                <p>{produto.nome}</p>
                <p>Qnt: <p>{botaoQuant}</p></p>
                <Botoes>
                    <button onClick={adicionaQuantMais}>+</button>
                    <button onClick={adicionaQuantMenos}>-</button>
                </Botoes>
                <Xis> X </Xis>
                {key}
            </DivItem>
        )
    })

    return (
        <CarrinhoDiv>
            <h2>Carrinho ({arrayModificado.length})</h2>
            {produtosMapeados}
            <p> Valor total: {testeSomando()} </p>
        </CarrinhoDiv >
    )
}