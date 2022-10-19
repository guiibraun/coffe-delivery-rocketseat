import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
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

interface CarItemsContextTypes {
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

export const CoffeContext = createContext({} as CarItemsContextTypes)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
    const [state, dispatch] = useReducer(coffeReducer, {
        coffeCart: [],
        coffeItemCount: 0
    })

    //const [coffeCart, setCoffeCart] = useState<CartItemsState[]>([])
    const [itemsCartQuantity, setItemsCartQuantity] = useState(0)
    const [coffeItemCount, setCoffeItemCount] = useState(0)
    const [coffeItemPriceWithOutShipping, setcoffeItemPriceWithOutShipping] = useState(0)
    const [coffeItemPriceWithShipping, setcoffeItemPriceWithShipping] = useState(0)

    const shipping = 3.5

    const {coffeCart} = state

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
        let newCartTotalCount = coffeCart.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
        setItemsCartQuantity(newCartTotalCount)
    }

    function removeFromCart(id: string) {
        let cartItemsWhitoutADeletedItem = [...coffeCart].filter((item) => item.id !== id)
        //setCoffeCart(cartItemsWhitoutADeletedItem)
    }

    function decreaseItemQuantity(item: CartItemsState) {
        dispatch({
            type: ActionType.DECREASE_CART,
            payload: {
                item
            }
        })

        item.quantity > 0 ? setCoffeItemCount((previousState) => previousState - 1) : setCoffeItemCount(0)
    }


    function increaseItemQuantity(item: CartItemsState) {
        dispatch({
            type: ActionType.INCREASE_CART,
            payload: {
                item
            }
        })
        setCoffeItemCount((previousState) => previousState + 1)
    }

    function totalItemsPriceWithOutShipping() {
        let totalPrice = coffeCart.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0)
        setcoffeItemPriceWithOutShipping(totalPrice)
    }

    function totalItemsPriceWithShipping() {
        let totalPrice = coffeCart.reduce((acc, item) => {
            return acc + ((item.price * item.quantity)) + shipping
        }, 0)
        setcoffeItemPriceWithShipping(totalPrice)
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