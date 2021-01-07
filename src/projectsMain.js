import "./projectsMain.css";
import React from "react";
import { GridList, Grid } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { t } from "react-switch-lang";
import Button from "@material-ui/core/Button";

class PortfolioMain extends React.Component {
  constructor(props) {
    super(props);
    this.pc = props.pc;
    this.state = {};
  }

  async getRandomPhotoFromEachSection() {
    this.setState({
      ...this.state,
      randomPhoto1: {
        url:
          "https://s3.us-east-2.amazonaws.com/zhmodikov.com/static/photo/5/anastasia.jpg"
      },
      randomPhoto2: {
        url:
          "https://s3.us-east-2.amazonaws.com/zhmodikov.com/static/photo/5/angelica.jpg"
      }
    });
  }

  async componentDidMount() {
    await this.getRandomPhotoFromEachSection();
  }

  render() {
    if (this.pc) {
      return (
        <GridList className="gridlist" cols={1}>
          <Grid className="gridlist" container>
            <Grid item xs={3}>
              <Typography align="left" variant="h4">
                <Link className="listItem" to="Prj1">
                  {t("sidebar.Prj1")}
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
            </Grid>
            <Grid item xs={3}>
              {this.state.randomPhoto2 !== undefined ? (
                <img
                  className="img"
                  src={this.state.randomPhoto2.url}
                  alt="Logo2"
                />
              ) : (
                <br />
              )}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                {t("Projects.text1")}
                <br />
                <br />
                {t("Projects.text2")}
                <br />
                <br />
                {t("Projects.text3")}
              </Typography>
            </Grid>
          </Grid>
        </GridList>
      );
    } else {
      return (
        <div className="photoContainer">
          <Typography className="text" align="left" variant="h4">
            <Link className="listItem" to="Prj1">
              {t("sidebar.Prj1")}
            </Link>
          </Typography>
          <Button className="leftButton">
            <Typography align="left" variant="h4">
              &lt;
            </Typography>
          </Button>
          <Button className="rightButton">
            <Typography align="left" variant="h4">
              &gt;
            </Typography>
          </Button>
          <div className="photo">
            {this.state.randomPhoto1 !== undefined ? (
              <img
                className="img"
                src={this.state.randomPhoto1.url}
                alt="Logo1"
              />
            ) : (
              <br />
            )}
          </div>
        </div>
      );
    }
  }
}

export default PortfolioMain;
