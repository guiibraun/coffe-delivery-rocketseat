import styled from 'styled-components'

export const CoffeItemsCheckoutContainer = styled.div`
    border-width: 0 0 1px 0;
    border-color: ${props => props.theme['base-button']};
    border-style: solid;
    padding: 1rem 0;
    width: 100%;
    gap: 0.5rem;
    display: grid;
    grid-template-columns: 4rem 1fr;

    border-radius: 6px 44px;
    
    img {
        max-width: 4rem;
    }

    h5 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${props => props.theme['base-subtitle']}
    }
`

export const EditItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    div {

    }
    
    input {
        width: 4rem;
        border-radius: 8px;
        border: 0;
    }
`

export const ItemInfo = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-size: 1rem;
    }
`

export const QuantityAndRemoveItem = styled.div`
    display: flex;
    gap: 0.5rem;
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
    color: ${props => props.theme['base-subtitle']};

    svg {
        color: ${props => props.theme.purple};

    }
`

