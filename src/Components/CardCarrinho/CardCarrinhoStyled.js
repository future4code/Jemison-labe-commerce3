import styled from 'styled-components'

export const DivItem = styled.div`
    display: flex;
    height: 50px;
    border: 1px solid #000;
    justify-content: space-evenly;
    margin-bottom: 8px;

    img {
        align-self: center;
        width: 40px;
        height: 40px;
        padding-left: 6px;
    }
    p {
        font-size: 0.9em;
        font-weight: 600;
        width: 12em;
        text-align: center;
        align-self: center;
    }
    a {
        align-self: center;
    }
`

export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Xis = styled.a`
    color: #F00;
    padding: 5px;
    cursor: pointer;
`