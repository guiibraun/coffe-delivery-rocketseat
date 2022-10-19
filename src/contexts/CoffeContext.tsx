import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { CarItemsContextTypes } from "../@types/cartContext"
import { ActionType, coffeReducer } from "../reducers/coffeReducer"

interface CoffeContextProviderProps {
    children: ReactNode
}

export interface CartItemsState {
    id: string,
    image: string,
    name: string,
    quantity: number,
    price: number,
    type?: string[],
    description?: string,
}

export const CoffeContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [state, dispatch] = useReducer(coffeReducer, {
        coffeCart: [],
        coffeItemCount: 0,
        itemsCartQuantity: 0,
        coffeItemPriceWithOutShipping: 0,
        shipping: 3.5,
        coffeItemPriceWithShipping: 0,
    })

    const { coffeCart, coffeItemCount, itemsCartQuantity, coffeItemPriceWithOutShipping, coffeItemPriceWithShipping, shipping } = state

    useEffect(() => {
        changeCartTotalCount()
    }, [state.coffeCart, coffeItemCount])

    useEffect(() => {
        totalItemsPriceWithOutShipping()
        totalItemsPriceWithShipping()
    }, [coffeCart])

    function addNewCoffeInCart(newCart: CartItemsState) {
        dispatch({
            type: ActionType.ADD_TO_CART,
            payload: {
                newCart
            }
        })
    }

    function changeCartTotalCount() {
        dispatch({
            type: ActionType.CHANGE_TOTAL_CART_QUANTITY
        })

    }

    function removeFromCart(id: string) {
        dispatch({
            type: ActionType.REMOVE_FROM_CART,
            payload: id

        })
    }

    function decreaseItemQuantity(item: CartItemsState) {
        dispatch({
            type: ActionType.DECREASE_CART,
            payload: {
                item
            }
        })
    }

    function increaseItemQuantity(item: CartItemsState) {
        dispatch({
            type: ActionType.INCREASE_CART,
            payload: {
                item
            }
        })
    }

    function totalItemsPriceWithOutShipping() {
        dispatch({
            type: ActionType.TOTAL_PRICE_WITHOUT_SHIPPING
        })
    }

    function totalItemsPriceWithShipping() {
        dispatch({
            type: ActionType.TOTAL_PRICE_WITH_SHIPPING
        })
    }

    return (
        <CoffeContext.Provider value={{
            coffeCart,
            itemsCartQuantity,
            coffeItemCount,
            shipping,
            coffeItemPriceWithOutShipping,
            coffeItemPriceWithShipping,
            addNewCoffeInCart,
            removeFromCart,
            decreaseItemQuantity,
            increaseItemQuantity
        }}>
            {children}
        </CoffeContext.Provider>
    )
}