import { coffeData } from '../../../../data/coffe'
import * as C from './styles'
import { Product } from './Product'


export function Products() {
    return (
        <C.ProductsContainer>
            <h2>Nossos cafés</h2>
            <C.ProductsGrid>
                {coffeData.map((coffe) => (
                    <Product key={coffe.id} coffeItem={coffe}/>
                ))}
            </C.ProductsGrid>
        </C.ProductsContainer>
    )
}