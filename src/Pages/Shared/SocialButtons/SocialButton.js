import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/UseContext/UseContext";

const SocialButton = () => {
  const { GoogleLogin, GithubLogin } = useContext(AuthContext);
  const Google = () => {
    GoogleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Github = () => {
    GithubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <ButtonGroup vertical>
      <Button onClick={Google} variant="outline-primary" className="mb-2">
        <FaGoogle /> Google
      </Button>
      <Button onClick={Github} variant="outline-dark" className="mb-2">
        <FaGithub /> Github
      </Button>
    </ButtonGroup>
  );
};

export default SocialButton;
