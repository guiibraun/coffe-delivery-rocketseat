import { CartItemsState } from "../contexts/CoffeContext"
import { ItemInfo } from "../pages/Checkout/components/CoffeItems/styles"

interface ReducerStateType {
    coffeCart: CartItemsState[],
    coffeItemCount: number
}

export enum ActionType {
    INCREASE_CART = 'INCREASE_CART',
    DECREASE_CART = 'DECREASE_CART',
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}


export function coffeReducer(state: ReducerStateType, action: any) {
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            let newCart = action.payload.newCart
            if (newCart.quantity > 0) {
                let findItem = state.coffeCart.findIndex(item => item.id === newCart.id)
                if (findItem > -1) {
                    let modifyCart = state.coffeCart.map(item => {
                        if (item.id === newCart.id) {
                            return { ...item, quantity: item.quantity + newCart.quantity }
                        }
                        return item
                    })
                    return { ...state, coffeCart: modifyCart, coffeItemCount: state.coffeItemCount + 1 }
                } else {
                    return { ...state, coffeCart: [...state.coffeCart, newCart],
                        coffeItemCount: state.coffeItemCount + 1
                    }
                }
            }
            
        }

        case ActionType.INCREASE_CART: {
            let item = action.payload.item
            let increaseCoffeCart = state.coffeCart.map(coffe => {
                if (coffe.id === item.id && coffe.quantity > 0) {
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
                if (coffe.id === item.id && coffe.quantity > 0) {
                    return { ...coffe, quantity: item.quantity - 1 }
                }
                return coffe
            })
            return { ...state, coffeCart: decreaseCoffeCart }
        }
            break
        case ActionType.REMOVE_FROM_CART: {
            return state
        }
        default:
            return state
    }

}