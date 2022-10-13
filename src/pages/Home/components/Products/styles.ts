import styled from 'styled-components'

export const ProductsContainer = styled.div`
    padding-bottom: 5.75rem;

    h2 {
        font-size: 2rem;
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme["base-title"]};
        margin-bottom: 2rem;
    }
`

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    & > div{
        background-color: ${props => props.theme['base-card']};
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
        align-items: center;

        min-height: 19.375rem;

        border-radius: 8px 36px;

        padding: 0 1.5rem 1.3rem 1.5rem;

        h2 {
            font-size: 1.25rem;
            margin: 1rem 0;
        }

        p {
            color: ${props => props.theme['base-label']};
            font-size: 0.875rem;
        }

        img {
            margin-top: -2rem;
        }
    }

    @media (max-width: 767px){
        grid-template-columns: 1fr;
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

