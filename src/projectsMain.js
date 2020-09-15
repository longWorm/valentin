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
    this.section5 = this.importAll(
      require.context("./public/Photos/5", false, /\.(png|jpe?g|svg)$/)
    );
    this.section6 = this.importAll(
      require.context("./public/Photos/6", false, /\.(png|jpe?g|svg)$/)
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  importAll(r) {
    return r.keys().map(r);
  }

  render() {
    var index1 = Math.floor(Math.random() * this.section5.length);
    var index2 = index1 < this.section5.length - 1 ? index1 + 1 : index1 - 1;

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
              <img className="img" src={this.section5[index1]} alt="Logo1" />
            </Grid>
            <Grid item xs={3}>
              <img className="img" src={this.section5[index2]} alt="Logo2" />
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
            <img className="img" src={this.section5[index1]} alt="Logo1" />
          </div>
        </div>
      );
    }
  }
}

export default PortfolioMain;
