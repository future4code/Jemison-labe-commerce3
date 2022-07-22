import React , {useState} from 'react'
import { DivItem, Botoes, Xis } from './CardCarrinhoStyled';

export function CardCarrinho(props) {

    const [valor, setValor] = useState();
    const quantidade = 3;

    return (
        <DivItem>
            <img src="https://imgur.com/AhomHNc" alt="a" />
            <a>{props.valor}</a>
            <p>Nome Maior Teste</p>
            <a>Qnt: <span>{props.quantidade}</span></a>
            <Botoes>
                <button>+</button>
                <button>-</button>
            </Botoes>
            <Xis> X </Xis>
        </DivItem>
    )

    // {quantidade} vai ser o .lenght do array 
}