import styled from 'styled-components'

export const ControlItemQuantity = styled.div`
    background-color: ${props => props.theme['base-button']};
    border-radius: 6px;;
    padding: 0.5rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    gap: 0.5rem;

    button {
        background-color: transparent;
        border: 0;

        cursor: pointer;

        svg {
            color: ${props => props.theme.purple}
        }
    }

`