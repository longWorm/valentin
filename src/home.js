import "./home.css";
import React from "react";
import Box from "@material-ui/core/Box";

// https://0wdqxf9sbk.execute-api.us-east-1.amazonaws.com/getPhotos/getPhotosFromSection?section=3
// https://0wdqxf9sbk.execute-api.us-east-1.amazonaws.com/getHomePagePhotos/getHomePagePhotos

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pc: props.pc };
  }

  async getHomePagePhotos() {
    fetch(
      "https://0wdqxf9sbk.execute-api.us-east-1.amazonaws.com/getHomePagePhotos/getHomePagePhotos"
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          ...this.state,
          randomPhoto1: data[0],
          randomPhoto2: data[1],
          randomPhoto3: data[2],
          randomPhoto4: data[3]
        })
      );
  }

  async componentDidMount() {
    await this.getHomePagePhotos();
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
