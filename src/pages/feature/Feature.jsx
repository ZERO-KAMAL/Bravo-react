import React from "react";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import featureImg1 from "../../assets/images/featureImg1.svg";
import featureImg2 from "../../assets/images/featureImg2.svg";
import featureImg3 from "../../assets/images/featureImg3.svg";
import "./Feature.scss";
const Feature = () => {
  return (
    <>
      <CommonSection title="Features" />
      <div className="wrapper">
        <section className="feature sectionPadding">
          <div className="sectionTitle">
            <Container>
              <h6>
                A more engaging, intuitive and fun
                <span> way of learning!</span>
              </h6>
              <p>Study smart with Learnwithbravos</p>
            </Container>
          </div>
          <Container>
            <Row className="g-lg-5 g-md-4 g-3">
              <Col lg={4} md={4} sm={6} >
                <div className="feature__card ">
                  <div className="feature__card-inner">
                    <img src={featureImg1} alt="" />
                    <h6>E-learing</h6>
                    <p>
                      We provides the user friendly E-learning platforms to the
                      student,so they can learn without any complication.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={6} >
                <div className="feature__card ">
                  <div className="feature__card-inner">
                    <img src={featureImg2} alt="" />
                    <h6>Pre-recorded Classes</h6>
                    <p>
                      Student can easily learn from pre-recorded classes, who
                      were unable to attend physical classes or unable to
                      understand the topic can learn from anywhere at any time.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={6} >
                <div className="feature__card ">
                  <div className="feature__card-inner">
                    <img src={featureImg3} alt="" />
                    <h6>Access to own class teacher</h6>
                    <p>
                      Any student can connect personally with a teacher and can
                      ask questions and establish a personal learning
                      environment digitally.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={6} >
                <div className="feature__card ">
                  <div className="feature__card-inner">
                    <img src={featureImg3} alt="" />
                    <h6>School’s Live Classes</h6>
                    <p>
                      LMS provide rich platforms for teacher to host live
                      classes from anywhere and student can join through the
                      provided link.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={6} >
                <div className="feature__card ">
                  <div className="feature__card-inner">
                    <img src={featureImg3} alt="" />
                    <h6>Notes and solutions</h6>
                    <p>
                      Get all materials such as notes & solution, all students
                      can access to their own teachers notes & solution of any
                      subject and they can download too.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={6} >
                <div className="feature__card ">
                  <div className="feature__card-inner">
                    <img src={featureImg3} alt="" />
                    <h6>Digital doubts solving
</h6>
                    <p>
                    Slove your doutbs from your best teacher, you can ask the question easily and can get an answer from the same teacher until the you get clear about the doubts.


                    </p>
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

export default Feature;
