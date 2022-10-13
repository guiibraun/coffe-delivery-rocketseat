import { coffeData } from '../../../../data/coffe'
import * as C from './styles'
import { ShoppingCart } from 'phosphor-react'
import {  useState } from 'react'
import { useForm } from 'react-hook-form'
import { Product } from './Product'


interface CartItemsType {
    id: string,
    nome: string,
    image: string,
    quantity: number
}

export function Products() {
    return (
        <C.ProductsContainer>
            <h2>Nossos cafés</h2>
            <C.ProductsGrid>
                {coffeData.map((coffe, index) => (
                    <Product key={coffe.id} coffeItem={coffe}/>
                ))}
            </C.ProductsGrid>
        </C.ProductsContainer>
    )
}