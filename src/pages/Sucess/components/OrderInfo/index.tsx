import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CoffeContext } from "../../../../contexts/CoffeContext";


import * as C from './styles'

export function OrderInfo(){
    const { order } = useContext(CoffeContext)
    return (
        <C.Informations>
            <C.Info>
                <C.IconsSpan bgColors="purple">
                    <MapPin weight="fill" size={25} />
                </C.IconsSpan>
                <C.InfoText>
                    <p>Entrega em <strong>{order?.info.street}, {order?.info.number}</strong></p>
                    <p>{order?.info.neighborhood} - {order?.info.city}, {order?.info.state}</p>
                </C.InfoText>
            </C.Info>
            <C.Info>
                <C.IconsSpan bgColors="yellow">
                    <Timer weight="fill" size={25} />
                </C.IconsSpan>
                <C.InfoText>
                    <p>Previsão de entrega</p>
                    <p><strong>20 min - 30 min</strong></p>
                </C.InfoText>
            </C.Info>
            <C.Info>
                <C.IconsSpan bgColors="yellow-dark">
                    <CurrencyDollar weight="fill" size={25} />
                </C.IconsSpan>
                <C.InfoText>
                    <p>Pagamento na entrega</p>
                    
                    {order?.info.payment === "credit" &&
                        <p><strong>Cartão de crédito</strong></p>
                    }
                    {order?.info.payment === "debit" &&
                        <p><strong>Cartão de débito</strong></p>
                    }
                    {order?.info.payment === "cash" &&
                        <p><strong>Dinheiro</strong></p>
                    }
                </C.InfoText>
            </C.Info>
        </C.Informations>
    )
}