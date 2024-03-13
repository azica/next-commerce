import { Suspense } from "react"

import BestSeller from "@/components/blocks/BestSeller"
import Hero from "@/components/blocks/Hero"
import ShopByCategories from "@/components/blocks/ShopByCategories"

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Suspense>
        <ShopByCategories />
      </Suspense>
      <Suspense>
        <BestSeller />
      </Suspense>

    </main>
  )
}
export default Home
