"use client"

import { Card, List } from '@material-tailwind/react'
import { ReactNode } from 'react'

const SideMenu = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="h-[calc(100vh-2rem)] w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <List>
        {children}
      </List>
    </Card>
  )
}

export default SideMenu