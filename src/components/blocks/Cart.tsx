"use client"
import { Drawer, Typography, List, ListItem, IconButton, Button, ListItemSuffix } from "@material-tailwind/react"
import { TrashCan } from "akar-icons"
import { Fragment, useEffect, useState } from "react"

const Cart = ({ open, toggleDrawer }: { open: boolean; toggleDrawer: () => void }) => {
  const [subtotal, setSubtotal] = useState(0)
  const [cartList, setCartList] = useState<({ quantity: number } & Model.Product)[]>(
    JSON.parse(localStorage.getItem("cartList") || "[]"),
  )

  const deleteFromCartHandle = (id: number) => {
    const updatedCartList = cartList.filter((item) => item.id !== id)
    setCartList(updatedCartList)
    localStorage.setItem("cartList", JSON.stringify(updatedCartList))
  }

  useEffect(() => {
    setSubtotal(cartList.reduce((acc, item) => acc + item.price * item.quantity, 0))
  }, [cartList])

  return (
    <Drawer open={open} onClose={toggleDrawer} placement="right">
      <Typography variant="h5" className="text-center text-purple-500 font-medium my-4">
        You have {cartList.length} item{cartList.length !== 1 ? "s" : ""} in your cart
      </Typography>

      <List>
        {cartList.map((el) => (
          <Fragment key={el.id}>
            <ListItem className="flex gap-3">
              <div className="w-20 h-20 shrink-0">
                <img src={el.images[0] || el.images[1]} alt={el.title} className="w-full" />
              </div>
              <div>
                <Typography variant="h6" className="text-primary-500 font-semibold text-xs">
                  {el.title}
                </Typography>
                <div className="flex gap-2 items-center">
                  <Typography variant="paragraph" className="text-primary-500">
                    {el.price}$
                  </Typography>
                  <Typography variant="small" className="text-primary-500">
                    x
                  </Typography>
                  <Typography variant="paragraph" className="text-primary-500">
                    {el.quantity}
                  </Typography>
                </div>
              </div>
              <ListItemSuffix>
                <IconButton variant="text" onClick={() => deleteFromCartHandle(el.id)}>
                  <TrashCan strokeWidth={1.5} size={20} />
                </IconButton>
              </ListItemSuffix>
            </ListItem>
          </Fragment>
        ))}
      </List>

      <div className="flex justify-between px-4 my-5">
        <Typography className="text-xs font-semibold">Subtotal</Typography>
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
