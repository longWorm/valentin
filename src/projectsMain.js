import "./projectsMain.css";
import React from "react";
import { GridList, Grid } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { t } from "react-switch-lang";
import Button from "@material-ui/core/Button";
import * as AWS from "aws-sdk";

class PortfolioMain extends React.Component {
  constructor(props) {
    AWS.config.update({
      region: "ap-southeast-2",
      endpoint: "dynamodb.ap-southeast-2.amazonaws.com",
      accessKeyId: "AKIA3TRSEJB4NCVGRMET",
      secretAccessKey: "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"
    });

    super(props);
    this.pc = props.pc;
    this.state = {};
  }

  async getRandomPhotoFromSection(section) {
    let docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
      TableName: "photo",
      FilterExpression: "#sectionaa = :s and #use = :useFor",
      ExpressionAttributeValues: {
        ":s": section,
        ":useFor": true
      },
      ExpressionAttributeNames: {
        "#sectionaa": "section",
        "#use": "useForHomePage"
      }
    };

    let items = await docClient.scan(params).promise();
    return items.Items[Math.floor(Math.random() * items.Items.length)];
  }

  async componentDidMount() {
    this.setState({
      ...this.state,
      randomPhoto1: await this.getRandomPhotoFromSection(5),
      randomPhoto2: await this.getRandomPhotoFromSection(5)
    });
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
