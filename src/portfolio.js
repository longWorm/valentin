import "./portfolio.css";
import React from "react";
import Box from "@material-ui/core/Box";
import GridList from "@material-ui/core/GridList";
import PhotoDialog from "./PhotoDialog";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.OnPhotoClicked = this.OnPhotoClicked.bind(this);
    this.OnPhotoClose = this.OnPhotoClose.bind(this);

    this.section1 = this.importAll(
      require.context("./public/Photos/1", false, /\.(png|jpe?g|svg)$/)
    );
    this.section2 = this.importAll(
      require.context("./public/Photos/2", false, /\.(png|jpe?g|svg)$/)
    );
    this.section3 = this.importAll(
      require.context("./public/Photos/3", false, /\.(png|jpe?g|svg)$/)
    );
    this.section4 = this.importAll(
      require.context("./public/Photos/4", false, /\.(png|jpe?g|svg)$/)
    );
    this.section5 = this.importAll(
      require.context("./public/Photos/5", false, /\.(png|jpe?g|svg)$/)
    );
    this.section6 = this.importAll(
      require.context("./public/Photos/6", false, /\.(png|jpe?g|svg)$/)
    );
  }

  OnPhotoClose() {
    this.setState({ open: false });
  }

  OnPhotoClicked(photo) {
    this.setState({ open: !this.state.open, selectedImage: photo });
  }

  importAll(r) {
    return r.keys().map(r);
  }

  render() {
    var photos = [];
    switch (this.props.section) {
      case "1":
        photos = this.section1;
        break;
      case "2":
        photos = this.section2;
        break;
      case "3":
        photos = this.section3;
        break;
      case "4":
        photos = this.section4;
        break;
      case "5":
        photos = this.section5;
        break;
      case "6":
        photos = this.section6;
        break;
      default:
        break;
    }

    return (
      <GridList className="gridlist" cols={1}>
        <Box
          className="box"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          {photos.map((image, index) => (
            <Box key={image} justifyContent="center" p={1}>
              <img
                src={image}
                alt="PortraitsLogo"
                height="300px"
                onClick={() => this.OnPhotoClicked(image)}
              />
            </Box>
          ))}
        </Box>
        <PhotoDialog
          open={this.state.open}
          selectedImage={this.state.selectedImage}
          onClose={this.OnPhotoClose}
        />
      </GridList>
    );
  }
}

export default Portfolio;
