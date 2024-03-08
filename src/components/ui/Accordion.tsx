"use client"

import {
  ListItem,
  AccordionHeader,
  Typography,
  AccordionBody,
  Accordion as MaterialAccordion,
} from "@material-tailwind/react"
import { ChevronDownSmall } from "akar-icons"
import { useState, type ReactNode } from "react"

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <MaterialAccordion
      open={open}
      icon={
        <ChevronDownSmall
          strokeWidth={2}
          size={36}
          className={`mx-auto h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      }>
      <ListItem className="p-0" selected={open}>
        <AccordionHeader onClick={handleOpen} className="border-b-0 p-3">
          <Typography className="mr-auto font-semibold">{title}</Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        {children}
      </AccordionBody>
    </MaterialAccordion>
  )
}

export default Accordion
