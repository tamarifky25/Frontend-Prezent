import { Container, Row, Col } from "react-bootstrap";
import AdminProfileTable from "../components/AdminProfileTable";

const AdminProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5">
          <h1 className="heading-title">AKUN</h1>
        </Col>
      </Row>
      <AdminProfileTable />
    </Container>
  );
};

export default AdminProfilePage;
