import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartItemsState, CoffeContext } from '../../../../contexts/CoffeContext'
import * as C from './styles'

interface ItemProps {
    item: CartItemsState
}

export function CoffeItems({ item }: ItemProps) {
    const { removeFromCart, decreaseItemQuantity, increaseItemQuantity } = useContext(CoffeContext)

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
                        <span>R$ {item.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                    </C.ItemInfo>
                    <div>
                        <C.ControlItemQuantity>
                            <button type="button" onClick={() => decreaseItemQuantity(item)} title="Diminuir"><Minus size={18}/></button>
                            {item.quantity}
                            <button type="button" onClick={() => increaseItemQuantity(item)} title="Aumentar"><Plus size={18} /></button> 
                        </C.ControlItemQuantity>
                        <C.ButtonRemove onClick={() => handleRemove(item.id)} type="button"><Trash size={18} />Remover</C.ButtonRemove>
                    </div>
                </C.EditItems>
            </C.InfoCoffeItems>

        </C.CoffeItemsCheckoutContainer>
    )
}
