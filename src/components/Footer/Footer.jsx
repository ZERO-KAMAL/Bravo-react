import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <Row className="g-md-5 g-lg-5 d-flex justify-content-between">
            <Col lg={5} md={4} sm={6}>
              <div className="footer__box">
                <h5 className="footer__title">Learnwithbravosus</h5>
                <p>
                  This is the best e learning platform in Nepal for student. The
                  best thing about this platform is that we can makes our doubts
                  clear asking unlimited time to teacher.
                </p>
                <div className="socail-links">
                  <ul className="d-flex align-items-center">
                    <li>
                      <NavLink>
                        <i class="ri-linkedin-fill"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="ri-facebook-fill"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="ri-instagram-fill"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="ri-twitter-fill"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="ri-youtube-fill"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div className="footer__box">
                <h5 className="footer__title">Quick Links</h5>
                <div className="d-flex justify-content-between">
                  <ul className="footer__quick-links">
                    <li className="link-item">
                      <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className="link-item">
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="link-item">
                      <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li className="link-item">
                      <NavLink to="/policy">Privacy Policy</NavLink>
                    </li>
                    <li className="link-item">
                      <NavLink to="/policy">Terms of service</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div className="footer__box">
                <h5 className="footer__title">Solutions</h5>
                <div className="d-flex justify-content-between">
                  <ul className="footer__quick-links">
                    <li className="link-item">
                      <NavLink to="/student">For Students</NavLink>
                    </li>
                    <li className="link-item">
                      <NavLink to="/teacher">For Teachers</NavLink>
                    </li>
                    <li className="link-item">
                      <NavLink to="/feature">Features</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer__bottom d-flex justify-content-center">
          <p>Copyright 2022 Learnwithbrovos</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
