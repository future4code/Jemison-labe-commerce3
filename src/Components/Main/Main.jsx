
import React, { useState } from 'react'
import { DivPai, DivCards, Quantidade } from './MainStyled'
import { MockUp } from './../MockUp/MockUp';
import { Card } from './../Card/Card';

export function Main(props) {

    const [productsList, setProductsList] = useState(MockUp);


    const filterProdutos = (event) => {

        let products = productsList;

        if (event.target.value === 'menor preco') {
            products.sort((a, b) => {
                return a.preco - b.preco;
            });
            setProductsList(products);
        } else if (event.target.value === 'maior preco') {
            products.sort((a, b) => {
                return b.preco - a.preco;
            });
            setProductsList(products);
        }
    };


    return (
        <DivPai>
            <Quantidade>
                <p>Quantidade de produtos: {props.listaTotalProdutos.length}</p>
                <form>
                    <label for="Ordem">Ordenar: </label>
                    <select onChange={filterProdutos}>
                        <option>Selecione</option>
                        <option value="menor preco">Menor preço</option>
                        <option value="maior preco" >Maior preço</option>
                    </select>
                </form>
            </Quantidade>
            <DivCards> 
                <Card meuTeste={MockUp} idCarrinho1={props.idCarrinho}></Card>
            </DivCards >
        </DivPai >
    )
}