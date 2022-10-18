import { ShoppingCart } from "phosphor-react"
import { ProductsType } from "../../../../@types/products"
import * as C from './styles'
import { v4 as uuid } from 'uuid'
import { UnControlledItemsCartQuantity } from "../../../../components/UnControlledItemsCartQuantity"

interface ProductProps {
    coffeItem: ProductsType
}


export function Product({ coffeItem }: ProductProps) {
    return (
        <div key={coffeItem.id}>
            <img src={coffeItem.image} alt='' />
            <C.Types>
                {coffeItem.type.map(types => (
                    <span key={uuid()}>{types}</span>
                ))}
            </C.Types>
            <h2>{coffeItem.name}</h2>
            <p>{coffeItem.description}</p>

            <C.FooterGrid>
                <div>
                    <span>R$ </span>{coffeItem.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
                <UnControlledItemsCartQuantity item={coffeItem} />
            </C.FooterGrid>
        </div>
    )
}