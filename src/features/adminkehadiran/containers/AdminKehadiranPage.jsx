import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import AdminKehadiranTable from "../components/AdminKehadiranTable";
import AdminHariiniTable from "../components/AdminHariiniTable";
const AdminKehadiranPage = () => {
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
                <Tabs
                  defaultActiveKey="kehadiran"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="kehadiran" title="Kehadiran">
                    <AdminKehadiranTable />
                  </Tab>
                  <Tab eventKey="hariini" title="Hari Ini">
                    <AdminHariiniTable />
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default AdminKehadiranPage;
