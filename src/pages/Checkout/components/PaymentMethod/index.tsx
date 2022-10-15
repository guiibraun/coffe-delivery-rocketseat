import * as C from './styles'

export function PaymentMethod(){
    return (
        <C.PaymentMethodsContaienr>
            <input type="radio" name="creditCard" id="creditCard" value="credit"/>
            <label htmlFor="creditCard">Cartão de crédito</label>
            <input type="radio" name="debitCard" id="debitCard" value="debit" />
            <label htmlFor="debitCard">Cartão de débito</label>

        </C.PaymentMethodsContaienr>
    )
}