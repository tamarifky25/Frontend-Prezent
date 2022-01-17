import React, { useState } from "react";
import { Modal, Button, Container, Form, Row, Col } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { useForm } from "react-hook-form";

const localizer = momentLocalizer(moment);

const AdminJadwalCalender = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const {
    register,
    formState: { errors },
  } = useForm();

  const eventData = [
    {
      id: 0,
      title: "All Day Event very long title",
      allDay: true,
      start: new Date(2015, 3, 0),
      end: new Date(2015, 3, 1),
    },
    {
      id: 1,
      title: "Long Event",
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10),
    },

    {
      id: 2,
      title: "DTS STARTS",
      start: new Date(2016, 2, 13, 0, 0, 0),
      end: new Date(2016, 2, 20, 0, 0, 0),
    },
  ];

  const handleSelect = (slotInfo) => {
    handleShow();
  };
  return (
    <>
      <Calendar
        selectable
        localizer={localizer}
        events={eventData}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelect}
        style={{ height: 500 }}
      />
      {/* view image modal */}
      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Container>
            <h4 className="d-flex justify-content-center">
              SELASA, 1 JUNI 2021
            </h4>
            <h6 className="d-flex justify-content-center">MASUKAN JADWAL</h6>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label className="input-label">Mata Pelajaran</Form.Label>
              <Form.Control
                as="select"
                name="matpel"
                {...register("matpel", { required: true })}
              >
                <option>--choose--</option>
              </Form.Control>
              {errors.matpel && (
                <span className="validation-label">Wajib diisi</span>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label className="input-label">Kelas</Form.Label>
              <Form.Control
                as="select"
                name="kelas"
                {...register("kelas", { required: true })}
              >
                <option>--choose--</option>
              </Form.Control>
              {errors.kelas && (
                <span className="validation-label">Wajib diisi</span>
              )}
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formJam">
                <Form.Label className="input-label">Jam</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="88:88"
                  name="jam"
                  {...register("jam", { required: true })}
                />
                {errors.jam && (
                  <span className="validation-label">Wajib diisi</span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formSampaiJam">
                <Form.Label className="input-label">Sampai Jam</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="88:88"
                  name="Sampaijam"
                  {...register("Sampaijam", { required: true })}
                />
                {errors.Sampaijam && (
                  <span className="validation-label">Wajib diisi</span>
                )}
              </Form.Group>
            </Row>

            <Button className="btn button-primary float-right" type="submit">
              UNGGAH
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AdminJadwalCalender;
