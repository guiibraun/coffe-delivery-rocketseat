import { CartItemsState } from "../contexts/CoffeContext"
import { DataProps } from "../pages/Checkout"

interface ReducerStateType {
    coffeCart: CartItemsState[],
    coffeItemCount: number,
    itemsCartQuantity: number,
    coffeItemPriceWithOutShipping: number,
    coffeItemPriceWithShipping: number,
    shipping: number,
    order?: {
        info: DataProps,
        coffeCart: CartItemsState[]
    }
}

export enum ActionType {
    INCREASE_CART = 'INCREASE_CART',
    DECREASE_CART = 'DECREASE_CART',
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CHANGE_TOTAL_CART_QUANTITY = 'CHANGE_TOTAL_CART_QUANTITY',
    TOTAL_PRICE_WITHOUT_SHIPPING = 'TOTAL_PRICE_WITHOUT_SHIPPING',
    TOTAL_PRICE_WITH_SHIPPING = 'TOTAL_PRICE_WITH_SHIPPING',
    ORDER = 'ORDER'
}


export function coffeReducer(state: ReducerStateType, action: any) {
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            let newCart = action.payload.newCart
            let findItem = state.coffeCart.findIndex(item => item.id === newCart.id)
            if (findItem > -1) {
                let modifyCart = state.coffeCart.map(item => {
                    if (item.id === newCart.id) {
                        return { ...item, quantity: item.quantity + newCart.quantity }
                    }
                    return item
                })
                return {
                    ...state, coffeCart: modifyCart,
                    coffeItemCount: state.coffeItemCount + 1
                }
            } else {
                return {
                    ...state, coffeCart: [...state.coffeCart, newCart],
                    coffeItemCount: state.coffeItemCount + 1
                }
            }
        }
            break
        case ActionType.INCREASE_CART: {
            let item = action.payload.item
            let increaseCoffeCart = state.coffeCart.map(coffe => {
                if (coffe.id === item.id) {
                    return { ...coffe, quantity: item.quantity + 1 }
                }
                return coffe
            })
            return { ...state, coffeCart: increaseCoffeCart, coffeItemCount: state.coffeItemCount + 1 }
        }
            break
        case ActionType.DECREASE_CART: {
            let item = action.payload.item
            let decreaseCoffeCart = state.coffeCart.map(coffe => {
                if (coffe.id === item.id && Number(coffe.quantity) > 0) {
                    return { ...coffe, quantity: item.quantity - 1 }
                }
                return coffe
            })
            return { ...state, coffeCart: decreaseCoffeCart, coffeItemCount: state.coffeItemCount - 1 }
        }
            break
        case ActionType.REMOVE_FROM_CART: {
            let cartItemsWhitoutADeletedItem = state.coffeCart.filter((item) => item.id !== action.payload)
            return { ...state, coffeCart: cartItemsWhitoutADeletedItem }
        }
            break
        case ActionType.CHANGE_TOTAL_CART_QUANTITY: {
            let newCartTotalCount = state.coffeCart.reduce((acc, item) => {
                return acc + Number(item.quantity)
            }, 0)
            return { ...state, itemsCartQuantity: newCartTotalCount }
        }
            break
        case ActionType.TOTAL_PRICE_WITHOUT_SHIPPING: {
            let totalPrice = state.coffeCart.reduce((acc, item) => {
                return acc + (item.price * Number(item.quantity))
            }, 0)
            return { ...state, coffeItemPriceWithOutShipping: totalPrice }
        }
            break
        case ActionType.TOTAL_PRICE_WITH_SHIPPING: {
            let totalPrice = state.coffeCart.reduce((acc, item) => {
                return acc + ((item.price * Number(item.quantity))) + state.shipping
            }, 0)
            return { ...state, coffeItemPriceWithShipping: totalPrice }
        }
        break
        case ActionType.ORDER: 
            return {
                ...state, 
                order: {info: action.payload.data, coffeCart: state.coffeCart},
                coffeCart: []
            }
        break
        default:
            return state
    }

}