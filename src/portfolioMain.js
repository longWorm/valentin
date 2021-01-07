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
  }

  async getRandomPhotoFromEachSection() {
    fetch(
      "https://0wdqxf9sbk.execute-api.us-east-1.amazonaws.com/getHomePagePhotos/getHomePagePhotos"
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          ...this.state,
          randomPhoto1: data[0],
          randomPhoto2: data[1],
          randomPhoto3: data[2],
          randomPhoto4: data[3]
        })
      );
  }

  async componentDidMount() {
    await this.getRandomPhotoFromEachSection();
  }

  GetRandomPhotoFromSelectedProject() {
    switch (this.state.selectedProject) {
      case 1:
        return this.state.randomPhoto1;

      case 2:
        return this.state.randomPhoto2;

      case 3:
        return this.state.randomPhoto3;

      case 4:
        return this.state.randomPhoto4;

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
        return "Moments";

      case 3:
        return "Commercial";

      case 4:
        return "Places";

      default:
        return undefined;
    }
  }

  GetProjectTitle() {
    switch (this.state.selectedProject) {
      case 1:
        return "FACES";

      case 2:
        return "ACTION";

      case 3:
        return "COMMERCE";

      case 4:
        return "PLACES";

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
              {this.state.randomPhoto1 !== undefined ? (
                <img
                  className="img"
                  src={this.state.randomPhoto1.url}
                  alt="Logo1"
                />
              ) : (
                <br />
              )}
            </Box>
            <Box key="2" justifyContent="center" p={1}>
              <Typography align="left" variant="h4">
                <Link className="listItem" to="Moments">
                  ACTION
                </Link>
              </Typography>
              {this.state.randomPhoto2 !== undefined ? (
                <img
                  className="img"
                  src={this.state.randomPhoto2.url}
                  alt="Logo2"
                />
              ) : (
                <br />
              )}
            </Box>
            <Box key="3" justifyContent="center" p={1}>
              <Typography align="right" variant="h4">
                <Link className="listItem" to="Commercial">
                  COMMERCE
                </Link>
              </Typography>
              {this.state.randomPhoto3 !== undefined ? (
                <img
                  className="img"
                  src={this.state.randomPhoto3.url}
                  alt="Logo3"
                />
              ) : (
                <br />
              )}
            </Box>
            <Box key="4" justifyContent="center" p={1}>
              <Typography align="right" variant="h4">
                <Link className="listItem" to="Places">
                  PLACES
                </Link>
              </Typography>
              {this.state.randomPhoto4 !== undefined ? (
                <img
                  className="img"
                  src={this.state.randomPhoto4.url}
                  alt="Logo4"
                />
              ) : (
                <br />
              )}
            </Box>
          </Box>
        </div>
      );
    } else {
      let photo = this.GetRandomPhotoFromSelectedProject();
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
          {photo !== undefined ? (
            <div className="photo">
              <img className="img" src={photo.url} alt={photo.id} />
            </div>
          ) : (
            <br />
          )}
        </div>
      );
    }
  }
}

export default PortfolioMain;
