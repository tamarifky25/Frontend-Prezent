import { useState } from "react";
import { Container, Row, Col, Tabs, Tab, Button, Modal } from "react-bootstrap";
import FormPengajuan from "../components/FormPengajuanPage";
import TabelPersetujuan from "../components/TabelPersetujuanPage";
import HasilIzin from "../components/HasilIzinPage";

const AttendancePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5">
          <h1 className="heading-title">PENGAJUAN</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} className="mt-5">
          <Row>
            <Col md={12} className="mb-5">
              <div className="card">
                <Tabs
                  defaultActiveKey="formpengajuan"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="formpengajuan" title="Form Pengajuan">
                    <FormPengajuan />
                  </Tab>
                  <Tab eventKey="tabelpersetujuan" title="Tabel Persetujuan">
                    <TabelPersetujuan />
                  </Tab>
                  <Tab eventKey="hasilizin" title="Hasil Izin">
                    <HasilIzin />
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Col>
        {/* view image modal */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>File Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              alt="attendance"
              src="https://placeimg.com/400/300/people"
              className="w-100"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default AttendancePage;
