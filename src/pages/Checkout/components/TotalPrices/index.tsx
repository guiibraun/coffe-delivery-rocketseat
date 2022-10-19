import { useContext } from "react";
import { CoffeContext } from "../../../../contexts/CoffeContext";
import { formatPrice } from "../../../../helpers/formatPrice";

import * as C from './styles'

export function TotalPrices() {
    const {coffeItemPriceWithOutShipping, coffeItemPriceWithShipping, shipping } = useContext(CoffeContext)
    
    return (
        <C.Prices>
            <C.BaseItensCheckout>
                <div>Total de itens</div>
                <div>R$ {formatPrice(coffeItemPriceWithOutShipping)}</div>
            </C.BaseItensCheckout>
            <C.BaseItensCheckout>
                <div>Entrega</div>
                <div>R$ {formatPrice(shipping)}</div>
            </C.BaseItensCheckout>
            <C.TotalItensPrice>
                <div>Total</div>
                <div>R$ {formatPrice(coffeItemPriceWithShipping)}</div>
            </C.TotalItensPrice>
        </C.Prices>
    )

}