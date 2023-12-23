import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function DialogModal(props) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <div className="dsp m-5">
      <Button onClick={handleOpen} variant="gradient">
        <h3 className="text-base">
          {props.name}
        </h3>
      </Button>
      <Dialog open={open} handler={handleOpen} className="text-2xl">
        <DialogHeader>{props.name}</DialogHeader>
        <DialogBody>
          {props.details}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <h3 className="text-base">Cancel</h3>
          </Button>
          {/* <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button> */}
        </DialogFooter>
      </Dialog>
    </div>
  );
}