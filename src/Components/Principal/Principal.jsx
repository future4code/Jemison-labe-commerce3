import React, { useState, useMemo } from 'react'
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
            if (id === item.id) {
                meuTeste.quant++
                return addCarrinho
            } else {
                const novoCarrinho = meuTeste[id - 1]
                const listaCarrinho = [...addCarrinho, novoCarrinho]
                setAddCarrinho(listaCarrinho)
                return addCarrinho
            }
        })
    }

    const listaDeProdutos = [
        { nome: "Nave premium", preco: 5000 },
        { nome: "Nave especial vip", preco: 4000 },
        { nome: "Nave confort plus", preco: 3000 },
        { nome: "Nave confort", preco: 3500 },
        { nome: "Nave basic x", preco: 2000 },
        { nome: "Nave basic", preco: 1000 }
    ]
    const [buscaNome, setBuscaNome] = useState('');
    const [precoMin, setPrecoMin] = useState(null);
    const [precoMax, setPrecoMax] = useState(null);
    const [listaDeProdutosFiltrada, setListaDeProdutosFiltrada] = useState([]);

    const filterByPreco = (preco) => {
        return preco >= precoMin && preco <= precoMax;
    }

    // const filtrarPorNome=listaDeProdutos.filter((produto)=>{
    // return produto.nome.includes(buscaNome)
    // })

    const filterByNome = (nome) => {
        return nome.toLowerCase().includes(buscaNome);
    }

    useMemo(() => {
        setListaDeProdutosFiltrada(listaDeProdutos.filter(produto => filterByPreco(produto.preco) && filterByNome(produto.nome)))
    }, [buscaNome, precoMin, precoMax]);

    const onChangeBuscaNome = (e) => {
        e.preventDefault();
        if (!e.target.value) {
            return (setBuscaNome(''))
        } else {
            return (setBuscaNome(e.target.value.toLowerCase()));
        }

        //setBuscaNome(e.target.value.toLowerCase()) //Revisar a questão do props
    }


    const onChangePrecoMin = (e) => {
        e.preventDefault();
        if (!e.target.value) {
            setPrecoMin(null)
        } else {
            setPrecoMin(e.target.value)
        }
    };

    const onChangePrecoMax = (e) => {
        e.preventDefault();
        if (!e.target.value) {
            setPrecoMax(null)
        } else {
            setPrecoMax(e.target.value);
        };
    }

    return (
        <DivPrincipal>
            <Filter onChangeBuscaNome={onChangeBuscaNome} onChangePrecoMin={onChangePrecoMin} onChangePrecoMax={onChangePrecoMax} addCar={adicionarCarrinho} />
            <Main produtos={buscaNome || precoMin || precoMax ? listaDeProdutosFiltrada : listaDeProdutos} />
            <Carrinho arrayModificado={addCarrinho} />
        </DivPrincipal>
    )
}
