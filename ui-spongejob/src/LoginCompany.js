import React, { useState } from "react";
import { Container, Grid, Divider, Form, Button } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";
import "./App.css";
import { toast } from "react-toastify";
import 'semantic-ui-css/semantic.min.css';

const LoginEmployee = ( { showRegisterLink }) => {
    const history = useHistory();

    const [usernamePassword, setUsernamePassword] = useState ({
        username: "",
        password: ""
    });

    const [usernamePasswordError ] = useState ({
        username: null,
        password: null,
    });

    const handleChange = (e) => {
        const {currentTarget} = e;
        const{value, name} = currentTarget;
        setUsernamePassword({
            ...usernamePassword, [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = usernamePassword;
      
        
        //const formData = new URLSearchParams();
        //formData.append("username", username);
        //formData.append("password", password);
        
        fetch(`http://localhost:8080/company?username=${usernamePassword.username}&password=${usernamePassword.password}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/raw",
            },
            credentials : "include",
        })
        .then((r) => {
            if(r.ok){
                return r;
            }
            if( r.status===401 || r.status === 403 || r.status === 500 ){
                return Promise.reject(new Error("Something went wrong."));
            }
        })
        .then((response) => {
            toast.success("Successful, please wait...");
            setTimeout( () => {    
                history.push("/");
            }, 3000);
        })
        .catch((e) => {
            toast.error("e.message");
        } );
    };
        return (
            <div className="App">
                <Container>
                    <Grid>
                        <Grid.Row columns="equal" centered>
                            <Grid.Column width={8}>
                                <h1 centered> Welcome </h1><br></br>
                                <Form 
                                onSubmit = {handleSubmit}
                                onReset ={(e) => {
                                    e.preventDefault();
                                    setUsernamePassword({ username: "", password: ""});
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
                                    <Button as = {Link} to="/registercompany"> Open an account </Button>
                                        <Button type="submit" color="olive">Login</Button>
                                    </Button.Group>
                                    </Form>
                                    <Divider />
                        
                                    {showRegisterLink && (
                                        <Button 
                                        type="button"
                                        basic color="orange"
                                        fluid
                                        size = "small"
                                        onClick={() => {
                                            history.push("/");
                                        }}
                                        >Register.</Button>
                                    )}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
}

export default LoginEmployee;