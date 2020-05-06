import "./PhotoDialog.css";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Image from "react-image";

function PhotoDialog(props) {
  const { onClose, open, selectedImage, nextPhoto, previousPhoto } = props;

  const handleClose = () => {
    onClose();
  };
  const height = document.body.clientHeight * 0.9;
  return (
    <Dialog
      className="dialog"
      onClose={handleClose}
      open={open}
      maxWidth="none"
    >
      <Box
        display="flex"
        flexWrap="nowrap"
        justifyContent="center"
        flexDirection="row"
      >
        <Button onClick={previousPhoto}>&#8592;</Button>
        <Image src={selectedImage} alt={selectedImage} height={height} />
        <Button onClick={nextPhoto}>&#8594;</Button>
      </Box>
    </Dialog>
  );
}

export default PhotoDialog;
