import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

import {
  Tab,
  Tabs,
  Jumbotron,
  Table,
  Form,
  Button,
  Col,
  Modal,
} from "react-bootstrap";

import React, { useState } from "react";
import CompanyProfile from "./CompanyProfile";

const ApplyForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [evaluationStartDate, setEvaluationStartDate] = useState(new Date());
  const [postEndDate, setEvaluationEndDate] = useState(new Date());
  const [jobInfo, setJobInfo] = useState({
    jobName: "",
    jobType: "Long-term",
    jobPosition: "",
    jobAddress: "",
    jobSalary: 2324,
    jobExpectations: "",
  });

  const handleChange = (e) => {
    const { currentTarget } = e;
    const { value, name } = currentTarget;
    setJobInfo({
      ...jobInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log(jobInfo.jobType);

    var raw = JSON.stringify({
      jobName: jobInfo.jobName,
      type: jobInfo.jobType,
      salary: 4600,
      address: jobInfo.jobAddress,
      position: jobInfo.jobPosition,
      expectation: jobInfo.jobExpectations,
      applicantCount: 0,
      startDate: startDate,
      endDate: postEndDate,
      evaluationDate: evaluationStartDate,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    var companyID = CompanyProfile.getCompanyID();

    console.log(companyID);

    fetch("http://127.0.0.1:8080/company/" + companyID, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setJobInfo({
          jobName: "",
          jobType: "Long-term",
          jobPosition: "",
          jobAddress: "",
          jobSalary: 2324,
          jobExpectations: "",
        });
      })
      .catch((error) => console.log("error", error));
  };

  const ExampleCustomInput = ({ value, onClick }) => (
    <Button onClick={onClick}>{value}</Button>
  );

  return (
    <Form
      onReset={(e) => {
        e.preventDefault();
        setJobInfo({
          jobName: "",
          jobType: "Long-term",
          jobPosition: "",
          jobAddress: "",
          jobSalary: 2324,
          jobExpectations: "",
        });
      }}
    >
      <Form.Group controlId="jobName">
        <Form.Label>Job Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Job Name"
          name="jobName"
          value={jobInfo.jobName}
          onChange={handleChange}
          required={true}
        />
        <Form.Text className="text-muted">
          What is the job description?
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="jobType">
        <Form.Label>Job Type</Form.Label>
        <Form.Control
          as="select"
          name="jobType"
          value={jobInfo.jobType}
          onChange={handleChange}
          required={true}
        >
          <option>Freelancer</option>
          <option>Long-term</option>
        </Form.Control>
        <Form.Text className="text-muted">
          Choose job type as "Long-term" or "Freelancer"
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="jobPosition">
        <Form.Label>Job Position</Form.Label>
        <Form.Control
          type="text"
          placeholder="Job Position"
          name="jobPosition"
          value={jobInfo.jobPosition}
          onChange={handleChange}
          required={true}
        />
        <Form.Text className="text-muted">
          Define the job position such as "Front-end Developer", "Full-stack
          Developer" etc.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="jobAddress">
        <Form.Label>Job Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          type="text"
          name="jobAddress"
          placeholder="Job Address"
          value={jobInfo.jobAddress}
          onChange={handleChange}
          required={true}
        />
        <Form.Text className="text-muted">
          Define the place where the job address will be
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="jobSalary">
        <Form.Label>Job Salary</Form.Label>
        <Form.Control
          type="range"
          placeholder="Job Salary"
          min={2324}
          max={20000}
          name="jobSalary"
          value={jobInfo.jobSalary}
          onChange={handleChange}
          required={true}
        />
        <Form.Text className="text-muted">
          Approximation of Job Salary, Current Value: {jobInfo.jobSalary}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="jobExpectations">
        <Form.Label>Job Expectations</Form.Label>
        <Form.Control
          as="textarea"
          name="jobExpectations"
          rows={5}
          type="text"
          placeholder="Job Expectations"
          value={jobInfo.jobExpectations}
          onChange={handleChange}
          required={true}
        />
        <Form.Text className="text-muted">
          What do you expect from your future employees?
        </Form.Text>
      </Form.Group>
      <Form.Row>
        <Col>
          <Form.Group controlId="jobStartDate">
            <Form.Label>Job Start Date</Form.Label>
            <Form.Row>
              <Col>
                <DatePicker
                  selected={evaluationStartDate}
                  onChange={(date) => setEvaluationStartDate(date)}
                  required={true}
                  customInput={<ExampleCustomInput />}
                />
              </Col>
            </Form.Row>
            <Form.Text className="text-muted">
              When will the job start?
            </Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="jobEvaluationStartDate">
            <Form.Label>Job Post End Date</Form.Label>
            <Form.Row>
              <Col>
                <DatePicker
                  selected={postEndDate}
                  onChange={(date) => setEvaluationEndDate(date)}
                  required={true}
                  customInput={<ExampleCustomInput />}
                />
              </Col>
            </Form.Row>
            <Form.Text className="text-muted">
              When will the post will be disabled?
            </Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="jobEvaluationEndDate">
            <Form.Label>Job Evaluation Date</Form.Label>
            <Form.Row>
              <Col>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  required={true}
                  customInput={<ExampleCustomInput />}
                />
              </Col>
            </Form.Row>
            <Form.Text className="text-muted">
              Please give a date for evaluations
            </Form.Text>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

function PostsButton({ applicationId, applicationName }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [posts, updatePosts] = React.useState([]);

  React.useEffect(function effectFunction() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://localhost:8080/company/jobPost/" +
        applicationId +
        "/applications",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        result.forEach((element, i) => {
          updatePosts([
            ...posts,
            <tr key={i}>
              <td>{element.answer}</td>
              <td>{element.applicationDate}</td>
              <td>{element.firstname}</td>
              <td>{element.surname}</td>
              <td>{element.phone}</td>
              <td>{element.email}</td>
              <td>{element.age}</td>
              <td>{element.cv}</td>
            </tr>,
          ]);
        });
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Check Applications
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Applications for the Job: {applicationName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover variant="light" responsive>
            <thead>
              <tr>
                <th>Answer</th>
                <th>Application Date</th>
                <th>First Name</th>
                <th>Surname</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Age</th>
                <th>CV</th>
              </tr>
            </thead>
            <tbody>{posts}</tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

class JobApplications extends React.Component {
  constructor() {
    super();
    this.state = {
      jobPostList: [],
      companyName: CompanyProfile.getName(),
      companyID: CompanyProfile.getCompanyID(),
    };
  }

  componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://127.0.0.1:8080/company/" + this.state.companyID + "/jobPosts",
      requestOptions
    )
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
          <PostsButton
            applicationId={el[0]}
            applicationName={el[1]}
          ></PostsButton>
        </td>
      </tr>
    ));

    return (
      <Tabs defaultActiveKey="jobPosts" id="uncontrolled-tab-example">
        <Tab eventKey="createPost" title="Create a Post">
          <Jumbotron>
            <ApplyForm></ApplyForm>
          </Jumbotron>
        </Tab>
        <Tab eventKey="jobPosts" title="My Job Posts">
          <Jumbotron>
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
                  <th>Check Applicants</th>
                </tr>
              </thead>
              <tbody>{listItems}</tbody>
            </Table>
          </Jumbotron>
        </Tab>
        <Tab eventKey="profile" title={this.state.companyName} disabled></Tab>
      </Tabs>
    );
  }
}

export default JobApplications;
