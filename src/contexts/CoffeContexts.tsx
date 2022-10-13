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
    addNewCoffeInCart: (newCart: CartItemsState[]) => void
}

export const CartItemsContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [coffeCart, setCoffeCart] = useState<CartItemsState[]>([])

    useEffect(() => {
        if (coffeCart.length > 0) {
            console.log(coffeCart)
        }
    }, [coffeCart])

    function addNewCoffeInCart(newCart: CartItemsState[]) {
        setCoffeCart(newCart)
    }

    return (
        <CartItemsContext.Provider value={{ coffeCart, addNewCoffeInCart }}>
            {children}
        </CartItemsContext.Provider>
    )
}