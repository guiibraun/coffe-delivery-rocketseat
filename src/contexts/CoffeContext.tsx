import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { ActionType, coffeReducer } from "../reducers/coffeReducer"
import { addItemCartAction, changeItemCartAction, removeItemCartFunctionAction } from "../reducers/CoffeActions"

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

export interface CoffeStateType {
    coffeCart: CartItemsState[],
    itemsCartQuantity: number,
}

export const CoffeContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [state, dispatch] = useReducer(coffeReducer, {
        coffeCart: [],
        itemsCartQuantity: 0,
    })

    const { coffeCart, itemsCartQuantity } = state

    useEffect(() => {
        changeCartTotalCount()
    }, [coffeCart])

    function addNewCoffeInCart(newCart: CartItemsState) {
        if (newCart.quantity > 0) {
            let findItem = [...coffeCart].findIndex(item => item.id === newCart.id)
            if (findItem > -1) {
                dispatch(changeItemCartAction(newCart))
            } else {
                dispatch(addItemCartAction(newCart))
            }
        }
    }

    function changeCartTotalCount() {
        let newCartTotalCount = [...coffeCart].reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
        dispatch({ type: ActionType.CHANGE_CART_QUANTITY, payload: newCartTotalCount })
    }

    function removeFromCart(id: string) {
        let cartItemsWhitoutADeletedItem = [...coffeCart].filter((item) => item.id !== id)
        dispatch(removeItemCartFunctionAction(cartItemsWhitoutADeletedItem))
    }

    return (
        <CoffeContext.Provider value={{ coffeCart, itemsCartQuantity, addNewCoffeInCart, removeFromCart }}>
            {children}
        </CoffeContext.Provider>
    )
}