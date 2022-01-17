import React from "react";
import {
  Button,
  Row,
  Col,
  Image,
  Form,
  Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import { TableCustomStyles } from "../../../components/DataTable/TableCustomStyle";

const AdminTabelHasilizin = () => {
  const columns = [
    {
      name: "Keterangan",
      selector: "keterangan",
      sortable: "true",
    },
    {
      name: "Total Absen",
      selector: "totalabsen",
      sortable: "true",
    },
    {
      name: "Max Absen",
      selector: "maxabsen",
      sortable: "true",
    },
    {
      name: "Status",
      selector: () => (
        <div>
          <FontAwesomeIcon className="ml-2 color-green" icon={faCheckCircle} />
        </div>
      ),
      sortable: "true",
    },
  ];

  const data = [
    {
      keterangan: "sakit",
      totalabsen: "7",
      maxabsen: "10",
      status: "status",
    },
    {
      keterangan: "hadir",
      totalabsen: "9",
      maxabsen: "10",
      status: "status",
    },
  ];

  return (
    <Container>
      <div className="mt-5 d-flex justify-content-center">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="secondary">Search</Button>
        </Form>
      </div>

      <Row className="mt-5">
        <Col md={12} className="mb-5">
          <div className="card">
            <div className="d-flex">
              <Image
                src="https://placeimg.com/400/400/people"
                roundedCircle
                width={150}
              />
              <div className="ml-4 mt-3">
                <h3 className="attendance-name">Rifky Reynaldi</h3>
                <span>2101705933</span>
                <br />
                <span className="mt-5 d-flex attendance-status">
                  Active Member
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className=" table-container">
        <DataTable
          columns={columns}
          data={data}
          pagination
          noHeader
          noSubHeader
          customStyles={TableCustomStyles}
        />
      </div>

      <div className="d-flex justify-content-center mt-5 mb-3">
        <Button className="button-primary">
          <FontAwesomeIcon className="mr-2 color-white" icon={faPrint} />
          Cetak Rapot
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Button className="button-primary">Cetak Semua Rapot</Button>
      </div>
    </Container>
  );
};

export default AdminTabelHasilizin;
