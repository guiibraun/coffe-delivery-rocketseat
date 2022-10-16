import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ItemsCartQuantity } from '../../../../components/ItemsCartQuantity'
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
                        <ItemsCartQuantity item={item}/>
                        <C.ButtonRemove onClick={() => handleRemove(item.id)} type="button"><Trash size={18} />Remover</C.ButtonRemove>
                    </div>
                </C.EditItems>
            </C.InfoCoffeItems>

        </C.CoffeItemsCheckoutContainer>
    )
}
