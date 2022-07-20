import styled from 'styled-components'


export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Quantidade = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 0 2em;
`

export const DivCards = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(4, 20em);
    grid-template-rows: 300px;
    margin: 0 auto;
    height: 100vh;
`