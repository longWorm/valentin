import "./About";
import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  Card,
  CardContent,
  CardMedia,
  GridList,
  Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { t } from "react-switch-lang";
import { Switch, Route } from "react-router-dom";

import avatar from "./public/Photos/about/Valentin.jpg";
import avatar2 from "./public/Photos/about/Boris-Grebenshikov.jpg";
import award from "./public/Photos/about/award.png";
import award2 from "./public/Photos/about/award2.png";
import award3 from "./public/Photos/about/award3.png";
import award4 from "./public/Photos/about/award4.jpg";

import inked1 from "./public/Photos/about/inked/1.jpg";
import inked2 from "./public/Photos/about/inked/2.jpg";
import inked3 from "./public/Photos/about/inked/3.jpg";
import inked4 from "./public/Photos/about/inked/4.jpg";
import inked5 from "./public/Photos/about/inked/5.jpg";
import inked6 from "./public/Photos/about/inked/6.jpg";

import misfit1 from "./public/Photos/about/misfit/1.jpg";
import misfit2 from "./public/Photos/about/misfit/2.jpg";
import misfit3 from "./public/Photos/about/misfit/3.jpg";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.pc = props.pc;
  }

  render() {
    if (this.pc) {
      return (
        <GridList className="gridlist" cols={1}>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <Box display="flex">
              <Box key="1" justifyContent="center" p={1}>
                <img src={avatar} alt="avatar" height="600" />
              </Box>
              <Box flexDirection="column" justifyItems="stretch" mx={0.5}>
                <Box>
                  <img src={award} alt="award" height="150" />
                </Box>
                <Box>
                  <img src={award2} alt="award2" height="150" />
                </Box>
                <Box>
                  <img src={award3} alt="award3" height="150" />
                </Box>
                <Box>
                  <img src={award4} alt="award4" height="150" />
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
                  <Typography align="center" variant="h5">
                    {t("About.Bio")}
                  </Typography>
                  <Typography align="center" variant="subtitle1">
                    <br />
                    <br />
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
            <br />
            <br />
            <Box display="flex">
              <Grid className="gridlist" container>
                <Grid item xs={6}>
                  <Typography align="center" variant="h5">
                    {t("About.Interviews")}
                  </Typography>
                  <Typography variant="subtitle1" align="left">
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
                </Grid>
                <Grid item xs={6}>
                  <img src={avatar2} alt="avatar" />
                </Grid>
              </Grid>
            </Box>
            <Box display="flex">
              <Grid className="gridlist" container>
                <Grid item xs={4}>
                  <Typography align="center" variant="h5">
                    <br />
                    <br />
                    {t("About.SelectedPublications1")}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src={inked1} alt="inked1" width="600" />
                </Grid>
                <Grid item xs={4}>
                  <img src={inked2} alt="inked2" width="600" />
                </Grid>
                <Grid item xs={4}>
                  <img src={inked3} alt="inked3" width="600" />
                </Grid>
                <Grid item xs={4}>
                  <img src={inked4} alt="inked4" width="600" />
                </Grid>
                <Grid item xs={4}>
                  <img src={inked5} alt="inked5" width="600" />
                </Grid>
                <Grid item xs={4}>
                  <img src={inked6} alt="inked6" width="600" />
                </Grid>
              </Grid>
            </Box>

            <Box display="flex">
              <Grid className="gridlist" container>
                <Grid item xs={4}>
                  <Typography align="center" variant="h5">
                    <br />
                    <br />
                    {t("About.SelectedPublications2")}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src={misfit1} alt="misfit1" width="600" />
                </Grid>
                <Grid item xs={4}>
                  <img src={misfit2} alt="misfit2" width="600" />
                </Grid>
                <Grid item xs={4}>
                  <img src={misfit3} alt="misfit3" width="600" />
                </Grid>
              </Grid>
            </Box>

            <Box display="flex">
              <Grid className="gridlist" container>
                <Grid item xs={4}>
                  <Typography align="center" variant="h5">
                    <br />
                    <br />
                    {t("About.SelectedPublications3")}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </GridList>
      );
    } else {
      return (
        <Box display="flex" flexDirection="column">
          <List className="MaterialUiList" disablePadding>
            <ListItem key="Bio" button>
              <Typography>
                <Link to="/About/Bio" className="listItem">
                  {t("About.Bio")}
                </Link>
              </Typography>
            </ListItem>
            <ListItem key="Interviews" button>
              <Link to="/About/Interviews" className="listItem">
                {t("About.Interviews")}
              </Link>
            </ListItem>
            <ListItem key="Publications" button alignItems="center">
              <Link to="/About/Publications" className="listItem">
                {t("About.Publications")}
              </Link>
            </ListItem>
          </List>
          <Switch>
            <Route path="/About/Bio">
              <Card>
                <CardContent>
                  <CardMedia component="img" image={avatar} height="600" />
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
                </CardContent>
              </Card>
            </Route>
            <Route path="/About/Interviews">INTERVIEWS</Route>
            <Route path="/About/Publications">PUBLICATIONS</Route>
          </Switch>
        </Box>
      );
    }
  }
}

export default About;
