import { CoffeStateType } from '../contexts/CoffeContext'

export enum ActionType {
    CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY',
    ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART'
}


export function coffeReducer(state: CoffeStateType, action: any) {
    switch (action.type){
        case ActionType.CHANGE_CART_QUANTITY:
            return { ...state, itemsCartQuantity: action.payload.newItemsQuantity }
            break
        case ActionType.ADD_ITEM_IN_CART:
            return {...state, 
                coffeCart: [...state.coffeCart, action.payload.newCart]
            }
        default:
            return state
    }
}