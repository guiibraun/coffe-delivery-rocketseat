import { createContext, ReactNode, useEffect, useReducer, useState } from "react"

interface CoffeContextProviderProps {
    children: ReactNode
}

interface CartItemsState {
    id: string,
    image: string,
    name: string,
    quantity: number | null,
    price: number
}

interface CarItemsContextTypes {
    coffeCart: CartItemsState[],
    itemsCartQuantity: number,
    addNewCoffeInCart: (newCart: CartItemsState[]) => void
}

export const CoffeContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [coffeCart, setCoffeCart] = useState<CartItemsState[]>([])
    const [itemsCartQuantity, setItemsCartQuantity] = useState(0)

    useEffect(() => {
        if(coffeCart.length > -1){
            newCartItemsQuantity()
        }
    }, [coffeCart])

    function addNewCoffeInCart(newCart: CartItemsState[]) {
        setCoffeCart(newCart)
    }

    function newCartItemsQuantity(){
        let newItemsQuantity = coffeCart.reduce((acc, item) => {
            return acc + Number(item.quantity)
        }, 0)
        setItemsCartQuantity(newItemsQuantity)
    }

    return (
        <CoffeContext.Provider value={{ coffeCart, itemsCartQuantity, addNewCoffeInCart }}>
            {children}
        </CoffeContext.Provider>
    )
}