import styled from "styled-components";


export const SucessContainer = styled.div`
    max-width: ${props => props.theme["max-width"]};
    margin: 0 auto;
    display: grid;

    gap: 6rem;
    grid-template-columns: repeat(2, 1fr);
`

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 2.5rem;

    h2 {
        color: ${props => props.theme["yellow-dark"]};
        font-family: 'Baloo 2', sans-serif;
        font-weight: bold;
        font-size: 2rem;
    }

    p {
        font-size: 1.25rem;
    }
`

export const Image = styled.div``

export const Informations = styled.div`
    border: 1px solid ${props => props.theme["purple-dark"]};
    border-radius: 6px 36px;
    padding: 2rem;
    box-sizing: border-box;

`