import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const UserRegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    history.push("/login");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col xs={6} className="pr-1">
          <Form.Group className="text-left mb-3">
            <Form.Label className="auth-label">First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="first name"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <span className="validation-label">Wajib diisi</span>
            )}
          </Form.Group>
        </Col>
        <Col xs={6} className="pl-1">
          <Form.Group className="text-left mb-3">
            <Form.Label className="auth-label">Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="last name"
              {...register("lastname", { required: true })}
            />
            {errors.lastname && (
              <span className="validation-label">Wajib diisi</span>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formEmail" className="text-left mb-3">
        <Form.Label className="auth-label">Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="masukkan email"
          {...register("email", { required: true })}
        />
        {errors.lastname && (
          <span className="validation-label">Wajib diisi</span>
        )}
      </Form.Group>
      <Form.Group controlId="formNik" className="text-left mb-3">
        <div>
          <Form.Label className="auth-label">Password</Form.Label>
          <span className="float-right pt-1 text-white">
            <FontAwesomeIcon
              icon={faEye}
              className={`mdi mdi-eye-outline`}
              onClick={() =>
                showPassword ? setShowPassword(false) : setShowPassword(true)
              }
            />
          </span>
        </div>
        <Form.Control
          name="password"
          placeholder="masukkan password"
          type={showPassword ? "text" : "password"}
          {...register("password", { required: true })}
        />
        {errors.lastname && (
          <span className="validation-label">Wajib diisi</span>
        )}
      </Form.Group>
      <button type="submit" className="mt-3 mb-1 auth-button">
        Register
      </button>
    </form>
  );
};

export default UserRegisterForm;
