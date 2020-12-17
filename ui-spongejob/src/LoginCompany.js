import React, { useState } from "react";
import { Container, Grid, Divider, Form, Button } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";
import "./App.css";
import { toast } from "react-toastify";
import "semantic-ui-css/semantic.min.css";
import CompanyProfile from "./CompanyProfile";

const LoginEmployee = () => {
  const history = useHistory();

  const [usernamePassword, setUsernamePassword] = useState({
    username: "",
    password: "",
  });

  const [usernamePasswordError] = useState({
    username: null,
    password: null,
  });

  const handleChange = (e) => {
    const { currentTarget } = e;
    const { value, name } = currentTarget;
    setUsernamePassword({
      ...usernamePassword,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `http://127.0.0.1:8080/company/${usernamePassword.username}/${usernamePassword.password}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/raw",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        toast.success("Successful, please wait...");

        let data = JSON.parse(result);

        fetch(`http://127.0.0.1:8080/company/${data}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/raw",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            toast.success("Successful, please wait...");

            const {companyId, name, address, phone, email} = result;

            CompanyProfile.createProfile(name, address, phone, email, companyId);

            setTimeout(() => {
              history.push("/jobapplications");
            }, 1);
          })
          .catch((e) => {
            toast.error("e.message");
          });
      })
      .catch((e) => {
        toast.error("e.message");
      });
  };
  return (
    <div className="App">
      <Container>
        <Grid>
          <Grid.Row columns="equal" centered>
            <Grid.Column width={8}>
              <h1 centered> Welcome </h1>
              <br></br>
              <Form
                onSubmit={handleSubmit}
                onReset={(e) => {
                  e.preventDefault();
                  setUsernamePassword({ username: "", password: "" });
                }}
              >
                <Form.Field>
                  <label> Username</label>
                  <Form.Input
                    name="username"
                    required
                    error={usernamePasswordError.username}
                    value={usernamePassword.username}
                    onChange={handleChange}
                  />
                </Form.Field>

                <Form.Field>
                  <label> Password </label>
                  <Form.Input
                    type="password"
                    name="password"
                    required
                    error={usernamePasswordError.password}
                    value={usernamePassword.password}
                    onChange={handleChange}
                  />
                </Form.Field>

                <Button.Group fluid>
                  <Button as={Link} to="/registercompany">
                    {" "}
                    Open an account{" "}
                  </Button>
                  <Button type="submit" color="olive">
                    Login
                  </Button>
                </Button.Group>
              </Form>
              <Divider />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginEmployee;
