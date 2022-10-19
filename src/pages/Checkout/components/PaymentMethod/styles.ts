import styled from "styled-components";


export const PaymentMethodsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    input {
        visibility: hidden;
        appearance: none;
    }

    input:checked + label div {
    background: ${props => props.theme["purple-light"]};
    border-color: ${props => props.theme.purple};

        &:hover{
            background: ${props => props.theme["purple-light"]};
        }
    }
`
export const ContentContainer = styled.div`
    padding: 0 1rem;
    background: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${props => props.theme["base-button"]};
    transition: 0.4s;
    
    cursor: pointer;

    svg {
        color: ${ props => props.theme.purple};
    }

    &:hover {
        background: ${props => props.theme["base-hover"]};
    }

    user-select: none;
`