import { ActionType } from "../reducers/coffeReducer";
import { CartItemsState } from "./CoffeContext";



export function changeItemCartAction(modifyitemCart: CartItemsState){
    return {
        type: ActionType.MODIFY_ITEM_IN_CART,
        payload: modifyitemCart
    }
}

export function addItemCartAction(newItemCart: CartItemsState){
    return {
        type: ActionType.ADD_ITEM_IN_CART,
        payload: newItemCart
    }
}