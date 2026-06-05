import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../../shared/utils/ui/calcTotalPrice";
import { getCartFromLS } from "../../../shared/utils/ui/getCartFromLS";

export type CartItem = {
  id: number; 
  title: string; 
  imageUrl: string; 
  price: number; 
  sizes: number; 
  types: number;
  count: number;
}

interface CartSliceState {
  totalPrice: number,
  items: CartItem[];
}

const { items, totalPrice } = getCartFromLS();

const initialState: CartSliceState = {
  totalPrice,
  items,
}

const basketSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id == action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state, action) {
      const findItem = state.items.find(obj => obj.id == action.payload)

      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
          state.totalPrice -= findItem.price
        }
      }
    },
    removeItem(state, action) {
      const removedItem = state.items.find((obj) => obj.id === action.payload);

      if (removedItem) {
        state.totalPrice -= removedItem.price * removedItem.count;
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem,  removeItem, minusItem, clearItems} = basketSlice.actions

export default basketSlice.reducer