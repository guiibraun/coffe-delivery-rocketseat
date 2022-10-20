import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { CarItemsContextTypes } from "../@types/cartContext"
import { DataProps } from "../pages/Checkout"
import { ActionType, coffeReducer, ReducerStateType } from "../reducers/coffeReducer"

interface CoffeContextProviderProps {
    children: ReactNode
}

export interface CartItemsState {
    id: string,
    image: string,
    name: string,
    quantity?: number,
    price: number,
    type?: string[],
    description?: string,
}

const storedOrderAsJson = localStorage.getItem('@coffe-delivery:order-state-1.0.0')

const initialState: ReducerStateType = {
    coffeCart: [],
    coffeItemCount: 0,
    itemsCartQuantity: 0,
    coffeItemPriceWithOutShipping: 0,
    shipping: 3.5,
    coffeItemPriceWithShipping: 0,
    order: storedOrderAsJson ? JSON.parse(storedOrderAsJson) : undefined
}

export const CoffeContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [state, dispatch] = useReducer(coffeReducer, initialState)

    const { coffeCart, coffeItemCount, itemsCartQuantity, coffeItemPriceWithOutShipping, coffeItemPriceWithShipping, shipping, order } = state

    useEffect(() => {
        if(order){
            const stateJSON = JSON.stringify(order)
            localStorage.setItem('@coffe-delivery:order-state-1.0.0', stateJSON)
        }
    }, [order])

    useEffect(() => {
        changeCartTotalCount()
    }, [coffeCart, coffeItemCount])

    useEffect(() => {
        totalItemsPriceWithOutShipping()
        totalItemsPriceWithShipping()
    }, [coffeCart])


    function addOrder(data: DataProps) {
        dispatch({
            type: ActionType.ORDER,
            payload: {
                data
            }
        })
    }

    function addNewCoffeInCart(newCart: CartItemsState) {
        if (Number(newCart.quantity) > 0) {
            dispatch({
                type: ActionType.ADD_TO_CART,
                payload: {
                    newCart
                }
            })
        }
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
            order,
            coffeItemPriceWithOutShipping,
            coffeItemPriceWithShipping,
            addNewCoffeInCart,
            removeFromCart,
            decreaseItemQuantity,
            increaseItemQuantity,
            addOrder
        }}>
            {children}
        </CoffeContext.Provider>
    )
}