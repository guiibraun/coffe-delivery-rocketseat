import { useContext } from "react"
import { CoffeContext } from "../../contexts/CoffeContext"
import MotoboySvg from '../../assets/motoboy.svg'

import * as C from './styles'
import { MapPin } from "phosphor-react"
import { OrderInfo } from "./components/OrderInfo"


export function Sucess(){
    return (
        <C.SucessContainer>
            <C.OrderInfo>
                <div>
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </div>
                <OrderInfo />
            </C.OrderInfo>
            <C.Image>
                <img alt="" src={MotoboySvg} />
            </C.Image>
        </C.SucessContainer>
    )
}