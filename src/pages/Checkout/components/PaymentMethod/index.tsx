import { Bank, CreditCard, Money } from 'phosphor-react'
import * as C from './styles'

export function PaymentMethod() {
    return (
        <C.PaymentMethodsContainer>
            <input type="radio" name="payment" value="credit" id="creditCart"/>
            <label htmlFor="creditCart">
                <C.ContentContainer>
                    <CreditCard size={25} />
                    Cartão de crédito
                </C.ContentContainer>
            </label>

            <input type="radio" name="payment" value="debit" id="debitCard"/>
            <label htmlFor="debitCard">
                <C.ContentContainer>
                    <Bank size={25} />
                    Cartão de débito
                </C.ContentContainer>
            </label>

            <input type="radio" name="payment" value="cash" id="cash" />
            <label htmlFor="cash">
                <C.ContentContainer>
                    <Money size={25} />
                    Dinheiro
                </C.ContentContainer>
            </label>
        </C.PaymentMethodsContainer>
    )
}