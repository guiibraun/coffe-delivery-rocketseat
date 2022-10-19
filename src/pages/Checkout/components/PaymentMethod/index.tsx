import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import * as C from './styles'

export function PaymentMethod() {
    const { register } = useFormContext()

    return (
        <C.PaymentMethodsContainer>
            <input type="radio" value="credit" id="creditCart" {...register('payment')} />
            <label htmlFor="creditCart">
                <C.ContentContainer>
                    <CreditCard size={25} />
                    Cartão de crédito
                </C.ContentContainer>
            </label>

            <input type="radio" value="debit" id="debitCard" {...register('payment')} />
            <label htmlFor="debitCard">
                <C.ContentContainer>
                    <Bank size={25} />
                    Cartão de débito
                </C.ContentContainer>
            </label>

            <input type="radio" value="cash" id="cash" {...register('payment')} />
            <label htmlFor="cash">
                <C.ContentContainer>
                    <Money size={25} />
                    Dinheiro
                </C.ContentContainer>
            </label>
        </C.PaymentMethodsContainer>
    )
}