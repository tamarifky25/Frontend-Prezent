import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  Modal,
  Form,
  Button,
} from "react-bootstrap";
import VerticalBarAdmin from "../components/VerticalBarAdminPage";
import JitsiLogo from "../../../assets/jitsi-logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { useForm } from "react-hook-form";

const AdminDashboardPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5">
          <h1 className="heading-title">DASHBOARD ADMIN</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12} lg={10} className="mt-5">
          <Row>
            <Col md={6}>
              <div className="card dashboard-card">
                <h6 className="dashboard-label">TINGKAT KEHADIRAN</h6>
                <h1 className="dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">%</span>
                </h1>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card-grey justify-content-center">
                <h1 className="color-white dashboard-sublabel d-inline">
                  09.00
                </h1>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card-grey justify-content-center">
                <h5 className="color-white dashboard-sublabel d-inline">
                  09/07/2021
                </h5>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card">
                <h6 className="dashboard-label color-red">JUMLAH TELAT</h6>
                <h1 className="color-red dashboard-sublabel d-inline ">
                  0 <span className="dashboard-sublabel-child">ORANG</span>
                </h1>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card">
                <h6 className="color-yellow dashboard-label">PULANG CEPAT</h6>
                <h1 className="color-yellow dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">ORANG</span>
                </h1>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card">
                <h6 className="color-red dashboard-label">SAKIT</h6>
                <h1 className="color-red dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">ORANG</span>
                </h1>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card">
                <h6 className="color-green dashboard-label">CUTI</h6>
                <h1 className="color-green dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">ORANG</span>
                </h1>
              </div>
            </Col>

            <Col md={6}>
              <div className="card dashboard-card">
                <h6 className="color-red dashboard-label">TOTAL ALFA</h6>
                <h1 className="color-red dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">ORANG</span>
                </h1>
              </div>
            </Col>

            <Col md={6}>
              <NavLink to="/meeting">
                <div className="card dashboard-card-primary d-flex">
                  <h5 className="color-white dashboard-sublabel d-inline">
                    TERIMA PANGGILAN{" "}
                    <img
                      src={JitsiLogo}
                      alt="jitsi logo"
                      width="85"
                      className="float-right"
                    />{" "}
                    <br /> Muhammad Rifki Tri Pratama <Badge variant="danger">1</Badge>
                  </h5>
                </div>
              </NavLink>
            </Col>

            <Col md={12} className="mt-4">
              <div className="card mb-1">
                <VerticalBarAdmin />
              </div>
            </Col>

            <Col md={12} className="mt-4 mb-5 ">
              <div className="card mb-1 dashboard-card">
                <Row>
                  <Col md={12} className="text-center mb-2 color-primary">
                    <h4>INFORMASI</h4>
                  </Col>
                  <Col md={12}>
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={3}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                      className="custom-swiper"
                      breakpoints={{
                        300: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div
                          className="slider-card pt-4 text-center"
                          onClick={handleShow}
                        >
                          <FontAwesomeIcon
                            icon={faPlus}
                            style={{ fontSize: "32px" }}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-card pt-4 text-center">
                          <h3>BERITA 1</h3>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="slider-card pt-4 text-center">
                          <h3>BERITA 3</h3>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-card pt-4 text-center">
                          <h3>BERITA 4</h3>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </Col>
                </Row>
              </div>
            </Col>
            
          </Row>
        </Col>
      </Row>

      {/* view image modal */}
      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Container>
            <h4 className="d-flex justify-content-center">INFORMASI</h4>
            <h6 className="d-flex justify-content-center">Masukan Dokumen</h6>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Label>Judul Informasi</Form.Label>
                <Form.Control type="text" placeholder="Judul" />
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
                  label="Unggah Foto"
                  name="foto"
                  {...register("foto", { required: true })}
                />
                {errors.foto && (
                  <span className="validation-label">Wajib diisi</span>
                )}
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  className="btn button-primary float-right"
                  type="submit"
                >
                  UNGGAH
                </Button>
              </div>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminDashboardPage;
