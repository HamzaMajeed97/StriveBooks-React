import Jumbotron from "react-bootstrap/esm/Jumbotron";
import Container from "react-bootstrap/esm/Container";

const Welcome = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome to Strive Books</h1>
        <p>The best place to buy and read books of your choice</p>
      </Container>
    </Jumbotron>
  );
};

export default Welcome;
