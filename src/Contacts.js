import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { t } from "react-switch-lang";

class Contacts extends React.Component {
  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Subject" fullWidth />
        <br />
        <TextField id="filled-basic" label="Message" fullWidth />
        <br />
        <TextField id="outlined-basic" label="Contact Information" fullWidth />
        <br />
        <br />
        <Button>{t("Contacts.button")}</Button>
      </form>
    );
  }
}

export default Contacts;
