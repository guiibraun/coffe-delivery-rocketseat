import { ActionType } from "./coffeReducer";
import { CartItemsState } from "../contexts/CoffeContext";



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

export function removeItemCartFunctionAction(cartItemsWhitoutADeletedItem: CartItemsState[]){
    return {
        type: ActionType.REMOVE_CART_ITEM,
        payload: cartItemsWhitoutADeletedItem
    }
}