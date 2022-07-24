import React, { useState, useMemo } from 'react'
import { DivPrincipal } from './PrincipalStyled'
import { Main } from './../Main/Main';
import { Filter } from './../Filter/Filter';
import { Carrinho } from './../Carrinho/Carrinho';
import { MockUp } from './../MockUp/MockUp';

export function Principal() {

    const meuTeste = MockUp

    // const listaDeProdutos = [
    //     { id: 1, nome: "Nave premium", foto: 'https://i.imgur.com/rM4M3mh.png', preco: 5000, quant: 1},
    //     { id: 2, nome: "Nave especial vip", preco: 4000, quant: 1 },
    //     { id: 3, nome: "Nave confort plus", preco: 3000, quant: 1 },
    //     { id: 4, nome: "Nave confort", preco: 3500, quant: 1 },
    //     { id: 5, nome: "Nave basic x", preco: 2000, quant: 1 },
    //     { id: 6, nome: "Nave basic", preco: 1000, quant: 1 }
    // ]

    const [buscaNome, setBuscaNome] = useState('');
    const [precoMin, setPrecoMin] = useState();
    const [precoMax, setPrecoMax] = useState();
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

    // const filtrarPorNome=listaDeProdutos.filter((produto)=>{
    // return produto.nome.includes(buscaNome)
    // })

    const filterByNome = (nome) => {
        return nome.toLowerCase().includes(buscaNome);
    }

    useMemo(() => {
        setListaDeProdutosFiltrada(meuTeste.filter(produto => filterByPreco(produto.preco) && filterByNome(produto.nome)))
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
            <Filter onChangeBuscaNome={onChangeBuscaNome} onChangePrecoMin={onChangePrecoMin} onChangePrecoMax={onChangePrecoMax}  />
            <Main produtos={buscaNome || precoMin || precoMax ? listaDeProdutosFiltrada : meuTeste}  idCarrinho={adicionarCarrinho} listaTotalProdutos={MockUp}/>
            <Carrinho arrayModificado={addCarrinho} />
        </DivPrincipal>
    )
}
