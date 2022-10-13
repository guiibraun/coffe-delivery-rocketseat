import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    gap: 1rem;

    a {
        text-decoration: none;
    }
`

export const CartAndCityContainer = styled.div`
    width: 13rem;
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
    gap: .3rem

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
`

