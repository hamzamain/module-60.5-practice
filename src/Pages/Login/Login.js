import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UseContext/UseContext";

const Login = () => {
  const { Login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    Login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form onSubmit={handleSubmit} className="border p-5 shadow mb-5 rounded">
      <h3 className="text-primary">Please Login !!</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Login
      </Button>
      <p className="text-center mt-5 border w-75 mx-auto p-1 rounded border-danger shadow">
        First Time Here?{" "}
        <Link className="text-danger" to={"/signup"}>
          SignUp
        </Link>
      </p>
    </Form>
  );
};

export default Login;
