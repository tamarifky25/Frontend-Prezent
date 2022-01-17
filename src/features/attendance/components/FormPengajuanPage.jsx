import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
const FormPengajuanPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <div className="mt-3 table-container">
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

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
            <Button
              variant="primary"
              className="btn button-primary float-right"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default FormPengajuanPage;
