import styled from 'styled-components'


export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    
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
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    height: 90vh;
`