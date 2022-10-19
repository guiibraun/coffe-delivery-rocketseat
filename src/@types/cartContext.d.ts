export interface CarItemsContextTypes {
    coffeCart: CartItemsState[],
    itemsCartQuantity: number,
    coffeItemCount: number,
    coffeItemPriceWithShipping: number,
    coffeItemPriceWithOutShipping: number,
    shipping: number,
    addNewCoffeInCart: (newCart: CartItemsState) => void
    removeFromCart: (id: string) => void
    decreaseItemQuantity: (item: CartItemsState) => void
    increaseItemQuantity: (item: CartItemsState) => void
}