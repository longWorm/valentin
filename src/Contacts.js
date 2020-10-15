import React from "react";
import TextField from "@material-ui/core/TextField";

class Contacts extends React.Component {
  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Subject" fullWidth />
        <br />
        <TextField id="filled-basic" label="Message" fullWidth />
        <br />
        <TextField id="outlined-basic" label="Contact Information" fullWidth />
      </form>
    );
  }
}

export default Contacts;
