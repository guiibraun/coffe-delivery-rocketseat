import { createContext, ReactNode, useEffect, useReducer, useState } from "react"

interface CoffeContextProviderProps {
    children: ReactNode
}

interface CartItemsState {
    id?: string,
    image?: string,
    name?: string,
    quantity?: number,
    price?: number
}

interface CarItemsContextTypes {
    coffeCart: CartItemsState[],
    addNewCoffeInCart: (newCart: CartItemsState[]) => void
}



export const CartItemsContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [coffeCart, setCoffeCart] = useState<CartItemsState[]>([])

    useEffect(() => {
        console.log(coffeCart)
    }, [coffeCart])

    function addNewCoffeInCart(newCart: CartItemsState[]){
        setCoffeCart(newCart)    
    }

    return (
        <CartItemsContext.Provider value={{ coffeCart, addNewCoffeInCart }}>
            {children}
        </CartItemsContext.Provider>
    )
}