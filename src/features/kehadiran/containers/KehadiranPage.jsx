import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Tabs,
  Tab,
} from "react-bootstrap";
import KehadiranTable from "../components/KehadiranTable";

const KehadiranPage = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5">
          <h1 className="heading-title">TABEL KEHADIRAN</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} className="mt-5">
          <Row>
            <Col md={12} className="mb-5">
              <div className="card">
                <div className="d-flex">
                  <Image
                    src="https://placeimg.com/400/400/people"
                    roundedCircle
                    width={150}
                  />
                  <div className="ml-4 mt-3">
                    <h3 className="attendance-name">Muhammad Rifky Tri Pratama</h3>
                    <span>2101717031</span>
                    <br />
                    <span className="mt-5 d-flex attendance-status">
                      Active Member
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} className="mb-5">
              <Tabs defaultActiveKey="kehadiran" id="uncontrolled-tab-example">
                <Tab eventKey="kehadiran" title="Kehadiran">
                  <div className="card">
                    <KehadiranTable />
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default KehadiranPage;
