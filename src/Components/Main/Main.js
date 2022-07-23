import React, { useState } from "react";



export function Main(props) {

    const [contador, setContador] = useState(0);
    const [ordernar, setOrdenar] = useState("Escolha uma ordem");

    function ordenarItens() {

        let estadoInicial = ordernar;
        ordenarItens(estadoInicial);

    }
    function incrementarProduto() {

        let adicionar = contador + 1;
        setContador(adicionar);
    }

    const trazerLista = props.guardaLista.map((index) => {
        return <h1 key={index}>Nome Produto: {index.nome} Preço: {index.preco} </h1>


    })
    return (

        <div>
            <p>Quantidade de produtos: <span>10</span></p>
            <form>
                <label for="Ordem">Ordenar:</label>
                <select value={estadoInicial} onChange={ev => { setOrdenar(ev.target.value) }}>

                    <option value="Escolha uma ordem">Escolha uma ordem</option>
                    <option value="menor">Menor preço</option>
                    <option value="maior">Maior preço</option>
                </select>
            </form>

            <div>
                {trazerLista}

                <button onclick={incrementarProduto}>Adicionar</button>
            </div>
        </div>
    )
}