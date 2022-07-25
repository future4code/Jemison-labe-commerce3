import React, { useState, useMemo } from 'react'
import { DivPrincipal } from './PrincipalStyled'
import { Main } from './../Main/Main';
import { Filter } from './../Filter/Filter';
import { Carrinho } from './../Carrinho/Carrinho';
import { MockUp } from './../MockUp/MockUp';

export function Principal() {

    const meuTeste = MockUp

    const [buscaNome, setBuscaNome] = useState('');
    const [precoMin, setPrecoMin] = useState(0);
    const [precoMax, setPrecoMax] = useState(999999999);
    const [listaDeProdutosFiltrada, setListaDeProdutosFiltrada] = useState([]);

    const [addCarrinho, setAddCarrinho] = useState([{}])

    const adicionarCarrinho = (id) => {
        addCarrinho.map((item, key) => {
            if (id !== item.id) {
                const novoCarrinho = meuTeste[id - 1]
                const listaCarrinho = [...addCarrinho, novoCarrinho]
                setAddCarrinho(listaCarrinho)
                return addCarrinho
            } else {
                return addCarrinho[id].quant++
            }
        }) 
    }
    // const adicionarCarrinho = (item) => {
    //     let novoCarrinho = [...meuTeste]
    //     let testeCarrinho = meuTeste.find((item) => produto.nome === item.nome)
         
    //     if (testeCarrinho) {
    //         testeCarrinho.quant++
    //     }else {
    //         testeCarrinho = {...produto, quant: 1}
    //         novoCarrinho.push(testeCarrinho)
    //     }
    //     setAddCarrinho(novoCarrinho)
    // }

    const filterByPreco = (preco) => {
        return preco >= precoMin && preco <= precoMax;
    }

    const filterByNome = (nome) => {
        return nome.toLowerCase().includes(buscaNome);
    }

    useMemo(() => {
        setListaDeProdutosFiltrada(meuTeste.filter(produto => filterByNome(produto.nome) && filterByPreco(produto.preco)));
    }, [buscaNome, precoMin, precoMax]);

    const onChangeBuscaNome = (e) => {
        e.preventDefault();
        if (!e.target.value) {
            return (setBuscaNome(''))
        } else {
            return (setBuscaNome(e.target.value.toLowerCase()));
        }
    }

    const onChangePrecoMin = (e) => {
        e.preventDefault();
        if (!e.target.value) {
            setPrecoMin(0)
        } else {
            setPrecoMin(e.target.value)
        }
    };

    const onChangePrecoMax = (e) => {
        e.preventDefault();
        if (!e.target.value) {
            setPrecoMax(999999999)
        } else {
            setPrecoMax(e.target.value);
        };
    }

    return (
        <DivPrincipal>
            <Filter onChangeBuscaNome={onChangeBuscaNome} onChangePrecoMin={onChangePrecoMin} onChangePrecoMax={onChangePrecoMax}  />
            <Main produtos={buscaNome || precoMin || precoMax ? listaDeProdutosFiltrada : meuTeste}  idCarrinho={adicionarCarrinho} listaTotalProdutos={MockUp}/>
            <Carrinho arrayModificado={addCarrinho} />
        </DivPrincipal>
    )
}
