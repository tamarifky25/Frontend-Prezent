import React, { useState, useMemo, useEffect } from "react";
import { Form, Button, Modal, Row, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import { useForm } from "react-hook-form";
import { TableCustomStyles } from "../../../components/DataTable/TableCustomStyle";

const AdminKehadiranTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [filterText, setFilterText] = useState("");

  const {
    register,
    formState: { errors },
  } = useForm();

  const onEditButtonClicked = () => {
    setIsEdit(true);
    handleShow();
  };

  const onOpenFileClicked = () => {
    setIsEdit(false);
    handleShow();
  };

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
      name: "Nama",
      selector: "nama",
      sortable: "true",
    },
    {
      name: "Keterangan",
      selector: () => (
        <div>
          <FontAwesomeIcon
            className="ml-2 button-edit color-red"
            icon={faTimesCircle}
          />

          <FontAwesomeIcon
            className="ml-2 button-edit color-primary"
            icon={faEdit}
            onClick={onEditButtonClicked}
          />
        </div>
      ),
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
        <Button className="button-primary btn-sm" onClick={onOpenFileClicked}>
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
      tanggal: "17/08/2021",
      nama: "Udin",
      keterangan: "hadir",
      masuk: "08:00",
      keluar: "08:00",
      foto: "foto",
      lokasi: "matahari",
    },
    {
      tanggal: "17/08/2021",
      nama: "Asep",
      keterangan: "hadir",
      masuk: "09:00",
      keluar: "08:00",
      foto: "foto",
      lokasi: "bulan",
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
              <Form.Control
                id="search"
                type="text"
                placeholder="Filter berdasarkan lokasi"
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

  const OpenFileLayout = () => {
    return (
      <Row>
        <Col md={6}>
          <img
            alt="attendance"
            src="https://placeimg.com/400/300/people"
            className="w-100"
          ></img>
          <div className="text-center mt-5 ">
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
    );
  };

  const EditDocumentLayout = () => {
    return (
      <Row>
        <Col md={12}>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridtglIzn">
                <Form.Label>Tanggal Izin</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="DD/MM/YY"
                  name="date"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="validation-label">Wajib diisi</span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSmpIzn">
                <Form.Label>Sampai Tanggal</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="DD/MM/YY"
                  name="date"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="validation-label">Wajib diisi</span>
                )}
              </Form.Group>
            </Row>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control
                as="select"
                name="keterangan"
                {...register("keterangan", { required: true })}
              >
                <option>Cuti</option>
                <option>Menikah</option>
                <option>Melahirkan</option>
                <option>Keguguran</option>
                <option>Kematian</option>
                <option>Telat Masuk</option>
                <option>Pulang Cepat</option>
                <option>Sakit</option>
              </Form.Control>
              {errors.keterangan && (
                <span className="validation-label">Wajib diisi</span>
              )}
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Tulis Disini"
                name="textarea"
                {...register("textarea", { required: true })}
              />
              {errors.textarea && (
                <span className="validation-label">Wajib diisi</span>
              )}
            </Form.Group>

            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Unggah Surat Bukti"
                name="suratbukti"
                {...register("suratbukti", { required: true })}
              />
              {errors.suratbukti && (
                <span className="validation-label">Wajib diisi</span>
              )}
            </Form.Group>

            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Unggah Bukti lain"
                name="buktilain"
                {...register("buktilain", { required: true })}
              />
              {errors.buktilain && (
                <span className="validation-label">Wajib diisi</span>
              )}
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button className="button-primary" type="submit">
                SUBMIT & APPROVE
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    );
  };

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
            <div className=" d-flex justify-content-center">
              <h4> {isEdit ? "EDIT" : "FOTO"}</h4>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <h6>{isEdit ? "MASUKAN DOKUMEN" : ""}</h6>
            </div>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {isEdit ? <EditDocumentLayout /> : <OpenFileLayout />}
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminKehadiranTable;
