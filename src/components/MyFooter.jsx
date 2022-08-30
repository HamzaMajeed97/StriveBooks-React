import { Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Row>
      <Col
        className="text-center py-3"
        style={{ backgroundColor: " #343a40", color: "white" }}
      >
        Copyright &copy; StriveBooks
      </Col>
    </Row>
  );
};

export default MyFooter;
