import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/logo.png";
import CompanyLogo from "../assets/company-logo.png";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        style={{ height: "400px", backgroundColor: "rgba(19, 30, 60, 0.25)" }}
      >
        <Row className="justify-content-center">
          <Col md={12} className="mt-5 text-center">
            <img src={CompanyLogo} alt="logo" width="180" />
            <hr />
            <img src={Logo} alt="logo" width="180" />
            <br />
            <span>COPYRIGHT 2021</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
