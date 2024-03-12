import type { Metadata } from "next"
import type { ReactNode } from "react"

import Link from "next/link"

export const metadata: Metadata = {
  title: "about | next opp",
  description: "Generated by create next app",
}

export default function AboutLayot({ children }: { children: ReactNode }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>

      {children}
    </div>
  )
}
