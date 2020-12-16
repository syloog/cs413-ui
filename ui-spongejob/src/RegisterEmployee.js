import React from 'react';
import { Form, Button, Container, Grid} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import fetch from "isomorphic-unfetch";
import {toast} from "react-toastify";
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class SignUpCompany extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: "",
      surname: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      age: "",
      cv: "",
    };
  };

  handleChange = (e) => {
    const {currentTarget} = e;
    const {value, name} = currentTarget;
    this.setState( { [name]:value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, surname, phone, email, username, password, age, cv } = this.state;

fetch("http://localhost:8080/employee", {
  method: "POST",
  headers: {
    "Content-Type":"application/json",
  },
  body: JSON.stringify({firstname, surname, phone, email, username, password, age, cv}),
})
  .then((r) => {
    if(r.ok) {
      return r;
    }
    if ( r.status === 401 || r.status === 403 || r.status === 500 ) {
      return Promise.reject( new Error("Something went wrong"));
    }
  })
  .then((r) => r.json())
  .then((response) => {
  toast.success("Success. You're directed to the main page");
  setTimeout( () =>  {
    this.props.history.push("/");
  }, 2000);
  })
  .catch((e) => {
    toast.error(e.message);
  });
};

componentDidMount = () => {
  setInterval(() => {
    console.log("" + new Date());
  }, 1000);
};
 
  render = () => {
    const { usernameError, passwordError } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Container> 
            <Grid>
              <Grid.Row columns="equal" centered>
                <Grid.Column width={8}>
                  <Form 
                    onSubmit={this.handleSubmit}
                    onReset={(e) => {
                      e.preventDefault();
                      this.setState({
                        firstname: "",
                        surname: "",
                        phone: "",
                        email: "",
                        username: "",
                        password: "",
                        age: 24,
                        cv: "",
                      });
                    }}
                  >
                  
                  <h1> Sign Up </h1><br></br>
                  <Form.Field>
                  <label> Firstname  </label>
                  <Form.Input
                    name="firstname" 
                    required ="true" 
                    error = {usernameError}
                    value={this.state.firstname}
                    onChange={this.handleChange}
                    />
                  </Form.Field>

                  <Form.Field> 
                  <label> Surname </label>
                  <Form.Input
                    name="surname"
                    required
                    error = {passwordError}
                    value={this.state.surname}
                    onChange={this.handleChange}
                  />
                  </Form.Field>

                  <Form.Field> 
                  <label> E-mail </label>
                  <Form.Input
                    name="email"
                    type="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  </Form.Field>

                  <Form.Field>
                  <label> Username </label>
                  <Form.Input
                    name="username" 
                    required ="true"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  </Form.Field>

                  <Form.Field>
                  <label> Password </label>
                  <Form.Input
                    name="password" 
                    required ="true"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  </Form.Field>

                  <Form.Field>
                  <label> Age </label>
                  <Form.Input
                    name="age" 
                    required ="true"
                    value={this.state.age}
                    onChange={this.handleChange}
                  />
                  </Form.Field>

                  <Form.Field>
                  <label> CV </label>
                  <Form.Input
                    name="cv" 
                    required ="true"
                    value={this.state.cv}
                    onChange={this.handleChange}
                  />
                  </Form.Field>
 
                  <Button.Group fluid>
                  <Button as = {Link} to="/loginemployee"> Do you have an account? </Button>
                  <Button type="submit" color="olive"> Submit </Button>
                
                  </Button.Group>   

                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </header>
      </div>
    );
  };
}

export default withRouter(SignUpCompany);