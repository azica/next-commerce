import type { ReactNode } from "react"

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={`max-w-[1170px] mx-auto ${className && className}`}>{children}</div>
}

export default Container
