import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as C from './styles'
import { MapPinLine } from 'phosphor-react'
import { PrincipalForm } from './PrincipalForm'

type DataProps = zod.infer<typeof checkoutFormValidationSchema>

const checkoutFormValidationSchema = zod.object({
    cep: zod.number(),
    street: zod.string(),
    number: zod.string(),
    neighborhood: zod.string(),
    city: zod.string(),
    state: zod.string()
})

export function Checkout() {
    const newCheckoutForm = useForm<DataProps>({
        resolver: zodResolver(checkoutFormValidationSchema)
    })

    const {register, handleSubmit, reset} = newCheckoutForm

    function onCheckoutSubmit(data: DataProps) {
        console.log(data)
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
                            <button type="submit">Enviar</button>
                        </C.CardContainer>
                    </div>
                    <div>
                        <C.CardContainer>
                            teste
                        </C.CardContainer>

                    </div>
                </C.CheckoutContainer>

            </C.FormCheckout >
        </FormProvider>
    )

}