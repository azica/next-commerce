"use client"
import { Button, IconButton } from "@material-tailwind/react"
import { Cart, Heart, Search as SearchIcon } from "akar-icons"
import { signOut, useSession, signIn } from "next-auth/react"
import { useEffect, useState } from "react"

import CartDrawer from "@/components/blocks/Cart"
import { getProfile } from "@/shared/helpers/auth"

import Search from "../blocks/Search"
import Modal from "../ui/Modal"


const HeaderActions = () => {
  const { data: session, update } = useSession()

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       if (session?.error === "RefreshAccessTokenError") {
  //         signIn();
  //       }
  //       if (!session?.user) {
  //         const user = await getProfile(); // Call getProfile function to fetch user profile
  //         update({ user }); // Update session with fetched user data
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user profile:", error);
  //     }
  //   };

  //   fetchProfile(); // Call the asynchronous function to fetch user profile
  // }, [session, update]);
  console.log(session)

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
    <div className="flex gap-3">
      {actions.map((button, idx) => (
        <IconButton key={idx} className="bg-transparent shadow-none" onClick={button.handle}>
          {button.icon}
        </IconButton>
      ))}
      <CartDrawer open={showCart} toggleDrawer={toggleDrawer} />
      {session === null || session === undefined ? (
        <a href="/signin">
          <Button>Sing In</Button>
        </a>
      ) : (
        <Button onClick={() => signOut({ callbackUrl: "/" })}>Sing Out</Button>
      )}
      <Modal open={showSearchBar} handleOpen={() => setShowSearchBar(!showSearchBar)}>
        <Search handleOpen={() => setShowSearchBar(!showSearchBar)} />
      </Modal>
    </div>
  )
}
export default HeaderActions
