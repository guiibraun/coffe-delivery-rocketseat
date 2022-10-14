import { CoffeStateType } from "../contexts/CoffeContext"

export enum ActionType {
    MODIFY_ITEM_IN_CART = 'MODIFY_ITEM_IN_CART',
    ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART',
    CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY',
}

export function coffeReducer(state: CoffeStateType, action: any) {
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