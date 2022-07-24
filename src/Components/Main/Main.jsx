
import React, { useState } from 'react'
import { DivPai, DivCards, Quantidade } from './MainStyled'
// import { Card } from '../Card/Card'
import { MockUp } from './../MockUp/MockUp';
import { CardBox } from '../Card/CardStyled';

export function Main(props) {

    const [productsList, setProductsList] = useState(MockUp);

  

    const filterProdutos = (event) => {

        let products = productsList;

        if (event.target.value === 'menor preco') {
            console.log('menor preço');
            // debugger;
            products.sort((a, b) => {
                return a.preco - b.preco;
            });
            setProductsList(products);
        } else if (event.target.value === 'maior preco') {
            console.log('maior preço');
            // debugger;
            products.sort((a, b) => {
                return b.preco - a.preco;
            });
            setProductsList(products);
        }
        // debugger;
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
                <Card meuTeste={MockUp} idCarrinho1={props.idCarrinho} ></Card>
                {productsList.map((produto, index) =>
                    <CardBox key={index}>
                        <h1>{produto.nome}</h1>
                        <img src={produto.foto} alt={produto.nome} />
                        <p>{produto.preco}</p>
                        <button onClick={() => props.addCar1(produto.id)}>Comprar</button>
                    </CardBox>
                )}           


            </DivCards >
        </DivPai>
    )
}