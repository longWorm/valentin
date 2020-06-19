import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./sidebar";
import Home from "./home";
import Portfolio from "./portfolio";
import PortfolioMain from "./portfolioMain";
import ProjectsMain from "./projectsMain";
import About from "./About";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  translate,
  t
} from "react-switch-lang";
import EN from "./locale/en.json";
import RU from "./locale/ru.json";
import facebookLogo from "./public/facebook.png";
import instagramLogo from "./public/instagram.png";

setTranslations({ EN, RU });
setLanguageCookie();
setDefaultLanguage("EN");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.MobileSideMenuClicked = this.MobileSideMenuClicked.bind(this);
    this.state = { MobileSideMenuExpanded: false };
  }

  MobileSideMenuClicked() {
    this.setState({
      MobileSideMenuExpanded: !this.state.MobileSideMenuExpanded
    });
  }

  render() {
    var pc = window.innerWidth >= window.innerHeight;
    if (pc) {
      return (
        <Router>
          <div className="wrapper">
            <div className="horizontalLine" />
            <div className="header" align="center">
              <span>VALENTIN ZHMODIKOV</span> <br />
              <span className="slogan">capturing characters not colors</span>
            </div>
            <div className="sideMenu">
              <Sidebar pc={pc} />
            </div>
            <div className="content">
              <Switch>
                <Route path="/(Home|)">
                  <Home pc={pc} />
                </Route>
                <Route path="/PortfolioMain">
                  <PortfolioMain />
                </Route>
                <Route path="/ProjectsMain">
                  <ProjectsMain />
                </Route>
                <Route path="/Portraits">
                  <Portfolio section="1" />
                </Route>
                <Route path="/Moments">
                  <Portfolio section="2" />
                </Route>
                <Route path="/Commercial">
                  <Portfolio section="3" />
                </Route>
                <Route path="/Places">
                  <Portfolio section="4" />
                </Route>
                <Route path="/Prj1">
                  <Portfolio section="5" />
                </Route>
                <Route path="/Prj2">
                  <Portfolio section="6" />
                </Route>
                <Route path="/Contacts">
                  {t("Contacts.text")}
                  <br />
                  valentin@zhmodikov.com
                  <br />
                </Route>
                <Route path="/About">
                  <br />
                  {t("About.text1")}
                  <br />
                  <br />
                  {t("About.text2")}
                  <br />
                  <br />
                  {t("About.text3")}
                </Route>
              </Switch>
            </div>
            <div className="footer">
              <div className="footerContent">
                <span>valentin@zhmodikov.com</span>
                <span>ABN: 28 247 093 188</span>
              </div>
            </div>
            <div className="footerLine"></div>
          </div>
        </Router>
      );
    } else {
      var wrapperClass = this.state.MobileSideMenuExpanded
        ? "wrapperMobileExpanded"
        : "wrapperMobile";

      var sideMenuClass = this.state.MobileSideMenuExpanded
        ? "sideMenuMobileExpanded"
        : "sideMenuMobile";
      return (
        <Router>
          <div className={wrapperClass}>
            {/* <div className="horizontalLine" /> */}
            <div className="headerMobile" align="center">
              <span>VALENTIN ZHMODIKOV</span> <br />
              {/* <span className="slogan">capturing characters not colors</span> */}
            </div>
            <div className="horizontalLine2" />
            <div className={sideMenuClass}>
              <Sidebar
                pc={pc}
                mobileSideMenuClicked={this.MobileSideMenuClicked}
              />
            </div>
            <div className="contentMobile">
              <Switch>
                <Route path="/(Home|)">
                  <Home pc={pc} />
                </Route>
                <Route path="/Portraits">
                  Portraits
                  <Portfolio section="1" />
                </Route>
                <Route path="/Moments">
                  Moments
                  <Portfolio section="2" />
                </Route>
                <Route path="/Commercial">
                  Commercial
                  <Portfolio section="3" />
                </Route>
                <Route path="/Places">
                  Places
                  <Portfolio section="4" />
                </Route>
                <Route path="/Projects">{t("Projects.text")}</Route>
                <Route path="/Publications">{t("Publications.text")}</Route>
                <Route path="/About">{t("About.text")}</Route>
              </Switch>
            </div>
            <div className="footerMobile">
              <div className="footerContent">
                <span>valentin@zhmodikov.com</span>
                <span>
                  <a href="https://www.facebook.com/zhmodikov/">
                    <img
                      alt="intagramButtom"
                      src={facebookLogo}
                      height="25px"
                    />
                  </a>
                  <a href="https://www.instagram.com/zhmodikov/?hl=en">
                    <img
                      alt="facebookButton"
                      src={instagramLogo}
                      height="25px"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </Router>
      );
    }
  }
}

App.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate(App);
