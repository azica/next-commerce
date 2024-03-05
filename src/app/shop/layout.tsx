
import Container from "@/components/layout/Container"

const ShopLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Container className="flex gap-10">
      {children}
    </Container>
  )
}
export default ShopLayout
