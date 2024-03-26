"use client"
import { Drawer, Typography, Button } from "@material-tailwind/react"

import useCartItems from "@/store/useCartItems"

import CartItem from "./CartItem"

const Cart = ({ open, toggleDrawer }: { open: boolean; toggleDrawer: () => void }) => {
  const { cartList, subtotal } = useCartItems()

  return (
    <Drawer open={open} onClose={toggleDrawer} placement="right" className="thumb pb-10">
      <Typography variant="h5" className="text-center text-purple-500 font-medium my-4">
        You have {cartList.length} item{cartList.length !== 1 ? "s" : ""} in your cart
      </Typography>

      <div className="flex flex-col gap-2 px-4">
        {cartList.map((el) => (
          <CartItem product={el} key={el.id} />
        ))}
      </div>

      <div className="flex justify-between px-4 my-5">
        <Typography className="text-xs font-semibold" variant="paragraph">Subtotal</Typography>
        <Typography variant="h6">{subtotal} $</Typography>
      </div>

      <div className="flex flex-col gap-3 px-4">
        <a href="/carts">
          <Button variant="outlined" fullWidth>
            View Cart
          </Button>
        </a>
        <a href="/checkout">
          <Button variant="filled" fullWidth>
            Checkout
          </Button>
        </a>
      </div>
    </Drawer>
  )
}

export default Cart
