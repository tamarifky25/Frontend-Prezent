import React, { useState, useMemo, useEffect } from "react";
import { Form, Button, Modal, Col, Row, Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { TableCustomStyles } from "../../../components/DataTable/TableCustomStyle";

const KehadiranTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    setResetPaginationToggle(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      name: "Tanggal",
      selector: "tanggal",
      sortable: "true",
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      sortable: "true",
    },
    {
      name: "Masuk",
      selector: "masuk",
      sortable: "true",
    },
    {
      name: "Keluar",
      selector: "keluar",
      sortable: "true",
    },
    {
      name: "Foto",
      selector: () => (
        <Button className="button-primary btn-sm" onClick={handleShow}>
          Open File
        </Button>
      ),
      sortable: "true",
    },
    {
      name: "Lokasi",
      selector: "lokasi",
      sortable: "true",
    },
  ];

  const data = [
    {
      tanggal: "23/08/2021",
      keterangan: "hadir",
      masuk: "09.50",
      keluar: "-",
      foto: "foto",
      lokasi: "-",
    },
    {
      
    },
  ];

  const filteredItems = data.filter(
    (item) =>
      item.lokasi &&
      item.lokasi.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="d-flex justify-content-end mb-3">
        <div className="w-100">
          <div className="d-inline w-50">
            <div className="input-field-group">
              <Form>
                <Form.Control
                  id="search"
                  type="search"
                  placeholder="Search Location"
                  className="input-field-group-text"
                  value={filterText}
                  onChange={(e) => {
                    setFilterText(e.target.value);
                  }}
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText, resetPaginationToggle]);
  return (
    <div className="mt-3 table-container">
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginantionResetDefaultPage={resetPaginationToggle}
        noHeader
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        customStyles={TableCustomStyles}
      />

      {/* view image modal */}
      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Container>
            <h4 className="d-flex justify-content-center">
              FOTO FACE RECOGNITION
            </h4>
            <h6 className="d-flex justify-content-center">17/06/2021</h6>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6}>
                <img
                  alt="attendance"
                  src="https://placeimg.com/400/300/people"
                  className="w-100"
                ></img>
                <div className="text-center mt-5">
                  <Button to="#" className="button-primary">
                    Download
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <img
                  alt="attendance"
                  src="https://placeimg.com/400/300/people"
                  className="w-100"
                ></img>
                <div className="text-center mt-5">
                  <Button to="#" className="button-primary">
                    Download
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default KehadiranTable;
