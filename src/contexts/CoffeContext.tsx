import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { ActionType, coffeReducer } from "../reducers/coffeReducer"

interface CoffeContextProviderProps {
    children: ReactNode
}

export interface CartItemsState {
    id: string,
    image: string,
    name: string,
    quantity: number,
    price: number
}

interface CarItemsContextTypes {
    coffeCart: CartItemsState[],
    itemsCartQuantity: number,
    addNewCoffeInCart: (newCart: CartItemsState[]) => void
}

export interface CoffeStateType {
    itemsCartQuantity: number,
    coffeCart: CartItemsState[]
}


export const CoffeContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [state, dispatch] = useReducer(coffeReducer, {
        itemsCartQuantity: 0,
        coffeCart: []
        
    })
    //const [coffeCart, setCoffeCart] = useState<CartItemsState[]>([])

    const {itemsCartQuantity, coffeCart} = state

    useEffect(() => {
        if(coffeCart.length > -1){
            newCartItemsQuantity()
        }
    }, [coffeCart])

    function addNewCoffeInCart(newCart: CartItemsState[]) {
        dispatch({
            type: ActionType.CHANGE_CART_QUANTITY,
            payload: newCart
        })
    }

    function newCartItemsQuantity(){
        let newItemsQuantity = coffeCart.reduce((acc, item) => {
            return acc + Number(item.quantity)
        }, 0)
        dispatch({
            type: ActionType.CHANGE_CART_QUANTITY,
            payload: newItemsQuantity
        })
    }

    return (
        <CoffeContext.Provider value={{ coffeCart, itemsCartQuantity, addNewCoffeInCart }}>
            {children}
        </CoffeContext.Provider>
    )
}