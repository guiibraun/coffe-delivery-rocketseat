
import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CartItemsState, CoffeContext } from '../../contexts/CoffeContext'
import * as C from './styles'

interface Props {
    item: CartItemsState 
}


export function ItemsCartQuantity({item}: Props){
    const {decreaseItemQuantity, increaseItemQuantity} = useContext(CoffeContext)
    return (
        <C.ControlItemQuantity>
            <button type="button" onClick={() => decreaseItemQuantity(item)} title="Diminuir"><Minus size={18} /></button>
            {item.quantity}
            <button type="button" onClick={() => increaseItemQuantity(item)} title="Aumentar"><Plus size={18} /></button>
        </C.ControlItemQuantity>
    )

}