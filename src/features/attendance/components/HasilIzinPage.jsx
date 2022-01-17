import React, { useState, useMemo, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import { TableCustomStyles } from "../../../components/DataTable/TableCustomStyle";

const HasilIzinPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const handleClose = () => setShowModal(false);

  useEffect(() => {
    setResetPaginationToggle(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <FontAwesomeIcon
            className="ml-2 button-edit color-green"
            icon={faCheckCircle}
          />
        </div>
      ),
      sortable: "true",
    },
  ];

  const data = [
    {
      keterangan: "Telat Masuk",
      totalabsen: "1",
      maxabsen: "10",
      status: "status",
    },
    {
      
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
          <div className="d-inline w-50">
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
    </div>
  );
};

export default HasilIzinPage;
