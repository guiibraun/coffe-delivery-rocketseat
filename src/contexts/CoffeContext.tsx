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
    coffeCart: CartItemsState[],
    itemsCartQuantity: number,
}

enum ActionType {
    CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY',
    ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART'
}

const initialState = {
    coffeCart: [],
    itemsCartQuantity: 0,
}

function coffeReducer(state: CoffeStateType, action: any) {
    switch (action.type) {
        case ActionType.CHANGE_CART_QUANTITY:
            return { ...state, itemsCartQuantity: action.payload.newItemsQuantity }
            break
        case ActionType.ADD_ITEM_IN_CART:
            return {
                ...state,
                coffeCart: [...state.coffeCart, action.payload.newCart]
            }
        default:
            return state
    }
}

export const CoffeContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    //const [coffeCart, setCoffeCart] = useState<CartItemsState[]>([])

    const [state, dispatch] = useReducer(coffeReducer, initialState)


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