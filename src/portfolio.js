import React from "react";
import Box from "@material-ui/core/Box";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
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
      default:
        break;
    }

    return (
      <div className="portfolio">
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {photos.map((image, index) => (
            <Box key={image} justifyContent="center" p={1}>
              <img src={image} alt="PortraitsLogo" height="300px" />
            </Box>
          ))}
        </Box>
      </div>
    );
  }
}

export default Portfolio;
