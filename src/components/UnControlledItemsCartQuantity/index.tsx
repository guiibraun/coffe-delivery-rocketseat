import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartItemsState, CoffeContext } from '../../contexts/CoffeContext'
import * as C from './styles'

interface Props {
    item: CartItemsState
}

export function UnControlledItemsCartQuantity({ item }: Props) {
    const { handleSubmit } = useForm()
    const {addNewCoffeInCart} = useContext(CoffeContext)

    const { quantity = 0 } = item

    const [itemQuantity, setItemQuantity] = useState(quantity)

    function increase() {
        setItemQuantity(prevState => prevState + 1)
    }

    function decrease() {
        itemQuantity > 0 ? setItemQuantity(prevState => prevState - 1) : setItemQuantity(0)
    }

    const onSubmitForm = () => {
        let newCart = {
            id: item.id,
            name: item.name,
            image: item.image,
            quantity: itemQuantity,
            price: item.price
        }
        addNewCoffeInCart(newCart)
        setItemQuantity(0)
    }

    return (
        <C.ControlItemQuantity>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <C.Button type="button" onClick={decrease} title="Diminuir"><Minus size={18} /></C.Button>
                    {itemQuantity}
                    <C.Button type="button" onClick={increase} title="Aumentar"><Plus size={18} /></C.Button>
                </div>
                <C.SendButton type="submit" title="Enviar para o carrinho">
                    <ShoppingCart size={25} weight="fill" />
                </C.SendButton>
            </form>
        </C.ControlItemQuantity>
    )

}