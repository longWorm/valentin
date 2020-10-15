import "./About";
import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  GridList,
  Grid,
  Link as MaterialLink
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
import inked3 from "./public/Photos/about/inked/3.jpg";
import inked7 from "./public/Photos/about/inked/7.jpg";
import inked8 from "./public/Photos/about/inked/8.jpg";
import inked9 from "./public/Photos/about/inked/9.jpg";
import inked10 from "./public/Photos/about/inked/10.jpg";
import inked11 from "./public/Photos/about/inked/11.jpg";
import inked12 from "./public/Photos/about/inked/12.jpg";

import misfit1 from "./public/Photos/about/misfit/1.jpg";
import misfit2 from "./public/Photos/about/misfit/2.jpg";
import misfit3 from "./public/Photos/about/misfit/3.jpg";
import misfit4 from "./public/Photos/about/misfit/4.jpg";

import online1 from "./public/Photos/about/online/1.jpg";
import online2 from "./public/Photos/about/online/2.jpg";
import online3 from "./public/Photos/about/online/3.jpg";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.pc = props.pc;
  }

  render() {
    if (this.pc) {
      return (
        <GridList className="gridlist" cols={1}>
          <Box display="flex" flexWrap="wrap" justifyContent="stretch">
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
                  <Typography align="left" variant="h5">
                    {t("About.Bio")}
                  </Typography>
                  <Typography align="left" variant="subtitle1">
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
            <Box display="flex">
              <Grid className="gridlist" container>
                <Grid item xs={6}>
                  <Typography align="left" variant="h5">
                    <br />
                    <br />
                    INTERVIEW
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    <br />
                    <br />
                    28.04.2020 Echo Chambers
                    <br />
                    <MaterialLink href="https://echochamberescape.com/2020/04/28/view-adjusting-your-work-to-others-leads-to-a-dead-end/">
                      View: Adjusting your work to others leads to a dead-end
                    </MaterialLink>
                    <br />
                    <br />
                    06.01.2020 SBS Russia
                    <br />
                    <MaterialLink href="https://www.sbs.com.au/language/russian/audio/interview-with-photographer-valentin-zhmodikov">
                      Melbourne photographer Valentin Zhmodikov talks about art,
                      tattoos and the shooting of Boris Grebenshchikov
                    </MaterialLink>
                    <br />
                    <br />
                    XX.XX.2020 Savage Thrills
                    <br />
                    <MaterialLink href="https://savagethrills.com/artdesign/spending-time-with-russian-portrait-photographer-valentin-zhmodikov/">
                      Spending time with Russian Portrait Photographer -
                      Valentin Zhmodikov
                    </MaterialLink>
                    <br />
                    <br />
                    7.08.2020 Russian Influence
                    <br />
                    <MaterialLink href="https://www.youtube.com/watch?v=a812-hXsokA&t">
                      Australia's best Russian photographer
                    </MaterialLink>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <img src={avatar2} alt="avatar" width="100%" />
                </Grid>
              </Grid>
            </Box>
            <Box display="flex">
              <Grid className="gridlist" container>
                <Grid item xs={4}>
                  <Typography align="center" variant="h5">
                    <br />
                    <br />
                    SELECTED PUBLICATIONS. TATTOO
                  </Typography>
                  <Typography align="center" variant="subtitle1">
                    TTISM, ISSUE 4, 2020 & INKED AUSTRALIA, ISSUE 44, 2017
                  </Typography>
                  <img src={inked11} alt="inked11" width="100%" />
                </Grid>
                <Grid item xs={2}>
                  <img src={inked9} alt="inked9" width="100%" />
                  <img src={inked12} alt="inked9" width="100%" />
                </Grid>
                <Grid item xs={2}>
                  <img src={inked7} alt="inked2" width="100%" />
                  <img src={inked10} alt="inked3" width="100%" />
                  <img src={inked8} alt="inked3" width="100%" />
                </Grid>
                <Grid item xs={4}>
                  <img src={inked1} alt="inked4" width="100%" />
                  <img src={inked3} alt="inked5" width="100%" />
                </Grid>
              </Grid>
            </Box>

            <Box display="flex">
              <Grid className="gridlist" container>
                <Grid item xs={4}>
                  <img src={misfit1} alt="misfit1" width="100%" />
                </Grid>
                <Grid item xs={4}>
                  <img src={misfit2} alt="misfit2" width="100%" />
                  <img src={misfit3} alt="misfit3" width="100%" />
                </Grid>
                <Grid item xs={4}>
                  <Typography align="center" variant="h5">
                    <br />
                    <br />
                    SELECTED PUBLICATIONS. LIFESTYLE
                  </Typography>
                  <Typography align="center" variant="subtitle1">
                    MSIFIT, AUGUST, 2016 & BROAD MAGAZINE, ISSUE 3, 2017
                  </Typography>
                  <img src={misfit4} alt="misfit4" width="100%" />
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Box>

            <Box display="flex">
              <Grid className="gridlist" container>
                <Grid item xs={4}>
                  <Typography align="center" variant="h5">
                    <br />
                    <br />
                    SELECTED PUBLICATIONS. ONLINE
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    <br />
                    ART:
                    <MaterialLink href="https://nakid.online/2019/03/22/paintings-alive-by-valentin-zhmodikov-exclusive-editorial-nsfw/">
                      NAKID, PAINTINGS ALIVE BY VALENTIN ZHMODIKOV
                    </MaterialLink>
                    <br />
                    <br />
                    LIFESTYLE:
                    <MaterialLink href="https://www.rebeland.co/2016/10/a-million-engines-in-neutral.html">
                      REBEL & CO MAGAZINE, DIVE THRU BALTISOUL,
                    </MaterialLink>
                    <br />
                    <MaterialLink href="https://baltisoul.net/articles/happy-days">
                      HAPPY DAYS
                    </MaterialLink>
                    <br />
                    <br />
                    MUSIC:
                    <MaterialLink href="https://savagethrills.com/music/rufus-du-sol-melbourne-live-review-2019/">
                      SAVAGE THRILLS RUFUS DU SOL MELBOURNE
                    </MaterialLink>
                    ,
                    <MaterialLink href="https://savagethrills.com/music/liars-the-band-live-review-melbourne/">
                      LIARS LIVE
                    </MaterialLink>
                    ,
                    <MaterialLink href="https://savagethrills.com/music/live-review-the-growlers-shake-melbourne/">
                      GROWLERS SHAKE MELBOURNE
                    </MaterialLink>
                    ,
                    <MaterialLink href="https://savagethrills.com/music/when-gogol-bordello-rolled-into-town-melbourne-stood-tall/">
                      MELBOURNE LIVE GOGOL BARDELLO
                    </MaterialLink>
                    , AND MANY OTHERS
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src={online1} alt="online1" width="100%" />
                  <img src={online2} alt="online2" width="100%" />
                </Grid>
                <Grid item xs={4}>
                  <img src={online3} alt="online3" width="100%" />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </GridList>
      );
    } else {
      return (
        <GridList className="gridlist" cols={1}>
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
              <Route path="/About/Interviews">
                <Grid className="gridlist" container alignContent="center">
                  <br />
                  <br />

                  <Grid item xs={6}>
                    <Box>
                      <img src={award} alt="award" width="150" />
                    </Box>
                    <Box>
                      <img src={award2} alt="award2" width="150" />
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box>
                      <img src={award3} alt="award3" width="150" />
                    </Box>
                    <Box>
                      <img src={award4} alt="award4" width="150" />
                    </Box>
                  </Grid>
                </Grid>
                <Typography variant="subtitle1" align="left">
                  <br />
                  <br />
                  28.04.2020 Echo Chambers
                  <br />
                  View: Adjusting your work to others leads to a dead-end
                  <br />
                  <br />
                  06.01.2020 SBS Russia
                  <br />
                  Melbourne photographer Valentin Zhmodikov talks about art,
                  tattoos and the shooting of Boris Grebenshchikov
                  <br />
                  <br />
                  XX.XX.2020 Savage Thrills
                  <br />
                  Spending time with Russian Portrait Photographer - Valentin
                  Zhmodikov
                </Typography>
              </Route>
              <Route path="/About/Publications">
                <Grid className="gridlist" container spacing={1}>
                  <Grid item xs={12}>
                    TTISM, ISSUE 4, 2020
                    <img src={inked11} alt="inked11" width="100%" />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={inked9} alt="inked9" width="100%" />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={inked7} alt="inked7" width="100%" />
                    <img src={inked10} alt="inked10" width="100%" />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={inked12} alt="inked12" width="100%" />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={inked8} alt="inked3" width="100%" />
                  </Grid>
                  <Grid item xs={12}>
                    INKED AUSTRALIA, ISSUE 44, 2017
                    <img src={inked1} alt="inked1" width="100%" />
                  </Grid>
                  <Grid item xs={12}>
                    <img src={inked3} alt="inked3" width="100%" />
                  </Grid>
                </Grid>
              </Route>
              <Route path="/About">
                <img alt="avatar" src={avatar} width="100%" />
                <Typography align="center">
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
              </Route>
            </Switch>
          </Box>
        </GridList>
      );
    }
  }
}

export default About;
