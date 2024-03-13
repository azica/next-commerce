import { Suspense } from "react"

import BestSeller from "@/components/blocks/BestSeller"
import Hero from "@/components/blocks/Hero"
import ShopByCategories from "@/components/blocks/ShopByCategories"
import Spinner from "@/components/blocks/Spinner"


const Home = () => {
  return (
    <main className="">
      <Hero />
      <Suspense fallback={<Spinner />}>
        <ShopByCategories />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <BestSeller />
      </Suspense>

    </main>
  )
}
export default Home
