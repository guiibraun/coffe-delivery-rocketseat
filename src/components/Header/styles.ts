import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    gap: 1rem;

    max-width: ${props => props.theme['max-width']};
    margin: 0 auto;

    a {
        text-decoration: none;
    }
`

export const CartAndCityContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .75rem;
`

export const CityAndState = styled.div`
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    border-radius: 8px;
    gap: .3rem;

    span {
        font-size: .875rem;
    }

    svg {
        color:  ${props => props.theme.purple}
    }
    
`

export const ShoppingCartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 8px;

    position: relative;

    span {
        color: ${props => props.theme.white};
        background-color: ${props => props.theme['yellow-dark']};
        height: 1.25rem;
        width: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        font-size: 0.75rem;
        font-weight: 700;

        position: absolute;
        top: -10px;
        right: -10px;
    }
`

