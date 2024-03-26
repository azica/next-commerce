import type { Metadata } from "next/types"

import Container from "@/components/layout/Container"

export const metadata: Metadata = {
  title: "Blog",
  description: "...Blog descr",
}
const Blog = () => {

  return (
    <Container>
      <h2>Blog</h2>
    </Container>
  )
}

export default Blog