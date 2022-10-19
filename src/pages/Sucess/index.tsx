import { useContext } from "react"
import { CoffeContext } from "../../contexts/CoffeContext"
import MotoboySvg from '../../assets/motoboy.svg'

import * as C from './styles'
import { OrderInformations } from "./components/OrderInformations"

export function Sucess(){
    const {order} = useContext(CoffeContext)

    return (
        <C.SucessContainer>
            <C.OrderInfo>
                <div>
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </div>

                <C.Informations>
                    <OrderInformations />
                    <OrderInformations />
                    <OrderInformations />
                </C.Informations>
            </C.OrderInfo>
            <C.Image>
                <img alt="" src={MotoboySvg} />
            </C.Image>
        </C.SucessContainer>
    )
}