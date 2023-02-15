import React from "react";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";

export default function Popup(props) {
    const {children, openPopup} = props;
   return (
       <Dialog open={openPopup} maxWidth="50vh">
           <DialogTitle>
               <div>Add new anime to database:</div>
           </DialogTitle>
           <DialogContent>
               <div>
                   {children}
               </div>
           </DialogContent>
       </Dialog>
   )
}