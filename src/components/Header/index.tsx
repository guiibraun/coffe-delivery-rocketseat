import logoCoffeDelivery from '../../assets/coffe-delivery-logo.svg'
import * as C from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'
import { Link } from 'react-router-dom'

export function Header(){
    const {itemsCartQuantity} = useContext(CoffeContext)

    return (
        <C.HeaderContainer>
            <Link to="/">
                <img src={logoCoffeDelivery} alt='' />
            </Link>
            <C.CartAndCityContainer>
                <C.CityAndState>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </C.CityAndState>
                <Link to="/checkout">
                    <C.ShoppingCartContainer>
                        {itemsCartQuantity > 0 && 
                            <span>{itemsCartQuantity}</span>
                        }
                        <ShoppingCart size={22} weight="fill" />

                    </C.ShoppingCartContainer>
                </Link>
            </C.CartAndCityContainer>
        </C.HeaderContainer>
    )
}