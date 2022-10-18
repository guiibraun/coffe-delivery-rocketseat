import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CartItemsState, CoffeContext } from '../../contexts/CoffeContext'
import * as C from './styles'

interface Props {
    item: CartItemsState
}

export function ControlledItemsCartQuantity({ item }: Props) {
    const { decreaseItemQuantity, increaseItemQuantity, addNewCoffeInCart } = useContext(CoffeContext)

    return (
        <C.ControlItemQuantity>
            <C.Button type="button" onClick={() => decreaseItemQuantity(item)} title="Diminuir"><Minus size={18} /></C.Button>
            {item.quantity}
            <C.Button type="button" onClick={() => increaseItemQuantity(item)} title="Aumentar"><Plus size={18} /></C.Button>
        </C.ControlItemQuantity>
    )

}