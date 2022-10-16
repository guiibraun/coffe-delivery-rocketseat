import styled from 'styled-components'

export const CoffeItemsCheckoutContainer = styled.div`

    border-width: 1px 0;
    border-color: ${props => props.theme['base-button']};
    border-style: solid;
    padding: 1rem 0;

    img {
        max-width: 4rem;
    }
`

export const InfoCoffeItems = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    max-width: 100%;

    h5 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${props => props.theme['base-subtitle']}
    }
    
`

export const EditItems = styled.div`
    gap: .5rem;

    div {
        display: flex;
        gap: .5rem;
    }
    input {
        width: 4rem;
        border-radius: 8px;
        border: 0;
    }
`
export const ButtonRemove = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    border-radius: 6px;

    gap: 0.3rem;

    border: 0;

    cursor: pointer;

    background-color: ${props => props.theme['base-button']};

    svg {
        color: ${props => props.theme.purple};

    }
`

export const ItemInfo = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
`