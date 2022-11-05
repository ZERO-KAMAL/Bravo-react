import React from "react";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "./Contact.scss";
const Contact = () => {
  return (
    <>
      <CommonSection title="Contact" />
      <div className="wrapper">

      <section className="contact sectionPadding">
        <Container>
          <Row>
            <Col md={6} lg={6} className="mb-4">
              <div className="contact__details">
              <div className="sectionTitle text-start">
                <h6>Our Address</h6>
              </div>
                <ul>
                  <li>
                    <div className="contact__details-list">
                      <div className="icon">
                        <i class="ri-home-4-fill"></i>
                      </div>
                      <div className="des">
                        <h6>Location</h6>
                        <span>
                        Manbhawan 03, Lalitpur, Nepal
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact__details-list">
                      <div className="icon">
                        <i class="ri-mail-fill"></i>
                      </div>
                      <div className="des">
                        <h6>Email Address</h6>
                        <span>info@bravos.international</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact__details-list">
                      <div className="icon">
                        <i class="ri-phone-fill"></i>
                      </div>
                      <div className="des">
                        <h6>Phone</h6>
                        <span>(+977)-9801256293</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact__details-list">
                      <div className="icon">
                        <i class="ri-alarm-fill"></i>
                      </div>
                      <div className="des">
                        <h6>Opening Hours</h6>
                        <span>
                          Mon – Fri : <strong>10 AM – 18 PM</strong>
                        </span>
                        <br />
                        <span>
                          Sat – Sun: <strong>Open for Workshops</strong>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={6} className="mb-4">
              <div className="contact__form">
                <div className="sectionTitle text-start">
                  <h6>Send us a Message</h6>
                  <p>
                    Write in to us if you have anything to ask to us or any
                    susggestions
                  </p>
                  <form className="mt-md-5 mt-lg-5 mt-3">
                    <div class="form-floating mb-4">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      ></input>
                      <label for="floatingInput">Full Name</label>
                      <i class="ri-user-3-line"></i>
                    </div>
                    <div class="form-floating mb-4">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingemail"
                        placeholder="email"
                      ></input>
                      <label for="floatingemail">Email Address</label>
                      <i class="ri-mail-line"></i>
                    </div>
                    <div class="form-floating mb-4">
                      <textarea
                        type="text"
                        class="form-control"
                        id="textarea"
                        placeholder="Password"
                        rows="5"
                      ></textarea>
                      <label for="textarea">Write a message</label>
                      <i class="ri-edit-box-line textareaIcon"></i>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-send d-flex align-item-center"
                    >
                      Send<i class="ri-send-plane-fill ms-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    </>
  );
};

export default Contact;
