import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Toast,
  Modal,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import { endpoint } from "../../../helpers/constants";
import Dropzone from "../components/Dropzone"

const ProfilePage = () => {
  const [profileState, setProfileState] = useState([]);
  const [genderState, setGenderState] = useState("L");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { get, post, response, error } = useFetch(endpoint);

  useEffect(() => {
    initializeProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initializeProfiles = async () => {
    const initialProfiles = await get("/karyawan");
    if (response.ok) setProfileState(initialProfiles.rows);
  };

  const addProfile = async (data) => {
    console.log('data euy', data.rows)

    const newProfile = await post("/karyawan", data);
    if (response.ok) {
      setToastMessage("data berhasil disimpan");
      setShowToast(true);
      reset(newProfile);
    } else {
      setToastMessage("data gagal disimpan", error);
      setShowToast(true);
    }
  };

  const onSubmit = (data) => {
    const object = data;
    object.jenis_kelamin = genderState;
    addProfile(object);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  console.log(profileState);

  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5">
          <h1 className="heading-title">MY PROFILE</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12} xl={10} className="mt-5">
          <Row>
            <Col md={4} xl={3} className="mb-3">
              <div className="card">
                <div className="text-center">
                  <Image
                    src="https://placeimg.com/400/400/people"
                    roundedCircle
                    width={150}
                    className="mt-2"
                  />
                  <h6 className="mt-2 profile-name">Muhammad Rifki Tri Pratama</h6>
                  <span>2101717031</span>
                  <br />
                  <Button
                    className="btn button-primary mt-3 mb-2"
                    onClick={handleShow}
                  >
                    Upload Image
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={8} xl={9} className="mb-5">
              <div className="card">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group controlId="formName">
                    <Form.Label className="input-label">
                      Nama Lengkap
                    </Form.Label>
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
                  <Form.Group controlId="formEmail">
                    <Form.Label className="input-label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="masukkan email"
                      name="email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="validation-label">Wajib diisi</span>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formTelp">
                    <Form.Label className="input-label">No Telp</Form.Label>
                    <Form.Control
                      type="telephone"
                      placeholder="masukkan telp"
                      name="notelp"
                      {...register("notelp", { required: true })}
                    />
                    {errors.notelp && (
                      <span className="validation-label">Wajib diisi</span>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formTelp">
                    <Form.Label className="input-label">
                      Tanggal Lahir
                    </Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="DD/MM/YYYY"
                      name="tgl_lahir"
                      {...register("tgl_lahir", { required: true })}
                    />
                    {errors.tgl_lahir && (
                      <span className="validation-label">Wajib diisi</span>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="input-label">
                      Jenis Kelamin
                    </Form.Label>
                    <br />
                    <Form.Check
                      inline
                      label="Laki - Laki"
                      type="radio"
                      id="radio-gender1"
                      name="gender"
                      onChange={() => setGenderState("L")}
                    />
                    <Form.Check
                      inline
                      label="Perempuan"
                      type="radio"
                      id="radio-gender2"
                      name="gender"
                      onChange={() => setGenderState("P")}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="input-label">Alamat</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="input-label">Divisi/Unit</Form.Label>
                    <Form.Control as="select">
                      <option>- choose -</option>
                    </Form.Control>
                  </Form.Group>
                  <Button
                    className="btn button-primary float-right"
                    type="submit"
                  >
                    Save Change
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* toast */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        className="toast-alert"
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Save Profile</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>

      {/* upload file modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropzone />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="button-primary" onClick={handleClose}>
            Upload File
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProfilePage;
