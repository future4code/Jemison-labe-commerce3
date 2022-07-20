import React, {useState} from 'react'
import { CardBox } from './CardStyled';

export function Card({meuTeste}) {

    // const [addCarrinho, setAddCarrinho] = useState(false)

    // const arrayCarrinho = [...arrayCartas]

    const adicionarCarrinho = (e) => {
        e.preventDefault();
        const novoItemCarrinho = {meuTeste}
        console.log(novoItemCarrinho)
    }

    const arrayCartas = meuTeste.map((item, index) => {
        return (
            <CardBox>
                <h1>{item.nome}</h1>
                <p>{item.foto}</p>
                <p>{item.preco}</p>
                <button onClick={adicionarCarrinho}>Comprar</button>
            </CardBox>
        )
    })

    return (
        <div>{arrayCartas}</div>
    )
}