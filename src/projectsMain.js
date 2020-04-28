import "./projectsMain";
import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { t } from "react-switch-lang";

class PortfolioMain extends React.Component {
  constructor(props) {
    super(props);
    this.section5 = this.importAll(
      require.context("./public/Photos/5", false, /\.(png|jpe?g|svg)$/)
    );
    this.section6 = this.importAll(
      require.context("./public/Photos/6", false, /\.(png|jpe?g|svg)$/)
    );
  }

  importAll(r) {
    return r.keys().map(r);
  }

  render() {
    var index1 = Math.floor(Math.random() * this.section5.length);
    var index2 = index1 < this.section5.length - 1 ? index1 + 1 : index1 - 1;
    var index3 = Math.floor(Math.random() * this.section6.length);
    var index4 = index3 < this.section6.length - 1 ? index3 + 1 : index3 - 1;

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
              <Link className="listItem" to="Prj1">
                {t("sidebar.Prj1")}
              </Link>
            </Typography>
            <img className="img" src={this.section5[index1]} alt="Logo1" />
          </Box>
          <Box key="2" justifyContent="center" p={1}>
            <img className="img" src={this.section5[index2]} alt="Logo2" />
          </Box>
          <Box key="3" justifyContent="center" p={1}>
            <img className="img" src={this.section6[index3]} alt="Logo3" />
          </Box>
          <Box key="4" justifyContent="center" p={1}>
            <Typography align="right" variant="h4">
              <Link className="listItem" to="Prj2">
                {t("sidebar.Prj2")}
              </Link>
            </Typography>
            <img className="img" src={this.section6[index4]} alt="Logo4" />
          </Box>
        </Box>
      </div>
    );
  }
}

export default PortfolioMain;
