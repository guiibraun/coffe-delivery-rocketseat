import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { ProductsType } from "../../../../../@types/products"
import { CoffeContext } from "../../../../../contexts/CoffeContext"
import * as C from './styles'
import { v4 as uuid } from 'uuid'

interface ProductProps {
    coffeItem: ProductsType
}

interface DataForm {
    coffeQuantity: number
}

export function Product({ coffeItem }: ProductProps) {

    const { addNewCoffeInCart } = useContext(CoffeContext)

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            coffeQuantity: 0
        }
    })

    const onSubmitForm = ({ coffeQuantity }: DataForm) => {
        let newCart = {
            id: coffeItem.id,
            name: coffeItem.name,
            image: coffeItem.image,
            quantity: coffeQuantity,
            price: coffeItem.price
        }
        addNewCoffeInCart(newCart)
        reset()
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
                    <span>R$ </span>{coffeItem.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <input
                        type="number"
                        {...register("coffeQuantity", { valueAsNumber: true })}
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