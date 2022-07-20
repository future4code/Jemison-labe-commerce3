import React, {useState} from 'react'
import { CardBox } from './CardStyled';

export function Card({meuTeste}) {

    const [addCarrinho, setAddCarrinho] = useState({ })

    const adicionarCarrinho = (e) => {
        e.preventDefault();
        setAddCarrinho({        
            nome: meuTeste.nome,
            foto: meuTeste.foto,
            preco: meuTeste.preco
        })
        const novoItemCarrinho = {meuTeste}
        console.log(addCarrinho)
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