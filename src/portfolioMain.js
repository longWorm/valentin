import "./portfolioMain";
import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

class PortfolioMain extends React.Component {
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
    return (
      <div>
        <Box
          display="flex"
          flexWrap="nowrap"
          justifyContent="center"
          flexDirection="row"
        >
          <Box key="1" justifyContent="center" p={1}>
            <Typography align="left" variant="h4">
              <Link className="listItem" to="Portraits">
                FACES
              </Link>
            </Typography>
            <img
              className="img"
              src={
                this.section1[Math.floor(Math.random() * this.section1.length)]
              }
              alt="Logo1"
            />
          </Box>
          <Box key="2" justifyContent="center" p={1}>
            <Typography align="left" variant="h4">
              <Link className="listItem" to="Places">
                PLACES
              </Link>
            </Typography>
            <img
              className="img"
              src={
                this.section4[Math.floor(Math.random() * this.section4.length)]
              }
              alt="Logo2"
            />
          </Box>
          <Box key="3" justifyContent="center" p={1}>
            <Typography align="right" variant="h4">
              <Link className="listItem" to="Moments">
                ACTION
              </Link>
            </Typography>
            <img
              className="img"
              src={
                this.section2[Math.floor(Math.random() * this.section2.length)]
              }
              alt="Logo3"
            />
          </Box>
          <Box key="4" justifyContent="center" p={1}>
            <Typography align="right" variant="h4">
              <Link className="listItem" to="Commercial">
                COMMERCE
              </Link>
            </Typography>
            <img
              className="img"
              src={
                this.section3[Math.floor(Math.random() * this.section3.length)]
              }
              alt="Logo4"
            />
          </Box>
        </Box>
      </div>
    );
  }
}

export default PortfolioMain;
