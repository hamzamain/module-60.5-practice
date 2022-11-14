import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UseContext/UseContext";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoLink = form.photoLink.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(name, photoLink);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Form onSubmit={handleSubmit} className="border p-5 shadow mb-5 rounded">
      <h3 className="text-danger">Please Sign up !!</h3>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhotoLink">
        <Form.Label>Photo Link</Form.Label>
        <Form.Control
          type="text"
          name="photoLink"
          placeholder="Enter Photo Link"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="danger" type="submit" className="w-100">
        Login
      </Button>
      <p className="text-center mt-5 border w-75 mx-auto p-1 rounded border-primary shadow">
        Already have an Account?{" "}
        <Link className="text-primary" to={"/Login"}>
          Login
        </Link>
      </p>
    </Form>
  );
};

export default SignUp;
