import { Container, Row, Col} from "react-bootstrap";
import loginBanner from "../../../assets/image/login-banner.png";
import { Link } from "react-router-dom";
import UserLoginForm from "../components/UserLoginForm";


const UserLoginPage = () => {
  return (
    <Container className="login-container" fluid>
      <Row className="justify-content-center" style={{ height: "inherit" }}>
        <Col md={12} className="align-self-center">
          <div className="auth-container"
          >
            <Row className="ml-0 mr-0" style={{ height: "100%" }}>
              <Col
                md={6}
                className="align-self-center auth-left-box text-center"
              >
                <div>
                  <img src={loginBanner} alt="login logo" width="100%"></img>
                </div>
              </Col>
              <Col
                md={6}
                className="text-center auth-right-box pb-5"
              >
                <h3 className="mt-5 mb-4 auth-title">Login Member</h3>
                <UserLoginForm />
                <small className="auth-option-label">
                  Dont have an account? <Link to="/register" className="auth-option-sublabel">Register</Link>
                </small>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLoginPage;
