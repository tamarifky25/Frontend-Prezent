import React, { useState, useEffect } from "react";
import {
  Image,
  Form,
  Button,
  Modal,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import { useForm } from "react-hook-form";
import CompanyLogo from "../../../assets/company-logo.png";
import { TableCustomStyles } from "../../../components/DataTable/TableCustomStyle";

const AdminProfileTable = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  useEffect(() => {
    setResetPaginationToggle(false);
    setFilterText("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      name: "Nama",
      selector: "nama",
      sortable: "true",
    },
    {
      name: "Status",
      selector: "status",
      sortable: "true",
    },
    {
      name: "Identitas",
      selector: () => (
        <FontAwesomeIcon className="ml-2 color-primary" icon={faEdit} />
      ),
      sortable: "true",
    },
    {
      name: "Face Recog",
      selector: () => (
        <Button className="button-primary btn-sm" onClick={handleShow}>
          Upload
        </Button>
      ),
      sortable: "true",
    },
    {
      name: "Action",
      selector: () => (
        <FontAwesomeIcon className="ml-2 color-red" icon={faTimesCircle} />
      ),
      sortable: "true",
    },
  ];

  const data = [
    {
      nama: "NAMA A",
      status: "Active Member",
      identitas: "",
      faceRecog: "",
      action: "",
    },
    {
      nama: "NAMA B",
      status: "Active Member",
      identitas: "",
      faceRecog: "",
      action: "",
    },
    {
      nama: "NAMA C",
      status: "Active Member",
      identitas: "",
      faceRecog: "",
      action: "",
    },
    {
      nama: "NAMA D",
      status: "Active Member",
      identitas: "",
      faceRecog: "",
      action: "",
    },
    {
      nama: "NAMA E",
      status: "Active Member",
      identitas: "",
      faceRecog: "",
      action: "",
    },
    {
      nama: "NAMA F",
      status: "Active Member",
      identitas: "",
      faceRecog: "",
      action: "",
    },
  ];

  const filteredItems = data.filter(
    (item) =>
      item.nama && item.nama.toLowerCase().includes(filterText.toLowerCase())
  );

  const {
    register,
    formState: { errors },
  } = useForm();

  const AddFileLayout = () => {
    return (
      <Form>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" className="mb-4" />
        </Form.Group>

        <Form.Group>
          <Form.File id="exampleFormControlFile1" className="mb-4" />
        </Form.Group>

        <Form.Group>
          <Form.File id="exampleFormControlFile1" className="mb-4" />
        </Form.Group>

        <Form.Group>
          <Form.File id="exampleFormControlFile1" className="mb-4" />
        </Form.Group>

        <Form.Group>
          <Form.File id="exampleFormControlFile1" className="mb-4" />
        </Form.Group>

        <Form.Group>
          <Form.File id="exampleFormControlFile1" />
        </Form.Group>
      </Form>
    );
  };

  return (
    <Row className="justify-content-center">
      <Col md={12} className="mt-5">
        <Row>
          <Col md={4} className="mb-5">
            <div className="card p-5">
              <div className="text-center">
                <Image
                  alt="logo"
                  src={CompanyLogo}
                  width={180}
                  className="mt-2"
                />
              </div>
            </div>
          </Col>
          <Col md={8} className="mb-5">
            <div className="card">
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label className="input-label">Nama Lengkap</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="masukkan nama"
                    name="nama"
                    {...register("nama", { required: true })}
                  />
                  {errors.nama && (
                    <span className="validation-label">Wajib diisi</span>
                  )}
                </Form.Group>
                <Form.Group controlId="formNik">
                  <Form.Label className="input-label">NIK</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="masukkan nik"
                    name="nik"
                    {...register("nik", { required: true })}
                  />
                  {errors.nik && (
                    <span className="validation-label">Wajib diisi</span>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="input-label">Divisi/Unit</Form.Label>
                  <Form.Control
                    as="select"
                    name="company"
                    {...register("company", { required: true })}
                  >
                    <option>--choose--</option>
                  </Form.Control>
                  {errors.company && (
                    <span className="validation-label">Wajib diisi</span>
                  )}
                </Form.Group>
                <Button
                  className="btn button-primary float-right"
                  type="submit"
                >
                  SEARCH
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={4} className="mb-5" />
          <Col md={8} className="mb-5">
            <div className="card">
              <div className="mt-3 table-container">
                <DataTable
                  columns={columns}
                  data={filteredItems}
                  pagination
                  paginantionResetDefaultPage={resetPaginationToggle}
                  noHeader
                  noSubHeader
                  customStyles={TableCustomStyles}
                />

                {/* view image modal */}
                <Modal size="lg" show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Container>
                      <div className="d-flex justify-content-center ">
                        <h5>FACE REGOCNITION</h5>
                      </div>
                      <div className="d-flex justify-content-center">
                        <h6>Masukan Foto</h6>
                      </div>
                    </Container>
                  </Modal.Header>
                  <Modal.Body>
                    <AddFileLayout />
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="d-flex justify-content-end">
                      <Button className="button-primary" type="submit">
                        UNGGAH
                      </Button>
                    </div>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <Button className="button-primary" type="submit">
                CETAK IDENTITAS USER
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AdminProfileTable;
