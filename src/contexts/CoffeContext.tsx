import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { ActionType, coffeReducer } from "../reducers/coffeReducer"
import { addItemCartAction, changeItemCartAction } from "./CoffeActions"

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
    addNewCoffeInCart: (newCart: CartItemsState) => void
}

export interface CoffeStateType {
    coffeCart: CartItemsState[],
    itemsCartQuantity: number,
}

const initialState: CoffeStateType = {
    coffeCart: [],
    itemsCartQuantity: 0,
}

export const CoffeContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [state, dispatch] = useReducer(coffeReducer, initialState)

    const { coffeCart, itemsCartQuantity } = state

    useEffect(() => {
        if(coffeCart.length > 0){
            changeCartTotalCount()
        }
    }, [coffeCart])

    function addNewCoffeInCart(newCart: CartItemsState) {
        if (newCart.quantity > 0) {
            let findItem = coffeCart.findIndex(item => item.id === newCart.id)
            if (findItem > -1) {
                dispatch(changeItemCartAction(newCart))
            } else {
                dispatch(addItemCartAction(newCart))
            }
        }
    }

    function changeCartTotalCount(){
        let newCartTotalCount: number = [...coffeCart].reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
        dispatch({type: ActionType.CHANGE_CART_QUANTITY, payload: newCartTotalCount})
    }

    return (
        <CoffeContext.Provider value={{ coffeCart, itemsCartQuantity, addNewCoffeInCart }}>
            {children}
        </CoffeContext.Provider>
    )
}