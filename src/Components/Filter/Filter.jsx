import React from 'react'
import { Formulario, DivPai } from './FilterStyled';

export function Filter(props) {
    return (
        <DivPai>
            <h3>Filtros</h3>
            <Formulario>
                <label>Valor mínimo:</label>
                <input placeholder='0' type="number" name="vmin" id="vmin" onChange={props.onChangePrecoMin}/>
                <label>Valor máximo:</label>
                <input placeholder='1000000' type="number" name="vmax" id="vmax" onChange={props.onChangePrecoMax} />
                <label>Busca por nome:</label>
                <input type="text" name="bnome" id="bnome" onChange={props.onChangeBuscaNome}/>
            </Formulario>
        </DivPai>
    )
}