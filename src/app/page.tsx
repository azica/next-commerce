import { Suspense } from "react"

import BestSeller from "@/components/blocks/BestSeller"
import Hero from "@/components/blocks/Hero"
import ShopByCategories from "@/components/blocks/ShopByCategories"

import Loading from "./loading"

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Suspense fallback={<Loading />}>
        <ShopByCategories />
        <BestSeller />
      </Suspense> */}
    </>
  )
}
export default Home
