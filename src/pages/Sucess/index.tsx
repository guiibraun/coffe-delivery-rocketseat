import { useContext } from "react"
import { CoffeContext } from "../../contexts/CoffeContext"
import { OrderInfo } from "./components/OrderInfo"

import MotoboySvg from '../../assets/motoboy.svg'
import * as C from './styles'


export function Sucess() {
    const { order } = useContext(CoffeContext)

    return (
        <C.SucessContainer>
            <C.OrderInfo>
                {order ? (
                    <>
                        <div>
                            <h2>Uhu! Pedido confirmado</h2>
                            <p>Agora é só aguardar que logo o café chegará até você</p>
                        </div>
                        <OrderInfo />
                    </>
                ) :
                    <h2>Nenhum pedido encontrado</h2>
                }
            </C.OrderInfo>
            <C.Image>
                <img alt="" src={MotoboySvg} />
            </C.Image>
        </C.SucessContainer>
    )
}