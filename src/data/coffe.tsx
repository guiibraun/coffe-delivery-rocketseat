import { v4 as uuid } from 'uuid'
import { ProductsType } from "../@types/products";

import Arabe from '../assets/coffes/type-arabe.png'
import Black from '../assets/coffes/type-black.png'
import ExpressoGelado from '../assets/coffes/type-cafe-gelado.png'

enum CoffeTypes {
    TRADICIONAL = 'Tradicional',
    GELADO = 'Gelado',
    COM_LEITE = 'Com Leite',
    ALCOOLICO = 'Alcoólico',
    ESPECIAL = 'Especial'
}

export const coffeData: ProductsType[] = [
    {
        id: uuid(),
        image: Arabe,
        name: 'Árabe',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        type: [CoffeTypes.TRADICIONAL]
    },
    {
        id: uuid(),
        image: Black,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        type: [CoffeTypes.TRADICIONAL]
    },
    {
        id: uuid(),
        image: ExpressoGelado,
        name: 'Expresso Gelado',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        type: [CoffeTypes.TRADICIONAL, CoffeTypes.GELADO, CoffeTypes.ALCOOLICO]
    },
    {
        id: uuid(),
        image: ExpressoGelado,
        name: 'Expresso Gelado',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        type: [CoffeTypes.TRADICIONAL, CoffeTypes.GELADO]
    },
]