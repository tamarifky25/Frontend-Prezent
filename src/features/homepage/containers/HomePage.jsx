import NonAuthTopBar from "../../../components/NonAuthTopBar";
import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";
import Image1 from "../../../assets/image/homepage-image1.png";
import Footer from "../../../components/Footer"

const HomePage = () => {
  return (
    <>
      <NonAuthTopBar />

      <Jumbotron fluid className="homepage-jumbotron">
        <Container></Container>
      </Jumbotron>

      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <div className="mb-4 mt-5">
              <h1 className="homepage-title">Attendance with Face recognition and website system</h1>
            </div>
            <div className="mb-4">
              <h6 className="homepage-subtitle">WEBSITE SYSTEM</h6>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </p>
            </div>
            <div>
              <h6 className="homepage-subtitle">FACE RECOGNITION</h6>
              <p>
                Consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam.
              </p>
            </div>
						<div className="mt-3">
							<Button  variant="outline-primary" href="/#">
								Learn more
							</Button>
						</div>
          </Col>
          <Col md={6}>
              <img src={Image1} alt="brand" width="100%"></img>
          </Col>
          <Col md={6} className="mt-5 mb-5">
              <div className="homepage-divider"></div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
