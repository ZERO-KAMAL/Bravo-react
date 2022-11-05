import React from "react";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import intro1 from "../../assets/images/aboutImg1.svg";
import intro2 from "../../assets/images/aboutImg2.svg";
import ceoImg from "../../assets/images/ceo-img.svg";
import "./About.scss";

const about = () => {
  return (
    <>
      <CommonSection title="About" />
      <div className="wrapper">
        <div className="about">
          <section className="about__intro">
            <Container>
              <div className="box__wrapper sectionMargin">
                <Row className=" justify-content-between">
                  <Col md={6} lg={4} className="mb-3">
                    <img src={intro1} alt="" className="aboutImg" />
                  </Col>
                  <Col md={6} lg={6} className="mb-3">
                    <div className="sectionTitle text-start">
                      <h6>
                        <span>Our Humble</span> Beginning!
                      </h6>
                      <p className="text-start w-100">
                        Our story begins with the COVID pandamic, with the dire
                        experience of the world. Since pandamic, learning has
                        been changed forever without having any alternative. The
                        teaching style in Nepal has stayed the same for decades.
                        LearnWithBravos is stepping up into the future of
                        learning in Nepal by giving full access to NEB courses
                        free of cost. Students can now access their own class
                        courses digitally from any location at any time. 
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="box__wrapper sectionMargin">
                <Row className=" flex-row-reverse justify-content-between">
                  <Col md={6} lg={4} className="mb-3">
                    <img src={intro2} alt="" className="aboutImg" />
                  </Col>
                  <Col md={6} lg={6} className="mb-3">
                    <div className="sectionTitle text-start">
                      <h6>
                        <span>Join the </span> Revolution
                      </h6>
                      <p className="text-start w-100">
                        Our vision at Bravos is to rectify and evolve the way of
                        teaching and learning that has been happening for
                        decades. We are able to create the overlying learning
                        experience for students and assist in their excellent
                        outcome. We have highly qualified and experienced
                        teachers. We believe that every student is different and
                        has different learning needs. We work interminably to
                        solve students' problems and help them learn better
                        using advanced technology. Our mission is to transform
                        the old methodology of teaching and learning into the
                        modern system at a rapid pace and provide world-class
                        education in Nepal.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
          <section className="about__value sectionPadding">
            <div className="sectionTitle">
              <Container>
                <h6>
                  <span>We Shared</span> Common Values
                </h6>
                <p>
                  Our values stand by our every action to provide equal
                  opportunity in education to all.
                </p>
              </Container>
            </div>
            <Container>
              <Row>
                <Col lg={4} md={4} sm={6} className="mb-3">
                  <div className="about__card green-bg">
                    <div className="icon">
                      <i class="ri-compasses-line"></i>
                    </div>
                    <h6 className="green-title">Quality Education</h6>
                    <p>
                      Our Continious effort to provide quality eductions to all
                      over Nepal.
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={6} className="mb-3">
                  <div className="about__card red-bg">
                    <div className="icon">
                      <i class="ri-tools-fill"></i>
                    </div>
                    <h6 className="red-title">Intigrity</h6>
                    <p>
                      Developing close, honest relationships with our student
                      and teacher means we are genuinely driven to see them find
                      success.
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={6} className="mb-3">
                  <div className="about__card blue-bg">
                    <div className="icon">
                      <i class="ri-cast-fill"></i>
                    </div>
                    <h6 className="blue-title">Innovation</h6>
                    <p>
                      Our continuous innovative solutions to our students
                      problems by applying the latest technologies available.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="about__ceoMsg sectionPadding">
            <Container>
              <Row className="justify-content-between">
                <Col md={12} lg={5}>
                  <div className="ceo-img">
                    <img src={ceoImg} alt="" className="ceo-img_main" />
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div className="ceo__des">
                    <div className="sectionTitle text-start">
                      <h6>
                        Message from
                        <span> CEO</span>
                      </h6>
                      <p className="text-start w-100">
                        Our vision at Bravos is to rectify and evolve the way of
                        teaching and learning that has been happening for
                        decades. We are able to create the overlying learning
                        experience for students and assist in their excellent
                        outcome. We have highly qualified and experienced
                        teachers.
                        <br />
                        <br /> We believe that every student is different and
                        has different learning needs. We work interminably to
                        solve students' problems and help them learn better
                        using advanced technology. Our mission is to transform
                        the old methodology of teaching and learning into the
                        modern system at a rapid pace and provide world-class
                        education in Nepal.
                      </p>

                      <div className="ceo__details d-flex flex-column">
                        <span className="ceo__name">Rajesh Kumar</span>
                        <span className="ceo__desi">
                          CEO of Bravos International
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
};

export default about;
