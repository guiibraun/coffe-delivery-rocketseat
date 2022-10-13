import { createContext, ReactNode, useReducer } from "react"

interface CoffeContextProviderProps {
    children: ReactNode
}

interface CarItemsContextTypes {
    
}

export const CartItemsContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    return (
        <CartItemsContext.Provider value={1}>
            {children}
        </CartItemsContext.Provider>
    )
}