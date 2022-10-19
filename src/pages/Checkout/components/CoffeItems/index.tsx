import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ItemsCartQuantity } from '../../../../components/ItemsCartQuantity'
import { CartItemsState, CoffeContext } from '../../../../contexts/CoffeContext'
import { formatPrice } from '../../../../helpers/formatPrice'
import * as C from './styles'

interface ItemProps {
    item: CartItemsState
}

export function CoffeItems({ item }: ItemProps) {
    const { decreaseItemQuantity, increaseItemQuantity } = useContext(CoffeContext)
    const { removeFromCart } = useContext(CoffeContext)

    function handleIncrease() {
        increaseItemQuantity(item)  
    }

    function handleDecrease() {
        decreaseItemQuantity(item)
    }


    return (
        <C.CoffeItemsCheckoutContainer>
            <C.InfoCoffeItems key={`${item.id}+coffe_checkout`} >
                <img src={item.image} alt='' />
                <C.EditItems>
                    <C.ItemInfo>
                        <h5>{item.name}</h5>
                        <span>R$ {formatPrice(item.price)}</span>
                    </C.ItemInfo>
                    <div>
                        <ItemsCartQuantity quantity={item.quantity} handleIncrease={handleIncrease} handleDecrese={handleDecrease} />
                        <C.ButtonRemove onClick={() => removeFromCart(item.id)} type="button"><Trash size={18} />Remover</C.ButtonRemove>
                    </div>
                </C.EditItems>
            </C.InfoCoffeItems>

        </C.CoffeItemsCheckoutContainer>
    )
}
