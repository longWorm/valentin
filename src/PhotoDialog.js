import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "./PhotoDialog.css";

function PhotoDialog(props) {
  const { onClose, open, selectedImage } = props;

  const handleClose = () => {
    console.log("close");
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <div>
        <img className="img" src={selectedImage} alt={selectedImage}></img>
      </div>
    </Dialog>
  );
}

export default PhotoDialog;
