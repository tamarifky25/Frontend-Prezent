import { Container, Row, Col } from "react-bootstrap";
import JitsiLogo from "../../../assets/jitsi-logo.png";
import { NavLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5">
          <h1 className="heading-title">DASHBOARD</h1>
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

            <Col md={6}>
              <div className="card dashboard-card">
                <h6 className="dashboard-label">JAM KERJA</h6>
                <h1 className="dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">JAM</span>
                </h1>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card">
                <h6 className="color-red dashboard-label">Waktu Telat</h6>
                <h1 className="color-red dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">MENIT</span>
                </h1>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card">
                <h6 className="color-yellow dashboard-label">Pulang Cepat</h6>
                <h1 className="color-yellow dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">MENIT</span>
                </h1>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card">
                <h6 className="color-red dashboard-label">Waktu Sakit</h6>
                <h1 className="color-red dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">HARI</span>
                </h1>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card">
                <h6 className="color-green dashboard-label">Cuti</h6>
                <h1 className="color-green dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">HARI/THN</span>
                </h1>
              </div>
            </Col>

            <Col md={6}>
              <div className="card dashboard-card">
                <h6 className="color-red dashboard-label">Total Alfa</h6>
                <h1 className="color-red dashboard-sublabel d-inline">
                  0 <span className="dashboard-sublabel-child">HARI</span>
                </h1>
              </div>
            </Col>

            <Col md={3}>
              <div className="card dashboard-card-primary pb-3">
                <h5 className="color-white dashboard-sublabel d-inline">
                  RAPOT KEHADIRAN
                </h5>
              </div>
            </Col>

            <Col md={3}>
              <NavLink to="/meeting">
                <div className="card dashboard-card-primary d-flex">
                  <h5 className="color-white dashboard-sublabel d-inline">
                    LAPOR{" "}
                    <img
                      src={JitsiLogo}
                      alt="jitsi logo"
                      width="70"
                      className="float-right"
                    />
                    <br /> ADMIN
                  </h5>
                </div>
              </NavLink>
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
                        <div className="slider-card pt-4 text-center">
                          <h3>BERITA 1</h3>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-card pt-4 text-center">
                          <h3>BERITA 2</h3>
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
    </Container>
  );
};

export default DashboardPage;
