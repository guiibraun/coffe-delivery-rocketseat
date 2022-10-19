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
    const { removeFromCart, decreaseItemQuantity, increaseItemQuantity } = useContext(CoffeContext)

    function handleIncrease() {
        increaseItemQuantity(item)  
    }

    function handleDecrease() {
        decreaseItemQuantity(item)
    }

    return (
        <C.CoffeItemsCheckoutContainer>
                <img src={item.image} alt='' />
                <C.EditItems>
                    <C.ItemInfo>
                        <h5>{item.name}</h5>
                        <span>R$ {formatPrice(item.price)}</span>
                    </C.ItemInfo>
                    <C.QuantityAndRemoveItem>
                        <ItemsCartQuantity quantity={item.quantity} handleIncrease={handleIncrease} handleDecrese={handleDecrease} />
                        <C.ButtonRemove onClick={() => removeFromCart(item.id)} type="button"><Trash size={18} />Remover</C.ButtonRemove>
                    </C.QuantityAndRemoveItem>
                </C.EditItems>
        </C.CoffeItemsCheckoutContainer>
    )
}
