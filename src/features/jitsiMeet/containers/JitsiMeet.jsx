import React from "react";
import Jitsi from "react-jitsi";

import { Container, Row, Col, Button } from "react-bootstrap";
import JitsiLogo from "../../../assets/jitsi-logo.png";

import { useHistory } from "react-router";

const roomName = "PrezentTestMeeting";
const userFullName = "Joseph Strawberry";

const JitsiMeet = () => {
  const history = useHistory();
  const Loader = () => {
    return <h6 className="text-center"> </h6>;
  };

  const onButtonExitClicked = () => {
    history.push("/dashboard");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
          <div className="text-center mt-3">
            <img src={JitsiLogo} alt="jitsi logo" width="84" />
          </div>

          <Jitsi
            roomName={roomName}
            displayName={userFullName}
            loadingComponent={Loader}
            onAPILoad={(JitsiMeetAPI) => console.log("Good Morning everyone!")}
          />
        </Col>
        <Col md={12}>
          <div className="d-flex justify-content-center mb-5 ">
            <Button
              className="button-primary p-3"
              variant="primary"
              onClick={onButtonExitClicked}
            >
              KELUAR
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JitsiMeet;
