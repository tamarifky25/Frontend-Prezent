import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const UserLoginForm = () => {
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // history.push("/dashboard");
    // console.log(data);
  };

  const onUserLogin = () => {
    localStorage.setItem("status", "user");
    history.push("/dashboard");
  };

  const onAdminLogin = () => {
    localStorage.setItem("status", "admin");
    history.push("/admin/dashboard");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formEmail" className="text-left mb-3">
          <Form.Label className="auth-label">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="masukkan email"
            {...register("email", { required: true })}
          />
          {errors.email && (
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
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="masukkan password"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <span className="validation-label">Wajib diisi</span>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox" className="text-left mb-3">
          <Form.Check
            className={`auth-label ${errors.accept && "red-alert"}`}
            type="checkbox"
            name="accept"
            label="I accept the terms and conditions"
            {...register("accept", { required: true })}
          />
        </Form.Group>

        <Row>
          <Col xs={6} className="pr-1">
            <button className="mt-3 mb-1 auth-button" onClick={onAdminLogin}>
              Login Admin
            </button>
          </Col>
          <Col xs={6} className="pl-1">
            <button
              className="mt-3 mb-1 auth-button ml-2"
              onClick={onUserLogin}
            >
              Login User
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default UserLoginForm;
