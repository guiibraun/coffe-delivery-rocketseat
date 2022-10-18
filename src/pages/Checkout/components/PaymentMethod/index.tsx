import * as C from './styles'

export function PaymentMethod() {
    return (
        <C.PaymentMethodsContainer>
            <input type="radio" name="payment" value="credit" />
            <label htmlFor="creditCart">Cartão de crédito</label>

            <input type="radio" name="payment" value="debit" />
            <label htmlFor="debitCard">Cartão de débito</label>
            
            <input type="radio" name="payment" value="cash" />
            <label htmlFor="cash">Dinheiro</label>
        </C.PaymentMethodsContainer>
    )
}