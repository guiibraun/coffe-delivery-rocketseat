import { ShoppingCart } from "phosphor-react"
import { ProductsType } from "../../../../@types/products"
import * as C from './styles'
import { v4 as uuid } from 'uuid'
import { ItemsCartQuantity } from "../../../../components/ItemsCartQuantity"
import { formatPrice } from "../../../../helpers/formatPrice"
import { useContext, useState } from "react"
import { CoffeContext } from "../../../../contexts/CoffeContext"
import { useForm } from "react-hook-form"

interface ProductProps {
    coffeItem: ProductsType
}


export function Product({ coffeItem }: ProductProps) {
    const { addNewCoffeInCart } = useContext(CoffeContext)
    const { handleSubmit } = useForm()
    const { quantity = 0 } = coffeItem

    const [itemQuantity, setItemQuantity] = useState(quantity)

    const onSubmitForm = () => {
        let newCart = {
            id: coffeItem.id,
            name: coffeItem.name,
            image: coffeItem.image,
            quantity: itemQuantity,
            price: coffeItem.price
        }
        addNewCoffeInCart(newCart)
        setItemQuantity(0)
    }

    function handleIncrease() {
        setItemQuantity(prevState => prevState + 1)
    }

    function handleDecrease() {
        itemQuantity > 0 ? setItemQuantity(prevState => prevState - 1) : setItemQuantity(0)
    }

    return (
        <div key={coffeItem.id}>
            <img src={coffeItem.image} alt='' />
            <C.Types>
                {coffeItem.type.map(types => (
                    <span key={uuid()}>{types}</span>
                ))}
            </C.Types>
            <h2>{coffeItem.name}</h2>
            <p>{coffeItem.description}</p>

            <C.FooterGrid>
                <div>
                    <span>R$ </span>{formatPrice(coffeItem.price)}
                </div>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <ItemsCartQuantity quantity={itemQuantity} handleIncrease={handleIncrease} handleDecrese={handleDecrease} />
                    <C.SendButton type="submit" title="Enviar para o carrinho">
                        <ShoppingCart size={25} weight="fill" />
                    </C.SendButton>
                </form>
            </C.FooterGrid>
        </div>
    )
}