import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ControlledItemsCartQuantity } from '../../../../components/ControlledItemsCartQuantity'
import { CartItemsState, CoffeContext } from '../../../../contexts/CoffeContext'
import { formatPrice } from '../../../../helpers/formatPrice'
import * as C from './styles'

interface ItemProps {
    item: CartItemsState
}

export function CoffeItems({ item }: ItemProps) {
    const { removeFromCart } = useContext(CoffeContext)

    function handleRemove(id: string) {
        removeFromCart(id)
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
                        <ControlledItemsCartQuantity item={item} />
                        <C.ButtonRemove onClick={() => handleRemove(item.id)} type="button"><Trash size={18} />Remover</C.ButtonRemove>
                    </div>
                </C.EditItems>
            </C.InfoCoffeItems>

        </C.CoffeItemsCheckoutContainer>
    )
}
