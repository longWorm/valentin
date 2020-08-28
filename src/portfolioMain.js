import "./portfolioMain";
import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class PortfolioMain extends React.Component {
  constructor(props) {
    super(props);
    this.pc = props.pc;
    this.state = { selectedProject: 1 };

    this.GetRandomPhotoFromSelectedProject = this.GetRandomPhotoFromSelectedProject.bind(
      this
    );
    this.PreviousProject = this.PreviousProject.bind(this);
    this.NextProject = this.NextProject.bind(this);

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

  GetRandomPhotoFromSelectedProject() {
    switch (this.state.selectedProject) {
      case 1:
        return this.section1[Math.floor(Math.random() * this.section1.length)];

      case 2:
        return this.section4[Math.floor(Math.random() * this.section4.length)];

      case 3:
        return this.section2[Math.floor(Math.random() * this.section2.length)];

      case 4:
        return this.section3[Math.floor(Math.random() * this.section3.length)];

      default:
        return undefined;
    }
  }

  PreviousProject() {
    if (this.state.selectedProject > 1)
      this.setState({ selectedProject: this.state.selectedProject - 1 });
    else this.setState({ selectedProject: 4 });
  }

  NextProject() {
    if (this.state.selectedProject < 4)
      this.setState({ selectedProject: this.state.selectedProject + 1 });
    else this.setState({ selectedProject: 1 });
  }

  GetProjectUrl() {
    switch (this.state.selectedProject) {
      case 1:
        return "Portraits";

      case 2:
        return "Places";

      case 3:
        return "Moments";

      case 4:
        return "Commercial";

      default:
        return undefined;
    }
  }

  GetProjectTitle() {
    switch (this.state.selectedProject) {
      case 1:
        return "FACES";

      case 2:
        return "PLACES";

      case 3:
        return "ACTION";

      case 4:
        return "COMMERCE";

      default:
        return undefined;
    }
  }

  render() {
    if (this.pc) {
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
                  this.section1[
                    Math.floor(Math.random() * this.section1.length)
                  ]
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
                  this.section4[
                    Math.floor(Math.random() * this.section4.length)
                  ]
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
                  this.section2[
                    Math.floor(Math.random() * this.section2.length)
                  ]
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
                  this.section3[
                    Math.floor(Math.random() * this.section3.length)
                  ]
                }
                alt="Logo4"
              />
            </Box>
          </Box>
        </div>
      );
    } else {
      return (
        <div className="photoContainer">
          <Typography className="text" align="left" variant="h4">
            <Link className="listItem" to={this.GetProjectUrl()}>
              {this.GetProjectTitle()}
            </Link>
          </Typography>
          <Button className="leftButton" onClick={this.PreviousProject}>
            <Typography align="left" variant="h4">
              &lt;
            </Typography>
          </Button>
          <Button className="rightButton" onClick={this.NextProject}>
            <Typography align="left" variant="h4">
              &gt;
            </Typography>
          </Button>
          <div className="photo">
            <img
              className="img"
              src={this.GetRandomPhotoFromSelectedProject()}
              alt={this.GetRandomPhotoFromSelectedProject()}
            />
          </div>
        </div>
      );
    }
  }
}

export default PortfolioMain;
