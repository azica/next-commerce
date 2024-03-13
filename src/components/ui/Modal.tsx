"use client"

import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";

const Modal: Modal = ({ open, handleOpen, size, header, footer, children }) => {

    return (
        <Dialog
            open={open}
            size={size || "md"}
            handler={handleOpen}
        >
            <DialogHeader>{header}</DialogHeader>
            <DialogBody>
                {children}
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={() => handleOpen()}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button
                    variant="gradient"
                    color="green"
                    onClick={() => handleOpen()}
                >
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )

}

export default Modal;