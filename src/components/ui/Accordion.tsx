import type { ReactNode } from "react"
import {
  ListItem,
  AccordionHeader,
  Typography,
  AccordionBody,
  Accordion as MaterialAccordion,
} from "@material-tailwind/react"
import { ChevronDownSmall } from "akar-icons"
import React from "react"

const Accordion = ({
  open,
  handleOpen,
  title,
  children,
}: {
  open: boolean;
  handleOpen: () => void;
  title: string;
  children: ReactNode;
}) => {
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
        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
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
