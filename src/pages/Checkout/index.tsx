import * as C from './styles'

export function Checkout(){
    return (
        <C.CheckoutContainer>
            <div>
                <h2>Cafés selecionados</h2>
                <C.CardContainer></C.CardContainer>
            </div>
            <div>
                <h2>Complete seu pedido</h2>
                <C.CardContainer></C.CardContainer>
            </div>
        </C.CheckoutContainer>
    )
    
}