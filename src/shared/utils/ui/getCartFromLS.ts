import { calcTotalPrice } from "./calcTotalPrice"

export const getCartFromLS = () => {
    const data = localStorage.getItem('card')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items);

    return {
        items,
        totalPrice
    }
}