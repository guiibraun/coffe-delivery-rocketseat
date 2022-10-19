import { ReactNode } from 'react'
import * as C from './styles'

interface CartInfoProps {
    title: string,
    paragraph: string,
    color: 'yellow-dark' | 'purple',
    icon: ReactNode
}

export function CartInfo({title, paragraph, icon, color}: CartInfoProps) {
    return (
        <C.CartInfo>
            <C.Icon colorIcon={color}>
                {icon}
            </C.Icon>
            <div>
                <h5>{title}</h5>
                <p>{paragraph}</p>
            </div>
        </C.CartInfo>
    )
}