import { Component } from "react";
import Card from "react-bootstrap/esm/Card";
import history from "../data/history.json";
import { Row, Col } from "react-bootstrap";

class LatestRelease extends Component {
  render() {
    return (
      <Row className="md-4">
        {history.map((storia) => (
          <Col key={storia.asin} xs={4}>
            <Card style={{ width: "100%", margin: "20px" }}>
              <Card.Img  variant="top" src={storia.img} />
              <Card.Body >
                <Card.Title>{storia.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default LatestRelease;
