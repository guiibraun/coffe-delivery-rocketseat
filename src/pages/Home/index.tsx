import * as C from './styles'
import CoffeMockup from '../../assets/coffe-delivery-mockup.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Product } from './components/Product'
import { coffeData } from '../../data/coffe'

export function Home() {
    return (
        <C.HomeContainer>
            <C.MainContainer>
                <C.InfoContainer>
                    <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <C.GridItems>
                        <div>
                            <C.IconsSpan bgColors="yellow-dark">
                                <ShoppingCart size={25} weight="fill" />
                            </C.IconsSpan>
                            Compra simples e segura
                        </div>
                        <div>
                            <C.IconsSpan bgColors="base-text">
                                <Package size={25} weight="fill" />
                            </C.IconsSpan>
                            Embalagem mantém o café intacto
                        </div>
                        <div>
                            <C.IconsSpan bgColors="yellow">
                                <Timer size={25} weight="fill" />
                            </C.IconsSpan>
                            Entrega rápida e rastreada
                        </div>
                        <div>
                            <C.IconsSpan bgColors="purple">
                                <Coffee size={25} weight="fill" />
                            </C.IconsSpan>
                            O café chega fresquinho até você
                        </div>
                    </C.GridItems>
                </C.InfoContainer>
                <img src={CoffeMockup} alt='' />
            </C.MainContainer>
            <C.ProductsContainer>
                <h2>Nossos cafés</h2>
                <C.ProductsGrid>
                    {coffeData.map((coffe) => (
                        <Product key={coffe.id} coffeItem={coffe} />
                    ))}
                </C.ProductsGrid>
            </C.ProductsContainer>
        </C.HomeContainer>
    )
}