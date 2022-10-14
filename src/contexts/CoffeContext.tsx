import { createContext, ReactNode, useEffect, useReducer, useState } from "react"

interface CoffeContextProviderProps {
    children: ReactNode
}

export interface CartItemsState {
    id: string,
    image: string,
    name: string,
    quantity: number,
    price: number,
}

interface CarItemsContextTypes {
    coffeCart: CartItemsState[],
    itemsCartQuantity: number,
    addNewCoffeInCart: (newCart: CartItemsState) => void
    removeFromCart: (id: string) => void
}

export const CoffeContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [coffeCart, setCoffeCart] = useState<CartItemsState[]>([])
    const [itemsCartQuantity, setItemsCartQuantity] = useState(0)

    useEffect(() => {
        changeCartTotalCount()
    }, [coffeCart])

    function addNewCoffeInCart(newCart: CartItemsState) {
        if (newCart.quantity > 0) {
            let findItem = coffeCart.findIndex(item => item.id === newCart.id)
            if (findItem > -1) {
                let modifyCart = coffeCart.map(item => {
                    if (item.id === newCart.id) {
                        return { ...item, quantity: item.quantity + newCart.quantity }
                    }
                    return item
                })
                setCoffeCart(modifyCart)
            } else {
                setCoffeCart((previousState) => [...previousState, newCart])
            }
        }
    }

    function changeCartTotalCount() {
        let newCartTotalCount = coffeCart.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
        setItemsCartQuantity(newCartTotalCount)
    }

    function removeFromCart(id: string) {
        let cartItemsWhitoutADeletedItem = [...coffeCart].filter((item) => item.id !== id)
        setCoffeCart(cartItemsWhitoutADeletedItem)
    }

    return (
        <CoffeContext.Provider value={{ coffeCart, itemsCartQuantity, addNewCoffeInCart, removeFromCart }}>
            {children}
        </CoffeContext.Provider>
    )
}