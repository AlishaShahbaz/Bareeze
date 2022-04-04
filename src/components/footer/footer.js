import React, { Component } from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { info, company, help, connect } from "./footerData";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container className="p-4 pb-0">
          <div className="text-center mb-5">
            <h2 className="fw-light text-black text-uppercase">
              Sign up and save
            </h2>
            <small className="text-black-50">Signup for our newsletter</small>
            <Row className="justify-content-center mt-3">
              <Col lg="5" className="d-flex px-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-control shadow-none rounded-0 me-3"
                />
                <Button className="subscribeBtn rounded-0 shadow-none border-0">
                  Subscribe
                </Button>
              </Col>
            </Row>
          </div>
          <Row className="mt-5">
            <Col lg="3" md="6" className='mt-3'>
              <h3 className="fs-5 text-uppercase">information</h3>
              {info.map((link) => (
                <Nav.Link className="p-0 mt-2 small text-black-50">
                  {link}
                </Nav.Link>
              ))}
            </Col>
            <Col lg="3" md="6" className='mt-3'>
              <h3 className="fs-5 text-uppercase">company</h3>
              {company.map((link) => (
                <Nav.Link className="p-0 mt-2 small text-black-50 mr-54">
                  {link}
                </Nav.Link>
              ))}
            </Col>
            <Col lg="3" md="6" className='mt-3'>
              <h3 className="fs-5 text-uppercase">help</h3>
              {help.map((link) => (
                <Nav.Link className="p-0 mt-2 small text-black-50">
                  {link}
                </Nav.Link>
              ))}
            </Col>
            <Col lg="3" md="6" className='mt-3'>
              <h3 className="fs-5 text-uppercase">connect</h3>
              {connect.map((link) => (
                <Nav.Link className="p-0 mt-2 small text-black-50">
                  {link}
                </Nav.Link>
              ))}
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
            <div className="d-flex justify-content-between align-items-center mb-3">
            <Nav.Link className="p-0 mt-2 small text-black-50">Track your order</Nav.Link>
            <Nav.Link className="p-0 mt-2 small text-black-50">© 2021 Bareeze - All Rights Reserved</Nav.Link>
            </div>
        </Container>
      </footer>
    );
  }
}
