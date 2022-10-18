import { CartItemsState } from "../contexts/CoffeContext"

interface ReducerStateType{
    coffeCart: CartItemsState[]
}

export enum ActionType {
    INCREASE_CART = 'INCREASE_CART',
    DECREASE_CART = 'DECREASE_CART'
}


export function coffeReducer(state: ReducerStateType, action:any){
    switch(action.type){
        case ActionType.INCREASE_CART:{
            return { ...state, coffeCart: action.payload}
        }
        break
        case ActionType.DECREASE_CART: {
            return { ...state, coffeCart: action.payload }
        }
        default:
            return state
    }

}