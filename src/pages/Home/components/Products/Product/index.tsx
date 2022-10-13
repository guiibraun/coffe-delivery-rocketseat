import { ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { ProductsType } from "../../../../../@types/products"
import { CartItemsContext } from "../../../../../contexts/CoffeContexts"
import * as C from './styles'

interface ProductProps {
    coffeItem: ProductsType
}

interface DataForm {
    coffeQuantity: any
}

export function Product({coffeItem}: ProductProps){
    const {addNewCoffeInCart, coffeCart} = useContext(CartItemsContext)

    const { register, handleSubmit } = useForm({
        defaultValues: {
            coffeQuantity: 0
        }
    })

    const onSubmitForm = (coffeQuantity: DataForm) => {
        addNewCoffeInCart([...coffeCart, {
            id: coffeItem.id,
            image: coffeItem.image,
            name: coffeItem.name,
            quantity: coffeQuantity.coffeQuantity,
            price: coffeItem.price
        }])
    }

    return (
        <div key={coffeItem.id}>
            <img src={coffeItem.image} alt='' />
            {/* <C.Types>
                            {coffe.type.map(types => (
                                <span key={`${new Date().getMilliseconds()}`}>{types}</span>
                            ))}
                        </C.Types> */}
            <h2>{coffeItem.name}</h2>
            <p>{coffeItem.description}</p>

            <C.FooterGrid>
                <div>
                    <span>R$ </span>{coffeItem.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <input
                        type="number"
                        {...register(`coffeQuantity`, { valueAsNumber: true })}
                        min={0}
                    />
                    <button type="submit" title="Enviar para o carrinho">
                        <ShoppingCart size={25} weight="fill" />
                    </button>
                </form>
            </C.FooterGrid>
        </div>
    )
}