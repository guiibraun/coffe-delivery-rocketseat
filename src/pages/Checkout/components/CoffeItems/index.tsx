import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { CoffeContext } from '../../../../contexts/CoffeContext'
import * as C from './styles'

export function CoffeItems() {
    const { coffeCart, removeFromCart } = useContext(CoffeContext)
    const {register, watch, control} = useFormContext()
    const {fields} = useFieldArray({
        control,
        name: 'checkout_items'
    })

    function handleRemove(id: string){
        removeFromCart(id)
    }

    const isItemInCart = watch('quantity')

    return (
        <C.CoffeItemsCheckoutContainer>
            {coffeCart.map(item =>
                <C.InfoCoffeItems key={item.id}>
                    <img src={item.image} alt='' />
                    <C.EditItems>
                        <h5>{item.name}</h5>
                        <div>
                            <input type="number" {...register('quantity')} />
                            <button title="Remover" onClick={() => handleRemove(item.id)} type="button"><Trash />Remover</button>
                        </div>
                    </C.EditItems>
                </C.InfoCoffeItems>
            )}
            <button type="submit">Enviar</button>
        </C.CoffeItemsCheckoutContainer>
    )
}