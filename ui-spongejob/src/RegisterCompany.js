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
      name: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      username: "",
    };
  };

  handleChange = (e) => {
    const {currentTarget} = e;
    const {value, name} = currentTarget;
    this.setState( { [name]:value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, phone, email, password, username } = this.state;

fetch("http://localhost:8080/company", {
  method: "POST",
  headers: {
    "Content-Type":"application/json",
  },
  body: JSON.stringify({ name, address, phone, email, password }),
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
  
};
 
  render = () => {
    const { usernameError, passwordError, passwordRepeatError } = this.state;
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
                        name: "",
                        address: "",
                        phone: "",
                        email: "",
                        password: "",
                      });
                    }}
                  >
                  
                  <h1> Sign Up </h1><br></br>
                  <Form.Field>
                  <label> Name  </label>
                  <Form.Input
                    name="name" 
                    required ={true}
                    error = {usernameError}
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                  </Form.Field>

                  <Form.Field> 
                  <label> Password </label>
                  <Form.Input
                    type="password" 
                    name="password"
                    required ={true}
                    error = {passwordError}
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  </Form.Field>

                  <Form.Field> 
                  <label> Address </label>
                  <Form.Input
                    type="address" 
                    name="address"
                    required ={true}
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                  </Form.Field>

                  <Form.Field>
                  <label> Phone </label>
                  <Form.Input
                    name="phone" 
                    required ={true}
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                  </Form.Field>

                  <Form.Field>
                  <label> E - mail </label>
                  <Form.Input
                    name="email" 
                    required ={true}
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  </Form.Field>

                  <Form.Field>
                  <label> E - mail </label>
                  <Form.Input
                    name="username" 
                    required ={true}
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  </Form.Field>
 
                  <Button.Group fluid>
                  <Button as = {Link} to="/logincompany"> Do you have an account? </Button>
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