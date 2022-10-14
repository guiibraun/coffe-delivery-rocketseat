import styled from 'styled-components'

export const FooterGrid = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;

    gap: .5rem;

    form {
        display: flex;
        gap: .5rem;

        input {
            width: 4.5rem;
            background-color: ${props => props.theme['base-button']};
            border: 0;
            text-align: center;
            padding: 0.5rem;
            border-radius: 8px;
        }

        button {
            background-color: ${props => props.theme['purple-dark']};
            color: ${props => props.theme.white};
            border: 0;
            padding: 0.5rem;
            border-radius: 8px;

            cursor: pointer;
        }
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
    }
    
`

export const Types = styled.div`
    display: flex;
    gap: .25rem;
    margin-top: .75rem;

    span {
        background-color: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};
        text-transform: uppercase;

        padding: .25rem .5rem ;

        border-radius: 100px;
        font-size: .675rem;
        font-weight: bold;
    }

`

export const ChangeQuantityButton = styled.button`
`