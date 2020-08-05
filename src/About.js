import "./About";
import React from "react";
import Box from "@material-ui/core/Box";
import GridList from "@material-ui/core/GridList";
import { t } from "react-switch-lang";
import Typography from "@material-ui/core/Typography";

import avatar from "./public/Photos/about/Valentin.jpg";
import award from "./public/Photos/about/award.png";
import award2 from "./public/Photos/about/award2.png";

class About extends React.Component {
  render() {
    return (
      <GridList className="gridlist" cols={1}>
        <div style={{ height: 600 }}>
          <Box display="flex">
            <Box key="1" justifyContent="center" p={1} height="600">
              <img src={avatar} alt="avatar" width="400" />
            </Box>
            <Box flexDirection="column" justifyItems="stretch" mx={0.5}>
              <Box>
                <img src={award} alt="award" width="200" />
              </Box>
              <Box>
                <img src={award2} alt="award2" width="200" />
              </Box>
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
          </Box>
        </div>

        <Box display="flex">
          <Box width="50%">
            <Typography variant="subtitle1" align="left">
              <br />
              <br />
              {t("Interviews.title")}
              <br />
              <br />
              {t("Interviews.title1")}
              <br />
              {t("Interviews.text1")}
              <br />
              <br />
              {t("Interviews.title2")}
              <br />
              {t("Interviews.text2")}
              <br />
              <br />
              {t("Interviews.title3")}
              <br />
              {t("Interviews.text3")}
            </Typography>
          </Box>
          <Box key="1" justifyContent="center" p={1} height="600">
            <img src={avatar} alt="avatar" width="400" />
          </Box>
        </Box>
      </GridList>
    );
  }
}

export default About;
