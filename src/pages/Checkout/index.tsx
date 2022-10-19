import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as C from './styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { PrincipalForm } from './components/PrincipalForm'
import { CoffeItems } from './components/CoffeItems'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'
import { PaymentMethod } from './components/PaymentMethod'
import { TotalPrices } from './components/TotalPrices'
import { CartInfo } from './components/CartInfo'
import { Link, useNavigate } from 'react-router-dom'

export type DataProps = zod.infer<typeof checkoutFormValidationSchema>

const checkoutFormValidationSchema = zod.object({
    cep: zod.number(),
    street: zod.string(),
    number: zod.string(),
    neighborhood: zod.string(),
    city: zod.string(),
    state: zod.string().max(2).min(2),
    payment: zod.string()
})

export function Checkout() {
    const { coffeCart, addOrder } = useContext(CoffeContext)
    const newCheckoutForm = useForm<DataProps>({
        resolver: zodResolver(checkoutFormValidationSchema)
    })

    const navigate = useNavigate()

    const { handleSubmit, reset } = newCheckoutForm

    function onCheckoutSubmit(data: DataProps) {
        addOrder(data)
        navigate("/sucess",
        )
        reset()
    }

    return (
        <FormProvider {...newCheckoutForm}>
            <C.FormCheckout onSubmit={handleSubmit(onCheckoutSubmit)}>
                <C.CheckoutContainer>
                    <div>
                        <h2>Complete seu pedido</h2>
                        <C.CardContainer>
                            <CartInfo
                                title="Endereço de Entrega"
                                paragraph="Informe o endereço onde deseja receber seu pedido"
                                icon={<MapPinLine size={25} />}
                                color='yellow-dark'
                            />
                            <C.FormPrimary>
                                <PrincipalForm />
                            </C.FormPrimary>

                        </C.CardContainer>
                    </div>
                    <div>
                        <h2>Cafés selecionados</h2>
                        <C.CardContainer>
                            {coffeCart.map(item => (
                                <CoffeItems key={item.id} item={item} />
                            ))}
                            <TotalPrices />

                            <C.SubmitButton type="submit">Confirmar Pedido</C.SubmitButton>

                        </C.CardContainer>
                    </div>
                    <div>
                        <C.CardContainer>
                            <CartInfo
                                title="Pagamento"
                                paragraph="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                                icon={<CurrencyDollar size={25} />}
                                color='purple'
                            />
                            <PaymentMethod />
                        </C.CardContainer>
                    </div>
                </C.CheckoutContainer>

            </C.FormCheckout >
        </FormProvider >
    )

}