import styled from 'styled-components'

export const ControlItemQuantity = styled.div`
    border-radius: 6px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;

    gap: 0.5rem;


    div {
        padding: 0.3rem;
        gap: 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 6px;

        background-color: ${props => props.theme['base-button']};
    }
`

export const Button = styled.button`
        background-color: transparent;
        border: 0;

        cursor: pointer;

        svg {
            color: ${props => props.theme.purple}
        }
`

