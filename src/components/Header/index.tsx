import logoCoffeDelivery from '../../assets/coffe-delivery-logo.svg'
import * as C from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'
import { Link } from 'react-router-dom'

export function Header() {
    const { itemsCartQuantity, order } = useContext(CoffeContext)

    return (
        <C.HeaderContainer>
            <Link to="/">
                <img src={logoCoffeDelivery} alt='' />
            </Link>
            <C.CartAndCityContainer>
                {order && 
                    <C.CityAndState>
                        <MapPin size={22} weight="fill" />
                        <span>{order?.info?.city}, {order?.info?.state}</span>
                    </C.CityAndState>
                }

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