import React from "react";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";

export default function Popup(props) {
    const {title, children, openPopup, setOpenPopup} = props;
    console.log("JOJO");
    console.log(props);
    console.log("JOJO");

   return (
       <Dialog open={openPopup} maxWidth="50vh">
           <DialogTitle>
               <div>Add new anime to list:</div>
           </DialogTitle>
           <DialogContent>
               <div>
                   {children}
               </div>
           </DialogContent>
       </Dialog>
   )
}