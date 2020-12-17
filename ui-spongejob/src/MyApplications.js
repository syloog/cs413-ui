import UserProfile from "./UserProfile";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Tab,
  Tabs,
  Button,
  Table,
  Jumbotron,
  Modal,
  Form,
} from "react-bootstrap";

import React, { useState } from "react";

function ApplyButton({ job }) {
  const [show, setShow] = useState(false);

  const [message, setMessage] = useState({
    text: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { currentTarget } = e;
    const { value, name } = currentTarget;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleApplication = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ answer: message.text });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    var userID = UserProfile.getEmployeeID();

    fetch(
      "http://127.0.0.1:8080/employee/" + userID + "/jobPost/" + job[0],
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Apply
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Your Application for {job[1]} at {job[2]}
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Message to the Company</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="text"
                required="true"
                placeholder="Your message"
                value={message.text}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleApplication}>
              Apply
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

class MyApplications extends React.Component {
  constructor() {
    super();
    this.state = {
      jobPostList: [],
      myPosts: [],
      userID: UserProfile.getEmployeeID(),
      userName: UserProfile.getFirstName() + " " + UserProfile.getSurname(),
    };
  }

  componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://127.0.0.1:8080/employee/" + this.state.userID + "/applications",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        result.forEach((element) => {
          let listItem = [
            element.answer,
            element.applicationDate,
            element.jobName,
            element.companyName,
            element.type,
            element.salary,
            element.address,
            element.position,
            element.expectation,
            element.applicantCount,
            element.startDate,
            element.endDate,
            element.evaluationDate,
          ];

          this.state.myPosts.push(listItem);
        });
        this.setState({});
      })
      .catch((error) => console.log("error", error));

    fetch("http://127.0.0.1:8080/employee/jobPost/Long-term", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.forEach((element) => {
          let listItem = [
            element.jobPostId,
            element.jobName,
            element.companyName,
            element.type,
            element.salary,
            element.address,
            element.position,
            element.expectation,
            element.applicantCount,
            element.startDate,
            element.endDate,
            element.evaluationDate,
          ];

          this.state.jobPostList.push(listItem);
        });
        this.setState({});
      })
      .catch((error) => console.log("error", error));

    fetch("http://127.0.0.1:8080/employee/jobPost/Freelancer", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.forEach((element) => {
          let listItem = [
            element.jobPostId,
            element.jobName,
            element.companyName,
            element.type,
            element.salary,
            element.address,
            element.position,
            element.expectation,
            element.applicantCount,
            element.startDate,
            element.endDate,
            element.evaluationDate,
          ];

          this.state.jobPostList.push(listItem);
        });
        this.setState({});
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    let listItems = this.state.jobPostList.map((el, i) => (
      <tr key={i}>
        <td>{el[0]}</td>
        <td>{el[1]}</td>
        <td>{el[2]}</td>
        <td>{el[3]}</td>
        <td>{el[4]}</td>
        <td>{el[5]}</td>
        <td>{el[6]}</td>
        <td>{el[7]}</td>
        <td>{el[8]}</td>
        <td>{el[9]}</td>
        <td>{el[10]}</td>
        <td>{el[11]}</td>
        <td>
          <ApplyButton job={el}></ApplyButton>
        </td>
      </tr>
    ));

    let myPosts = this.state.myPosts.map((el, i) => (
      <tr key={i}>
        <td>{el[0]}</td>
        <td>{el[1]}</td>
        <td>{el[2]}</td>
        <td>{el[3]}</td>
        <td>{el[4]}</td>
        <td>{el[5]}</td>
        <td>{el[6]}</td>
        <td>{el[7]}</td>
        <td>{el[8]}</td>
        <td>{el[9]}</td>
        <td>{el[10]}</td>
        <td>{el[11]}</td>
        <td>{el[12]}</td>
      </tr>
    ));

    return (
      <Tabs defaultActiveKey="applications" id="uncontrolled-tab-example">
        <Tab eventKey="applications" title="My Applications">
          <Jumbotron>
            <h1>My Applications</h1>
            <p>
              In the list below, you can see the applications you applied
              before.
            </p>
            <p>
              <Table striped bordered hover variant="light" responsive>
                <thead>
                  <tr>
                    <th>Answer</th>
                    <th>Application Date</th>
                    <th>Job Name</th>
                    <th>Company Name</th>
                    <th>Type</th>
                    <th>Salary</th>
                    <th>Address</th>
                    <th>Position</th>
                    <th>Expectation</th>
                    <th>Application Count</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Evaluation Date</th>
                  </tr>
                </thead>
                <tbody>{myPosts}</tbody>
              </Table>
            </p>
          </Jumbotron>
        </Tab>
        <Tab eventKey="jobs" title="Job Posts">
          <Jumbotron>
            <h1>Job List</h1>
            <p>
              In the list below, you can see detailed information for job posts.
            </p>
            <p>
              <Table striped bordered hover variant="light" responsive>
                <thead>
                  <tr>
                    <th>Post ID</th>
                    <th>Job Name</th>
                    <th>Company Name</th>
                    <th>Type</th>
                    <th>Salary</th>
                    <th>Address</th>
                    <th>Position</th>
                    <th>Expectation</th>
                    <th>Application Count</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Evaluation Date</th>
                    <th>Apply</th>
                  </tr>
                </thead>
                <tbody>{listItems}</tbody>
              </Table>
            </p>
          </Jumbotron>
        </Tab>
        <Tab eventKey="profile" title={this.state.userName} disabled></Tab>
      </Tabs>
    );
  }
}

export default MyApplications;
