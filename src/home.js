import "./home.css";
import React from "react";
import Box from "@material-ui/core/Box";
import * as AWS from "aws-sdk";

class Home extends React.Component {
  constructor(props) {
    AWS.config.update({
      region: "ap-southeast-2",
      endpoint: "dynamodb.ap-southeast-2.amazonaws.com",
      accessKeyId: "AKIA3TRSEJB4NCVGRMET",
      secretAccessKey: "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"
    });

    super(props);
    this.state = { pc: props.pc };
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
      randomPhoto1: await this.getRandomPhotoFromSection(1),
      randomPhoto2: await this.getRandomPhotoFromSection(2),
      randomPhoto3: await this.getRandomPhotoFromSection(3),
      randomPhoto4: await this.getRandomPhotoFromSection(4)
    });
  }

  render() {
    if (this.state.pc) {
      return (
        <div className="homePhoto">
          <Box
            display="flex"
            flexWrap="nowrap"
            justifyContent="center"
            flexDirection="row"
          >
            <Box key="1" justifyContent="center" p={1}>
              {this.state.randomPhoto1 !== undefined ? (
                <img
                  className="img"
                  src={this.state.randomPhoto1.url}
                  alt="Logo1"
                />
              ) : (
                <br />
              )}
            </Box>
            <Box key="2" justifyContent="center" pt={20}>
              {this.state.randomPhoto2 !== undefined ? (
                <img
                  className="img"
                  src={this.state.randomPhoto2.url}
                  alt="Logo2"
                />
              ) : (
                <br />
              )}
            </Box>
            <Box key="3" justifyContent="center" p={1}>
              {this.state.randomPhoto3 !== undefined ? (
                <img
                  className="img"
                  src={this.state.randomPhoto3.url}
                  alt="Logo3"
                />
              ) : (
                <br />
              )}
            </Box>
            <Box key="4" justifyContent="center" pt={20}>
              {this.state.randomPhoto4 !== undefined ? (
                <img
                  className="img"
                  src={this.state.randomPhoto4.url}
                  alt="Log41"
                />
              ) : (
                <br />
              )}
            </Box>
          </Box>
        </div>
      );
    } else {
      return (
        <div className="homePhoto">
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
      );
    }
  }
}

export default Home;
