"use client"

import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

const Modal: Modal = ({ open, handleOpen, size, header, children, footer }) => {

    return (
        <Dialog
            open={open}
            size={size || "md"}
            handler={handleOpen}
        >
            {header ? <DialogHeader>{header}</DialogHeader> : null}
            <DialogBody>
                {children}
            </DialogBody>
            {footer ? <DialogFooter>
              {footer}
            </DialogFooter>: null}
        </Dialog>
    )

}

export default Modal;