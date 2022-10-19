import styled from 'styled-components'

export const ControlItemQuantity = styled.div`

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;

    display: flex;
    align-items: center;

    background-color: ${props => props.theme['base-button']};
    gap: 0.875rem;

    padding: 0.3rem;

    border-radius: 6px;

    button {
        background-color: transparent;
        border: 0;

        cursor: pointer;

        svg {
            color: ${props => props.theme.purple}
        }
    }
`

