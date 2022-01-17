import React from "react";
import Webcam from "react-webcam";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTime } from "react-timer-hook";
import PrezentLogo from "../../../assets/logo.png";
import CompanyLogo from "../../../assets/company-logo.png";

const videoConstraints = {
  width: 800,
  height: 500,
  facingMode: "user",
};

const CameraPage = () => {
  const webcamRef = React.useRef(null);

  const { minutes, hours } = useTime({ format: "24-hour" });

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
          <Row>
            <Col md={4} className="text-center pt-4">
              <img src={PrezentLogo} width="200" alt="prezent logo"></img>
            </Col>
            <Col md={4} className="text-center">
              <div
                className="card dashboard-card-grey mt-5 d-inline-block"
                style={{ minHeight: "80px" }}
              >
                <h1 className="color-white dashboard-sublabel d-inline">
                  {hours}:{minutes}
                </h1>
              </div>
            </Col>
            <Col md={4} className="text-center pt-5">
              <img src={CompanyLogo} width="200" alt="company logo"></img>
            </Col>
          </Row>
        </Col>

        <Col md={12} className="mt-1 mb-5 text-center">
          <h5 className="camera-subtitle">Snap photos for check in present</h5>
        </Col>
        <Col md={12} className="text-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="camera-webcam"
            videoConstraints={videoConstraints}
          />
        </Col>
        <Col md={12} className="mt-5 mb-5 text-center">
          <Button className="btn button-primary" onClick={capture}>
            Check In
          </Button>
          <Button className="btn button-primary ml-3" onClick={capture}>
            Check Out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CameraPage;
