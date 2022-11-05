import React, { useState } from "react";

import CommonSection from "../../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import userImg2 from "../../assets/images/userImg2.svg";
import intro1 from "../../assets/images/aboutImg1.svg";
import intro2 from "../../assets/images/aboutImg2.svg";
import video from "../../assets/video/video.mp4";
import videoImg from "../../assets/images/videoImg.jpg";
import Popup from "../../components/UI/pop-up/Popup";

const User = () => {
  const [btnPopup, setbtnPopup] = useState(false);
  return (
    <>
      <CommonSection title="Student" />
      <div className="user__container">
        <section className="user__top sectionPadding">
          <Container>
            <div className="sectionTitle">
              <h6>Learn With Bravos Anywhere, Anytime</h6>
              <p>
                Students may use LearnWithBravos to learn from notes,class
                videos, questions and answers, and interactive sessions with the
                teacher, thus making learning more personalized. You can attend
                classes, clear your doubts with your best teacher.
              </p>
            </div>
            <Row className="align-items-center justify-content-between">
              <Col md={5} lg={5}>
                <div className="sectionTitle text-start user__top-left">
                  <h6>
                    You are more Smart to <span>Learn With Bravos</span>
                  </h6>
                  <p>
                    Student can easily learn any topics, any subject from their
                    favorite teacher. Student can access the prerecorded video
                    classes or live classes from the teacher and can be clear
                    about their doubts on any subjects. It will be easy for
                    student to learn 24*7 from anywhere with our E-learning
                    platforms. Student can enjoy the process of learning
                    whatever they want.
                  </p>
                </div>
              </Col>
              <Col md={6} lg={6}>
              <div className="video">
                  <div className="video__inner">
                    <img src={videoImg} alt="" />
                    <button
                      className="btn video_btn"
                      onClick={() => setbtnPopup(true)}
                    >
                      <i class="ri-play-circle-line"></i>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="user__bottom">
          <Container>
            <div className="sectionTitle sectionTitle-main">
              <h6>
                Your Personalized <span>Digital School</span>
              </h6>
              <p>Study smart with LeanWithBravos</p>
            </div>
            <div className="box__wrapper sectionMargin">
              <Row className=" justify-content-between">
                <Col md={6} lg={4} className="mb-3">
                  <img src={userImg2} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      Login With <span>EIAS </span> credentials
                    </h6>
                    <p className="text-start w-100">
                      Student can easily learn any topics, any subject from
                      their favorite teacher. Student can access the prerecorded
                      video classes or live classes from the teacher and can be
                      clear about their doubts on any subjects. It will be easy
                      for student to learn 24*7 from anywhere with our
                      E-learning platforms. Student can enjoy the process of
                      learning whatever they want.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="box__wrapper sectionMargin">
              <Row className=" flex-row-reverse  justify-content-between">
                <Col md={6} lg={4} className="mb-3">
                  <img src={intro2} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      Starts Learning On your <span>own Pace</span>
                    </h6>
                    <p className="text-start w-100">
                      Student can easily learn any topics, any subject from
                      their favorite teacher. Student can access the prerecorded
                      video classes or live classes from the teacher and can be
                      clear about their doubts on any subjects. It will be easy
                      for student to learn 24*7 from anywhere with our
                      E-learning platforms. Student can enjoy the process of
                      learning whatever they want.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="box__wrapper sectionMargin">
              <Row className="  justify-content-between">
                <Col md={6} lg={4} className="mb-3">
                  <img src={intro1} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      Get access to <span> Pre-recorded Classes</span>
                    </h6>
                    <p className="text-start w-100">
                      Our story begins with the COVID pandamic, with the dire
                      experience of the world. Since pandamic, learning has been
                      changed forever without having any alternative. The
                      teaching style in Nepal has stayed the same for decades.
                      LearnWithBravos is stepping up into the future of learning
                      in Nepal by giving full access to NEB courses free of
                      cost. Students can now access their own class courses
                      digitally from any location at any time. 
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="box__wrapper sectionMargin">
              <Row className=" flex-row-reverse  justify-content-between">
                <Col md={6} lg={4} className="mb-3">
                  <img src={intro2} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      Get access to own <span>class Teacher </span>
                    </h6>
                    <p className="text-start w-100">
                      Our vision at Bravos is to rectify and evolve the way of
                      teaching and learning that has been happening for decades.
                      We are able to create the overlying learning experience
                      for students and assist in their excellent outcome. We
                      have highly qualified and experienced teachers. We believe
                      that every student is different and has different learning
                      needs. We work interminably to solve students' problems
                      and help them learn better using advanced technology. Our
                      mission is to transform the old methodology of teaching
                      and learning into the modern system at a rapid pace and
                      provide world-class education in Nepal.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="box__wrapper sectionMargin">
              <Row className="  justify-content-between">
                <Col md={6} lg={4} className="mb-3">
                  <img src={intro1} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      Get All subjects Notes and solutions{" "}
                      <span> Notes & solutions</span>
                    </h6>
                    <p className="text-start w-100">
                      Our story begins with the COVID pandamic, with the dire
                      experience of the world. Since pandamic, learning has been
                      changed forever without having any alternative. The
                      teaching style in Nepal has stayed the same for decades.
                      LearnWithBravos is stepping up into the future of learning
                      in Nepal by giving full access to NEB courses free of
                      cost. Students can now access their own class courses
                      digitally from any location at any time. 
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="box__wrapper sectionMargin">
              <Row className=" flex-row-reverse  justify-content-between">
                <Col md={6} lg={4} className="mb-3">
                  <img src={userImg2} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      Got Doubts ? Clear from
                      <span> best teacher </span>
                    </h6>
                    <p className="text-start w-100">
                      Our vision at Bravos is to rectify and evolve the way of
                      teaching and learning that has been happening for decades.
                      We are able to create the overlying learning experience
                      for students and assist in their excellent outcome. We
                      have highly qualified and experienced teachers. We believe
                      that every student is different and has different learning
                      needs. We work interminably to solve students' problems
                      and help them learn better using advanced technology. Our
                      mission is to transform the old methodology of teaching
                      and learning into the modern system at a rapid pace and
                      provide world-class education in Nepal.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="user__bottom-banner">
            <Container>
              <div className="sectionTitle">
                <Row className="justify-content-center align-items-center">
                  <Col md={6} lg={6}>
                    <h6>Lean with Bravos today, on your own pace.</h6>

                    <NavLink
                      className="btn btn-play" 
                    >
                      Start Today <i class="ri-play-fill"></i>
                    </NavLink>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
            <Popup trigger={btnPopup} setTrigger={setbtnPopup}>
              <Container>
                <div className="popup-inner">
                  <Row className="justify-content-center">
                    <Col md={6}>
                      <button
                        className="close-btn"
                        onClick={() => setbtnPopup(false)}
                      >
                        <i class="ri-close-fill"></i>
                      </button>
                      {/* <iframe
                        width="100%"
                        height="400px"
                        src="https://www.youtube.com/embed/C-EHoNfkoDM"
                        title="FASTEST Way to Learn Web Development and ACTUALLY Get a Job"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe> */}

                      <section className="video ">
                        <div className="video__inner">
                          <video controls>
                            <source src={video} type="video/mp4" />
                          </video>
                        </div>
                      </section>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Popup>
        </section>
      </div>
    </>
  );
};

export default User;
