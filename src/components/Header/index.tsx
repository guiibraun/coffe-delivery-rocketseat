import logoCoffeDelivery from '../../assets/coffe-delivery-logo.svg'
import * as C from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header(){
    return (
        <C.HeaderContainer>
            <img src={logoCoffeDelivery} alt=''/>
            <C.CartAndCityContainer>
                <C.CityAndState>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </C.CityAndState>
                <C.ShoppingCartContainer>
                    <ShoppingCart size={22} weight="fill" />
                </C.ShoppingCartContainer>
            </C.CartAndCityContainer>
        </C.HeaderContainer>
    )
}