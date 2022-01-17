import React from "react";
import JadwalCalendar from "../components/JadwalCalendar";
import { Container, Row, Col } from "react-bootstrap";

const TabelJadwalPage = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5">
          <h1 className="heading-title">TABEL JADWAL</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mt-5 mb-5">
          <JadwalCalendar />
        </Col>
      </Row>
    </Container>
  );
};

export default TabelJadwalPage;
