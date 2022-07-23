import React from 'react'
import { DivPai, DivCards, Quantidade } from './MainStyled'
import { Card } from '../Card/Card'
import { MockUp } from './../MockUp/MockUp';

export function Main(props) {

    return (
        <DivPai>
            <Quantidade>
                <p>Quantidade de produtos: <span>10</span></p>
                <form>
                    <label for="Ordem">Ordenar: </label>
                    <select id="ordens">
                        <option value="menor">Menor preço</option>
                        <option value="maior">Maior preço</option>
                    </select>
                </form>
            </Quantidade>
            <DivCards>
                {props.produtos.map((produto, index) => <Card nome={produto.nome} preco={produto.preco} key={index} meuTeste={MockUp} addCar1={props.addCar}></Card>)}
            </DivCards >
        </DivPai>
    )
}