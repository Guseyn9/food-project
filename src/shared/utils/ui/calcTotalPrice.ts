import { CartItem } from "../../../features/basketSlice/ui/basketSlice";

export const calcTotalPrice = (items: CartItem[]) => {
    return items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0)
}