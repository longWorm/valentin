import "./PhotoDialog.css";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

function PhotoDialog(props) {
  const { onClose, open, selectedImage, nextPhoto, previousPhoto } = props;

  const handleClose = () => {
    onClose();
  };
  const height = document.body.clientHeight * 0.9;

  return (
    <Dialog className="dialog" onClose={handleClose} open={open} maxWidth="xl">
      <Box display="flex" flexWrap="nowrap" justifyContent="center">
        <Button onClick={previousPhoto}>&lt;</Button>
        <img src={selectedImage} alt={selectedImage} height={height} />
        <Button onClick={nextPhoto}>&gt;</Button>
      </Box>
    </Dialog>
  );
}

export default PhotoDialog;
