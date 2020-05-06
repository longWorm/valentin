import React from "react";
import { List, ListItem, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { t, getLanguage, setLanguage } from "react-switch-lang";
import { Link } from "react-router-dom";
import { Switch as SwitchUIControl } from "@material-ui/core";
import "./sidebar.css";
import hamburgerLogo from "./public/hamburger_menu.png";
import facebookLogo from "./public/facebook.png";
import instagramLogo from "./public/instagram.png";
import mailLogo from "./public/mail.png";

function click() {
  let lang = getLanguage();
  if (lang === "EN") {
    setLanguage("RU");
  } else {
    setLanguage("EN");
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.pc = props.pc;
    this.mobileMenuClickedCallback = props.mobileSideMenuClicked;
    this.state = {
      menuVisible: false,
      portfolioSubListVisible: false,
      projectSublistVisible: false
    };
    this.MenuClick = this.MenuClick.bind(this);
    this.PortfolioClick = this.PortfolioClick.bind(this);
    this.ProjectsClick = this.ProjectsClick.bind(this);
  }

  MenuClick() {
    this.setState({ menuVisible: !this.state.menuVisible });
    if (this.mobileMenuClickedCallback) this.mobileMenuClickedCallback();
  }

  PortfolioClick() {
    this.setState({
      portfolioSubListVisible: !this.state.portfolioSubListVisible
    });
  }

  ProjectsClick() {
    this.setState({ projectSublistVisible: !this.state.projectSublistVisible });
  }

  render() {
    if (this.pc) {
      return (
        <div className="root">
          <div className="firstPanel"></div>
          <div className="sidebar">
            <div className="sidebar2">
              <List className="MaterialUiList" disablePadding>
                <ListItem key="Home" button>
                  <Link to="Home" className="listItem">
                    {t("sidebar.Home")}
                  </Link>
                </ListItem>
                <ListItem key="Portfolio" button onClick={this.PortfolioClick}>
                  <Link to="PortfolioMain" className="listItem">
                    {t("sidebar.Portfolio")}
                  </Link>
                </ListItem>
                {/*
                  <span className="listItem">{t("sidebar.Portfolio")}</span>
                  {this.state.portfolioSubListVisible ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                
                 <Collapse
                  in={this.state.portfolioSubListVisible}
                  timeout="auto"
                  unmountOnExit
                >
                  <List className="MaterialUiListSublist" disablePadding dense>
                    <ListItem button className="subListItem">
                      <Link className="subListItem" to="Portraits">
                        {t("sidebar.Portraits")}
                      </Link>
                    </ListItem>
                    <ListItem button className="subListItem">
                      <Link className="subListItem" to="Moments">
                        {t("sidebar.Moments")}
                      </Link>
                    </ListItem>
                    <ListItem button className="subListItem">
                      <Link className="subListItem" to="Commercial">
                        {t("sidebar.Commercial")}
                      </Link>
                    </ListItem>
                    <ListItem button className="subListItem">
                      <Link className="subListItem" to="Places">
                        {t("sidebar.Places")}
                      </Link>
                    </ListItem>
                  </List>
                </Collapse> */}
                <ListItem key="Projects" button onClick={this.ProjectsClick}>
                  <Link to="ProjectsMain" className="listItem">
                    {t("sidebar.Projects")}
                  </Link>
                  {/* <span className="listItem">{t("sidebar.Projects")}</span>
                  {this.state.projectSublistVisible ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )} */}
                </ListItem>
                {/* <Collapse
                  in={this.state.projectSublistVisible}
                  timeout="auto"
                  unmountOnExit
                >
                  <ListItem button className="MaterialUiListSublist">
                    <Link className="subListItem" to="Prj1">
                      {t("sidebar.Prj1")}
                    </Link>
                    <Link className="subListItem" to="Prj2">
                      {t("sidebar.Prj2")}
                    </Link>
                  </ListItem>
                </Collapse> */}
                <ListItem key="About" button>
                  <Link to="About" className="listItem">
                    {t("sidebar.About")}
                  </Link>
                </ListItem>
                <ListItem key="Contacts" button>
                  <Link to="Contacts" className="listItem">
                    {t("sidebar.Contacts")}
                  </Link>
                </ListItem>
              </List>
            </div>
          </div>
          <div className="langPanel">
            <span onClick={click}>{getLanguage()}</span>
            <span>
              <div className="contactIcons">
                <a href="https://www.facebook.com/zhmodikov/">
                  <img
                    alt="intagramButtom"
                    src={instagramLogo}
                    height="25px"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </div>
              <div className="contactIcons">
                <a href="https://www.instagram.com/zhmodikov/?hl=en">
                  <img
                    alt="facebookButton"
                    src={facebookLogo}
                    height="25px"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </div>
              <div className="contactIcons">
                <a href="mailto:valentin@zhmodikov.com">
                  <img
                    alt="mailButton"
                    src={mailLogo}
                    height="25px"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </div>
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="sidebarMobile___">
          <div className="sidebarMobile">
            <div align="left" style={{ padding: "10px 10px 10px 10px" }}>
              <img
                alt="hamburgerMenu"
                src={hamburgerLogo}
                height="25px"
                onClick={this.MenuClick}
              />
            </div>
            <div
              style={{ display: this.state.menuVisible ? "inherit" : "none" }}
            >
              <List className="MaterialUiListMobile" disablePadding dense>
                <ListItem key="Home" button>
                  <Link to="Home" className="listItem">
                    {t("sidebar.Home")}
                  </Link>
                </ListItem>
                <ListItem key="Portfolio" button onClick={this.PortfolioClick}>
                  <span className="listItem">{t("sidebar.Portfolio")}</span>
                  {this.state.portfolioSubListVisible ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
                <Collapse
                  in={this.state.portfolioSubListVisible}
                  timeout="auto"
                  unmountOnExit
                >
                  <List className="MaterialUiListMobile" disablePadding dense>
                    <ListItem button className="subListItem">
                      <Link className="subListItem" to="Portraits">
                        {t("sidebar.Portraits")}
                      </Link>
                    </ListItem>
                    <ListItem button className="subListItem">
                      <Link className="subListItem" to="Commercial">
                        {t("sidebar.Commercial")}
                      </Link>
                    </ListItem>
                    <ListItem button className="subListItem">
                      <Link className="subListItem" to="Moments">
                        {t("sidebar.Moments")}
                      </Link>
                    </ListItem>
                    <ListItem button className="subListItem">
                      <Link className="subListItem" to="Places">
                        {t("sidebar.Places")}
                      </Link>
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem key="Projects" button>
                  <Link to="Projects" className="listItem">
                    {t("sidebar.Projects")}
                  </Link>
                </ListItem>
                <ListItem key="Publications" button>
                  <Link to="Publications" className="listItem">
                    {t("sidebar.Publications")}
                  </Link>
                </ListItem>
                <ListItem key="About" button>
                  <Link to="About" className="listItem">
                    {t("sidebar.About")}
                  </Link>
                </ListItem>
              </List>
            </div>
            <div
              style={{ display: this.state.menuVisible ? "inherit" : "none" }}
            >
              <span
                style={{
                  color: getLanguage() === "en" ? "white" : "black",
                  alignItems: "center",
                  display: "flex"
                }}
              >
                En
              </span>
              <SwitchUIControl color="default" onClick={click} />
              <span
                style={{
                  color: getLanguage() === "ru" ? "white" : "black",
                  alignItems: "center",
                  display: "flex"
                }}
              >
                Ru
              </span>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Sidebar;
