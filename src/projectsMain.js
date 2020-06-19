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
          <Box key="2" justifyContent="center" p={1} width="25%">
            <img className="img" src={this.section5[index2]} alt="Logo2" />
          </Box>
          <Box key="3" justifyContent="center" p={1} width="25%">
            <Typography variant="h4">
              Empty bottles on the table
              <br />
              Black roses on the ground <br />
              Silhouettes of people dancing
              <br />
              To an unfamiliar sound
              <br />
              Hello stranger
              <br />
              Can I call you a friend? My friend, I'm going down
              <br />
              With empty bottles on the table
              <br />
              Black roses on the ground
            </Typography>
          </Box>
          <Box key="4" justifyContent="center" p={1} width="25%">
            <Typography align="right" variant="h4">
              Ground bottle six with the permanent bliss <br />
              Razor sharp glass lips, give me a kiss <br />
              Eyes fixated with the familiar shape <br />
              Black label, white letters, they integrate <br />
              Cubans in the bar room with harpoons <br />
              I bloom in the night fog like mushrooms <br />
              See every bullet hole in the window of my past <br />
              Now that's what I call a shot glass (two, three, four)
            </Typography>
          </Box>
        </Box>
      </div>
    );
  }
}

export default PortfolioMain;
