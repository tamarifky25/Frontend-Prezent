import React, { useState, useMemo, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import { TableCustomStyles } from "../../../components/DataTable/TableCustomStyle";

const AdminTabelPersetujuan = () => {
  const [showModal, setShowModal] = useState(false);

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [filterText, setFilterText] = useState("");

  const columns = [
    {
      name: "Tanggal",
      selector: "tanggal",
      sortable: "true",
    },
    {
      name: "Nama",
      selector: "nama",
      sortable: "true",
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      sortable: "true",
    },
    {
      name: "Deskripsi",
      selector: "deskripsi",
      sortable: "true",
    },

    {
      name: "Dokumen",
      selector: () => (
        <Button className="button-primary btn-sm" onClick={handleShow}>
          Open File
        </Button>
      ),
      sortable: "true",
    },
    {
      name: "Status",
      selector: () => (
        <div>
          <FontAwesomeIcon className="ml-2  color-red" icon={faTimesCircle} />
        </div>
      ),
      sortable: "true",
    },
  ];

  useEffect(() => {
    setResetPaginationToggle(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = [
    {
      tanggal: "17/08/2021",
      nama: "",
      keterangan: "Telat Masuk",
      deskripsi: "anak sakit",
      dokumen: "dokumen",
      status: "status",
    },
    {
      tanggal: "17/08/2021",
      nama: "",
      keterangan: "Sakit",
      deskripsi: "demam",
      dokumen: "dokumen",
      status: "status",
    },
    {
      tanggal: "12/09/2021",
      nama: "",
      keterangan: "Telat Masuk",
      deskripsi: "rapat dinas",
      dokumen: "dokumen",
      status: "status",
    },
    {
      tanggal: "17/08/2021",
      nama: "",
      keterangan: "Telat Masuk",
      deskripsi: "anak sakit",
      dokumen: "dokumen",
      status: "status",
    },
  ];
  const filteredItems = data.filter(
    (item) =>
      item.keterangan &&
      item.keterangan.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="d-flex justify-content-end mb-3">
        <div className="w-100">
          <div className="d-inline w-50 ">
            <div className="input-field-group">
              <Form.Control
                id="search"
                type="text"
                placeholder="Filter berdasarkan keterangan"
                className="input-field-group-text"
                value={filterText}
                onChange={(e) => {
                  setFilterText(e.target.value);
                }}
              ></Form.Control>
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
            <div>
              <h4 className="d-flex justify-content-center">DOKUMEN</h4>
            </div>
            <div className="d-flex justify-content-center">
              <h6>SAKIT 03/07/2021</h6>
              <FontAwesomeIcon
                className="ml-2  color-red"
                icon={faTimesCircle}
              />
            </div>
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
                />
                <div className="text-center mt-3 ">
                  <Button className="button-primary" href="#">
                    Download
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <img
                  alt="attendance"
                  src="https://placeimg.com/400/300/people"
                  className="w-100"
                />
                <div className="text-center mt-3">
                  <Button className="button-primary" href="#">
                    Download
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="d-flex justify-content-center mt-3">
              <Button className="button-primary p-3" variant="primary" href="#">
                Approve
              </Button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminTabelPersetujuan;
