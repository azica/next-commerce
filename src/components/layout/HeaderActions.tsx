"use client"
import { Button, IconButton } from "@material-tailwind/react"
import { Cart, Heart, Person, Search as SearchIcon } from "akar-icons"
import { signOut, useSession, signIn } from "next-auth/react"
import { useEffect, useState } from "react"

import CartDrawer from "@/components/blocks/Cart"
import { getProfile } from "@/shared/helpers/auth"

import Search from "../blocks/Search"
import Modal from "../ui/Modal"

const HeaderActions = () => {
  const { data: session, status } = useSession()

  console.log("header", session)

  const [showCart, setShowCart] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [productQuantity, setProductQuantity] = useState(0)


  useEffect(() => {
    const cartList = localStorage.getItem("cartList")
    if (cartList) {
      const parsedCartList: Model.Product & { quantity: number }[] = JSON.parse(cartList)
      const totalQuantity = parsedCartList.reduce((acc, el) => acc + el.quantity, 0)
      setProductQuantity(totalQuantity)
    }
  }, [])

  const searchHandle = () => {
    setShowSearchBar(!showSearchBar)
  }

  const wishlistHandle = () => {
    alert("Wishlist clicked")
  }

  const toggleDrawer = () => {
    setShowCart(!showCart)
  }

  const actions = [
    {
      icon: <SearchIcon className="text-primary-500" />,
      handle: () => searchHandle(),
    },
    {
      icon: <Heart className="text-primary-500" />,
      handle: () => wishlistHandle(),
    },
    {
      icon: (
        <div className="inline-block relative">
          <Cart className="text-primary-500" />
          {productQuantity > 0 && (
            <span className="absolute -top-2 -right-1.5 text-sx text-purple-600">{productQuantity}</span>
          )}
        </div>
      ),
      handle: () => toggleDrawer(),
    },
  ]

  return (
    <div className="flex gap-3 items-center">
      {actions.map((button, idx) => (
        <IconButton key={idx} className="bg-transparent shadow-none" onClick={button.handle}>
          {button.icon}
        </IconButton>
      ))}
      <CartDrawer open={showCart} toggleDrawer={toggleDrawer} />
      {session && session.user ? (
        <div className="flex gap-1 items-center">
          <p>Hi {session.user.name}</p>
          <Person strokeWidth={1.5} size={20} />
        </div>
      ) : null}
      {!session ? (
        <a href="/signin">
          <Button>Sign In</Button>
        </a>
      ) : (
        <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</Button>
      )}
      <Modal open={showSearchBar} handleOpen={() => setShowSearchBar(!showSearchBar)}>
        <Search handleOpen={() => setShowSearchBar(!showSearchBar)} />
      </Modal>
    </div>
  )
}
export default HeaderActions
