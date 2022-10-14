import { createContext, ReactNode, useEffect, useReducer, useState } from "react"

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

interface CoffeStateType {
    coffeCart: CartItemsState[],
    itemsCartQuantity: number,
}

enum ActionType {
    MODIFY_ITEM_IN_CART = 'MODIFY_ITEM_IN_CART',
    ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART',
    CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY',
}

function reducer(state: CoffeStateType, action: any) {
    switch (action.type) {
        case ActionType.CHANGE_CART_QUANTITY:
            return { ...state, itemsCartQuantity: action.payload }
            break
        case ActionType.ADD_ITEM_IN_CART:
            return { ...state, coffeCart: [...state.coffeCart, action.payload] }
            break
        case ActionType.MODIFY_ITEM_IN_CART: {
            let newItem = action.payload
            return {
                ...state, coffeCart:
                    state.coffeCart.map(item => {
                        if (item.id === newItem.id) {
                            return { ...item, quantity: item.quantity + newItem.quantity }
                        }
                        return item
                    })
            }
        }
            break
        default:
            return state
    }
}

const initialState: CoffeStateType = {
    coffeCart: [],
    itemsCartQuantity: 0,
}

export const CoffeContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { coffeCart, itemsCartQuantity } = state

    useEffect(() => {
        console.log(coffeCart)
    }, [coffeCart])

    function addNewCoffeInCart(newCart: CartItemsState) {
        if (newCart.quantity > 0) {
            let findItem = coffeCart.findIndex(item => item.id === newCart.id)
            if (findItem > -1) {
                dispatch({
                    type: ActionType.MODIFY_ITEM_IN_CART,
                    payload: newCart
                })
            } else {
                dispatch({
                    type: ActionType.ADD_ITEM_IN_CART,
                    payload: newCart
                })
            }
        }
    }

    return (
        <CoffeContext.Provider value={{ coffeCart, itemsCartQuantity, addNewCoffeInCart }}>
            {children}
        </CoffeContext.Provider>
    )
}