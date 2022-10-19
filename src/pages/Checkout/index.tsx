import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as C from './styles'
import { MapPinLine } from 'phosphor-react'
import { PrincipalForm } from './components/PrincipalForm'
import { CoffeItems } from './components/CoffeItems'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'
import { PaymentMethod } from './components/PaymentMethod'
import { formatPrice } from '../../helpers/formatPrice'
import { TotalPrices } from './components/TotalPrices'

type DataProps = zod.infer<typeof checkoutFormValidationSchema>

const checkoutFormValidationSchema = zod.object({
    cep: zod.number(),
    street: zod.string(),
    number: zod.string(),
    neighborhood: zod.string(),
    city: zod.string(),
    state: zod.string(),
/*     quantity: zod.string() */
})

export function Checkout() {
    const { coffeCart, coffeItemPriceWithShipping, coffeItemPriceWithOutShipping, shipping } = useContext(CoffeContext)
    const newCheckoutForm = useForm<DataProps>({
        resolver: zodResolver(checkoutFormValidationSchema)
    })

    const { register, handleSubmit, reset} = newCheckoutForm

    function onCheckoutSubmit(data: DataProps) {
        console.log(data)
        reset()
    }

    return (
        <FormProvider {...newCheckoutForm}>
            <C.FormCheckout onSubmit={handleSubmit(onCheckoutSubmit)}>
                <C.CheckoutContainer>
                    <div>
                        <h2>Complete seu pedido</h2>
                        <C.CardContainer>
                            <C.DeliveryInfo>
                                <MapPinLine size={25} />
                                <div>
                                    <h5>Endereço de Entrega</h5>
                                    <p>Informe o endereço onde deseja receber seu pedido</p>
                                </div>
                            </C.DeliveryInfo>
.
                            <C.FormPrimary>
                                <PrincipalForm />
                            </C.FormPrimary>

                        </C.CardContainer>
                    </div>
                    <div>
                        <h2>Cafés selecionados</h2>
                        <C.CardContainer>
                            {coffeCart.map(item => (
                                <CoffeItems key={item.id} item={item}/>
                            ))}
                            <TotalPrices />
                            <C.SubmitButton type="submit">Confirmar Pedido</C.SubmitButton>
                        </C.CardContainer>
                    </div>
                    <div>
                        <C.CardContainer>
                            <PaymentMethod />
                        </C.CardContainer>

                    </div>
                </C.CheckoutContainer>

            </C.FormCheckout >
        </FormProvider>
    )

}