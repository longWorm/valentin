import "./portfolio.css";
import React from "react";
import Box from "@material-ui/core/Box";
import GridList from "@material-ui/core/GridList";
import PhotoDialog from "./PhotoDialog";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, section: props.section, pc: props.pc };

    this.OnPhotoClicked = this.OnPhotoClicked.bind(this);
    this.OnPhotoClose = this.OnPhotoClose.bind(this);
    this.OnNextPhoto = this.OnNextPhoto.bind(this);
    this.OnPreviousPhoto = this.OnPreviousPhoto.bind(this);
  }

  async getPhotosFromSection(section) {
    return fetch(
      "https://0wdqxf9sbk.execute-api.us-east-1.amazonaws.com/getPhotos/getPhotosFromSection?section=" +
        section
    )
      .then(res => res.json())
      .then(data => data)
      .catch(error => console.warn(error));
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

  getPhotos() {
    switch (this.props.section) {
      case "1":
        return this.state.section1;
      case "2":
        return this.state.section2;
      case "3":
        return this.state.section3;
      case "4":
        return this.state.section4;
      case "5":
        return this.state.section5;
      case "6":
        return this.state.section6;
      default:
        return [];
    }
  }

  async componentDidMount() {
    this.setState({
      ...this.state,
      section1: await this.getPhotosFromSection(1),
      section2: await this.getPhotosFromSection(2),
      section3: await this.getPhotosFromSection(3),
      section4: await this.getPhotosFromSection(4),
      section5: await this.getPhotosFromSection(5)
    });
  }

  render() {
    var photos = this.getPhotos();
    if (this.props.pc) {
      return (
        <GridList className="gridlist" cols={1}>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {photos !== undefined ? (
              photos.Items.map((image, index) => (
                <Box key={image.id} justifyContent="center" p={1}>
                  <img
                    src={image.url}
                    alt="PortraitsLogo"
                    height="300px"
                    onClick={() => this.OnPhotoClicked(image)}
                  />
                </Box>
              ))
            ) : (
              <br />
            )}
          </Box>

          {this.state.selectedImage !== undefined ? (
            <PhotoDialog
              open={this.state.open}
              selectedImage={this.state.selectedImage.url}
              onClose={this.OnPhotoClose}
              section={this.props.section}
              nextPhoto={this.OnNextPhoto}
              previousPhoto={this.OnPreviousPhoto}
            />
          ) : (
            <br />
          )}
        </GridList>
      );
    } else {
      const width = document.body.clientWidth * 0.8;
      return (
        <GridList className="gridlist" cols={1}>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {photos !== undefined ? (
              photos.Items.map((image, index) => (
                <Box key={image.id} justifyContent="center" p={1}>
                  <img
                    src={image.url}
                    alt="PortraitsLogo"
                    onClick={() => this.OnPhotoClicked(image)}
                    width={width}
                  />
                </Box>
              ))
            ) : (
              <br />
            )}
          </Box>

          {this.state.selectedImage !== undefined ? (
            <PhotoDialog
              open={this.state.open}
              selectedImage={this.state.selectedImage.url}
              onClose={this.OnPhotoClose}
              section={this.props.section}
              nextPhoto={this.OnNextPhoto}
              previousPhoto={this.OnPreviousPhoto}
            />
          ) : (
            <br />
          )}
        </GridList>
      );
    }
  }
}

export default Portfolio;
