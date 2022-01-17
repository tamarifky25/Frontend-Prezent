import { Container, Row, Col } from "react-bootstrap";
import loginBanner from "../../../assets/image/login-banner.png";
import { Link } from "react-router-dom";
import UserRegisterForm from "../components/UserRegisterForm";

const UserRegisterPage = () => {
  return (
    <Container className="login-container" fluid>
      <Row className="justify-content-center" style={{ height: "inherit" }}>
        <Col md={12} className="align-self-center">
          <div className="auth-container"
          >
            <Row className="ml-0 mr-0" style={{ height: "100%" }}>
              <Col
                md={6}
                className="align-self-center text-center auth-left-box"
              >
                <div>
                  <img src={loginBanner} alt="login logo" width="100%"></img>
                </div>
              </Col>
              <Col md={6} className="text-center auth-right-box">
                <h3 className="mt-5 mb-4 auth-title">Register Member</h3>
                <UserRegisterForm />
                <div className="mb-3">
                  <small className="auth-option-label">
                    Have an account?{" "}
                    <Link to="/login" className="auth-option-sublabel">
                      Login
                    </Link>
                  </small>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRegisterPage;
