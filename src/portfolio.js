import "./portfolio.css";
import React from "react";
import Box from "@material-ui/core/Box";
import GridList from "@material-ui/core/GridList";
import PhotoDialog from "./PhotoDialog";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, section: props.section };

    this.OnPhotoClicked = this.OnPhotoClicked.bind(this);
    this.OnPhotoClose = this.OnPhotoClose.bind(this);
    this.OnNextPhoto = this.OnNextPhoto.bind(this);
    this.OnPreviousPhoto = this.OnPreviousPhoto.bind(this);

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

  OnNextPhoto() {
    var photos = this.getPhotos();
    var index = photos.indexOf(this.state.selectedImage);
    if (index < photos.length - 1)
      this.setState({ selectedImage: photos[index + 1] });
    else this.setState({ selectedImage: photos[0] });
  }

  OnPreviousPhoto() {
    var photos = this.getPhotos();
    var index = photos.indexOf(this.state.selectedImage);
    if (index > 0) this.setState({ selectedImage: photos[index - 1] });
    else this.setState({ selectedImage: photos[photos.length - 1] });
  }

  importAll(r) {
    return r.keys().map(r);
  }

  getPhotos() {
    switch (this.state.section) {
      case "1":
        return this.section1;
      case "2":
        return this.section2;
      case "3":
        return this.section3;
      case "4":
        return this.section4;
      case "5":
        return this.section5;
      case "6":
        return this.section6;
      default:
        return [];
    }
  }

  render() {
    var photos = this.getPhotos();

    return (
      <GridList className="gridlist" cols={1}>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
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
          section={this.props.section}
          onClose={this.OnPhotoClose}
          nextPhoto={this.OnNextPhoto}
          previousPhoto={this.OnPreviousPhoto}
        />
      </GridList>
    );
  }
}

export default Portfolio;
