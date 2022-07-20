import React from 'react'

export function CardCarrinho(props) {
    return (
        <div>
            <h2>Carrinho</h2>
            <p>Valor total: <span>{props.quantidade}</span> </p>
        </div>
    )

    // {quantidade} vai ser o .lenght do array 
}