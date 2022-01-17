import React from "react";
import AdminJadwalCalendar from "../components/AdminJadwalCalender";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
const AdminJadwalPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5">
          <h1 className="heading-title">TABEL JADWAL</h1>
        </Col>
      </Row>
      <div className="mt-5 d-flex justify-content-center">
        <Row>
          <Col md={12} className="mb-5  ">
            <div className="card">
              <form>
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
                <Button
                  className="btn button-primary float-right"
                  type="submit"
                >
                  SEARCH
                </Button>
              </form>
            </div>
          </Col>
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
      </div>
      <Row>
        <Col md={12} className="mt-5 mb-5">
          <AdminJadwalCalendar />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminJadwalPage;
