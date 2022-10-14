import styled from 'styled-components'

export const CoffeItemsCheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    gap: 1rem;
    align-items: center;

    &>div{
        display: flex;
        flex-direction: column;



        h5 {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1rem;
            color: ${props => props.theme['base-subtitle']}
        }
    }
`

export const EditItems = styled.div`
    &>div {
        display: flex;
        gap: .5rem;
    }
    input {
        width: 4rem;
        border-radius: 8px;
        border: 0;
    }
`