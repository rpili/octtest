import React, { Component } from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import "./App.css";
import styled from "styled-components";

const TextBox = styled.div`
  padding: 40px;
  color: #424242;
`;
function TitleBar() {
  return (
    <div className="up-div">
      <h2>Octocat Gallery</h2>
    </div>
  );
}
function Description() {
  return (
    <div className="low-div">
      <TextBox>
        <p>
          Welcome hackers! this site is for uploading and rating octocat
          drawings
          <br />
          scroll down to view drawing submissions
        </p>
      </TextBox>
      <Button>Upload</Button>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <body>
          <TitleBar />
          <Description />

          <Grid>
            <Row className="show-grid">
              <Col sm={4} md={2}>
                Carsss
              </Col>
              <Col sm={4} md={2}>
                One of three columns
              </Col>
              <Col sm={4} md={2}>
                One of three columns
              </Col>
              <Col sm={4} md={2}>
                One of three columns
              </Col>
              <Col sm={4} md={2}>
                One of three columns
              </Col>
              <Col sm={4} md={2}>
                One of three columns
              </Col>
              <Col sm={4} md={2}>
                One of three columns
              </Col>
            </Row>
          </Grid>
        </body>
      </div>
    );
  }
}

export default App;
