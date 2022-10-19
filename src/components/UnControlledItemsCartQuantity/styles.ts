import styled from 'styled-components'

export const ControlItemQuantity = styled.div`
    border-radius: 6px;
    padding: 0.5rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;

    gap: 0.5rem;

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        div {
            background-color: ${props => props.theme['base-button']};
            padding: 0.3rem;
            gap: 0.5rem;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 6px;
        }
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

export const SendButton = styled.button`
    background-color: ${props => props.theme['purple-dark']};
    color: ${props => props.theme.white};
    border: 0;
    padding: 0.5rem;
    border-radius: 8px;

    cursor: pointer;

`