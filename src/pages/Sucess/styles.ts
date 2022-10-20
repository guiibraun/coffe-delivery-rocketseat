import styled from "styled-components";


export const SucessContainer = styled.div`
    max-width: ${props => props.theme["max-width"]};
    width: 100%;
    margin: 0 auto;
    display: grid;
    overflow: hidden;

    padding: 5rem 0;
    gap: 6rem;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 767px){
        grid-template-columns: 1fr;
        padding: 2rem 0;
    }
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

    @media (max-width: 767px){
            row-gap: 2rem;
    }
`

export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
`

