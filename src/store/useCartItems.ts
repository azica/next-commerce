import { create } from 'zustand';

type CartItem = {
  quantity: number
} & Model.Product;

interface CartItemsState {
  cartList: CartItem[];
  subtotal: number;
  addToCart: (product: Model.Product) => void;
  subtractFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const useCartItems = create<CartItemsState>((set) => {
  const initialCartList: CartItem[] = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartList') || '[]') : [];

  return {
    cartList: initialCartList,
    subtotal: initialCartList.reduce((total, item) => total + item.price * item.quantity, 0),
    addToCart: (product) =>
      set((state) => {
        const itemIndex = state.cartList.findIndex((item) => item.id === product.id);
        if (itemIndex !== -1) {
          state.cartList[itemIndex].quantity++;
        } else {
          state.cartList.push({ ...product, quantity: 1 });
        }

        const newSubtotal = state.cartList.reduce((total, item) => total + item.price * item.quantity, 0);
        localStorage.setItem('cartList', JSON.stringify(state.cartList));
        return { ...state, subtotal: newSubtotal };
      }),
    removeFromCart: (id) =>
      set((state) => {
        state.cartList = state.cartList.filter((item) => item.id !== id);

        const newSubtotal = state.cartList.reduce((total, item) => total + item.price * item.quantity, 0);
        localStorage.setItem('cartList', JSON.stringify(state.cartList));
        return { ...state, subtotal: newSubtotal };
      }),
    subtractFromCart: (id) =>
      set((state) => {
        const itemIndex = state.cartList.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {
          if (state.cartList[itemIndex].quantity > 1) {
            state.cartList[itemIndex].quantity--;
          }

          const newSubtotal = state.cartList.reduce((total, item) => total + item.price * item.quantity, 0);
          localStorage.setItem('cartList', JSON.stringify(state.cartList));
          return { ...state, subtotal: newSubtotal };
        }
        return state;
      }),
  };
});

export default useCartItems;
