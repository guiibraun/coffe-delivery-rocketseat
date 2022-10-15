import { id } from "date-fns/locale"
import { createContext, ReactNode, useEffect, useReducer, useState } from "react"

interface CoffeContextProviderProps {
    children: ReactNode
}

export interface CartItemsState {
    id: string,
    image: string,
    name: string,
    quantity: number,
    price: number,
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
    const [coffeCart, setCoffeCart] = useState<CartItemsState[]>([])
    const [itemsCartQuantity, setItemsCartQuantity] = useState(0)
    const [coffeItemCount, setCoffeItemCount] = useState(0)
    const [coffeItemPriceWithOutShipping, setcoffeItemPriceWithOutShipping] = useState(0)
    const [coffeItemPriceWithShipping, setcoffeItemPriceWithShipping] = useState(0)

    const shipping = 3.5

    useEffect(() => {
        changeCartTotalCount()
    }, [coffeCart, coffeItemCount])

    useEffect(() => {
        totalItemsPriceWithOutShipping()
        totalItemsPriceWithShipping()
    }, [coffeCart])

    function addNewCoffeInCart(newCart: CartItemsState) {
        if (newCart.quantity > 0) {
            let findItem = coffeCart.findIndex(item => item.id === newCart.id)
            if (findItem > -1) {
                let modifyCart = coffeCart.map(item => {
                    if (item.id === newCart.id) {
                        return { ...item, quantity: item.quantity + newCart.quantity }
                    }
                    return item
                })
                setCoffeCart(modifyCart)
            } else {
                setCoffeCart((previousState) => [...previousState, newCart])
            }
        }
        setCoffeItemCount(newCart.quantity)
    }

    function changeCartTotalCount() {
        let newCartTotalCount = coffeCart.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
        setItemsCartQuantity(newCartTotalCount)
    }

    function removeFromCart(id: string) {
        let cartItemsWhitoutADeletedItem = [...coffeCart].filter((item) => item.id !== id)
        setCoffeCart(cartItemsWhitoutADeletedItem)
    }

    function decreaseItemQuantity(item: CartItemsState) {
        let decreaseCoffeCart = coffeCart.map(coffe => {
            if (coffe.id === item.id && coffe.quantity > 0) {
                return { ...coffe, quantity: item.quantity - 1 }
            }
            return coffe
        })
        setCoffeCart(previousCart => previousCart = decreaseCoffeCart)
        item.quantity > 0 ? setCoffeItemCount((previousState) => previousState - 1) : setCoffeItemCount(0)
        console.log(item)
    }


    function increaseItemQuantity(item: CartItemsState) {
        let increaseCoffeCart = coffeCart.map(coffe => {
            if (coffe.id === item.id) {
                return { ...coffe, quantity: item.quantity + 1 }
            }
            return coffe
        })
        setCoffeCart(previousCart => previousCart = increaseCoffeCart)
        setCoffeItemCount((previousState) => previousState + 1)
        console.log(item)
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