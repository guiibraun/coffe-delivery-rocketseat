import * as C from './styles'

export function PaymentMethod(){
    return (
        <C.PaymentMethodsContainer>
            <label htmlFor="creditCart">
                <input type="radio" name="payment" value="credit" />
                Cartão de crédito
            </label>
            <label htmlFor="debitCard">
                <input type="radio" name="payment" value="debit" />
                Cartão de débito
            </label>

            <label htmlFor="cash">
                <input type="radio" name="payment" value="cash" />
                Dinheiro
            </label>
        </C.PaymentMethodsContainer>
    )
}