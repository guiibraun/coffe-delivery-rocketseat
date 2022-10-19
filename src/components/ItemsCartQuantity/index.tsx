import { Minus, Plus } from 'phosphor-react'
import * as C from './styles'

interface Props {
    quantity?: number,
    handleIncrease: () => void,
    handleDecrese: () => void
}

export function ItemsCartQuantity({ quantity, handleIncrease, handleDecrese }: Props) {
    return (
        <C.ControlItemQuantity>
            <button type="button" onClick={handleDecrese} title="Diminuir"><Minus size={18} /></button>
                {quantity}
            <button type="button" onClick={handleIncrease} title="Aumentar"><Plus size={18} /></button>
        </C.ControlItemQuantity>
    )

}