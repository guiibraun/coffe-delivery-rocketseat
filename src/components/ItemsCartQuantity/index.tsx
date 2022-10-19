import { Minus, Plus } from 'phosphor-react'
import * as C from './styles'

interface Props {
    quantity: number,
    handleIncrease: () => void,
    handleDecrese: () => void
}

export function ItemsCartQuantity({ quantity, handleIncrease, handleDecrese }: Props) {
    return (
        <C.ControlItemQuantity>
            <div>
                <C.Button type="button" onClick={handleDecrese} title="Diminuir"><Minus size={18} /></C.Button>
                {quantity}
                <C.Button type="button" onClick={handleIncrease} title="Aumentar"><Plus size={18} /></C.Button>
            </div>
        </C.ControlItemQuantity>
    )

}