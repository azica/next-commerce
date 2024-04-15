import type { ReactNode } from "react"

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={`max-w-[1170px] mx-auto px-4 ${className && className}`}>{children}</div>
}

export default Container
