import "./About";
import React from "react";
import Box from "@material-ui/core/Box";
// import GridList from "@material-ui/core/GridList";
import { t } from "react-switch-lang";
import Typography from "@material-ui/core/Typography";

import avatar from "./public/Photos/about/Valentin.jpg";
import award from "./public/Photos/about/award.png";
import award2 from "./public/Photos/about/award2.png";

class About extends React.Component {
  render() {
    return (
      <Box
        display="flex"
        flexWrap="nowrap"
        justifyItems="baseline"
        justifyContent="baseline"
        flexDirection="row"
      >
        <Box key="1" justifyContent="center" p={1}>
          <img className="img" src={avatar} alt="avatar" />
        </Box>
        <Box
          key="2"
          display="flex"
          justifyContent="flex-start"
          flexDirection="column"
          p={1}
        >
          <Box>
            <Typography align="center" variant="subtitle1">
              {t("About.text1")}
              <br />
              <br />
              {t("About.text2")}
              <br />
              <br />
              {t("About.text3")}
              <br />
              <br />
            </Typography>
          </Box>
        </Box>
        <Box flexDirection="column" justifyItems="stretch" mx={0.5}>
          <Box>
            <img className="img" src={award} alt="award" />
          </Box>
          <Box>
            <img className="img" src={award2} alt="award2" />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default About;
