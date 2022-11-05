import React, { useState } from "react";
import CommonSection from "../../components/UI/common-section/CommonSection";
import Popup from "../../components/UI/pop-up/Popup";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import userImg1 from "../../assets/images/userImg1.svg";
import userImg2 from "../../assets/images/userImg2.svg";
import userImg3 from "../../assets/images/userImg3.svg";
import userImg4 from "../../assets/images/userImg4.svg";
import videoImg from "../../assets/images/videoImg.jpg";
import video from "../../assets/video/video.mp4";

const Teacher = () => {
  const [btnPopup, setbtnPopup] = useState(false);

  return (
    <>
      <CommonSection title="Teacher" />
      <div className="user__container">
        <section className="user__top sectionPadding">
          <Container>
            <div className="sectionTitle">
              <h6>
                Being the Smart Teacher with <span> LearnWithBravos</span>
              </h6>
            </div>
            <Row className="align-items-center justify-content-center">
              {/* <Col md={6} lg={6}>
                <div className="sectionTitle text-start user__top-left">
                  <h6>
                    With Bravos <span>Anywhere, Anytime</span>
                  </h6>
                  <p>
                    You’re the real deal, be sure you look it. Fresh Food makes
                    creating professional
                  </p>
                </div>
              </Col> */}
              <Col md={8} lg={8}>
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
                Your Smart Teaching to bridge
                <span>the gap in 21st century</span>
              </h6>
              <p>Bridge the teaching gap with LeanWithBravos</p>
            </div>
            <div className="box__wrapper sectionMargin">
              <Row className="  justify-content-between">
                <Col md={6} lg={4} className="mb-3">
                  <img src={userImg1} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      <span>Login With EIAS </span> Teacher credentials
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
                  <img src={userImg2} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      <span>Starts Teaching On</span> your own Pace
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
                  <img src={userImg3} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      <span>Create Your </span> Own Classroom
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
                  <img src={userImg4} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      <span>Solve the student’s</span> doubts easily
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
                  <img src={userImg1} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      Share Notes<span> and solutions </span>
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
                  <img src={userImg3} alt="" className="aboutImg" />
                </Col>
                <Col md={6} lg={6} className="mb-3">
                  <div className="sectionTitle text-start">
                    <h6>
                      Reports & <span> Reports & Statistics​​</span>
                    </h6>
                    <p className="text-start w-100">
                      Teachers can identify learning gaps of their students
                      using our Mastery Reports, which aids them to intervene
                      and help the student.
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
                    <h6>Make your student's of you with Bravos!</h6>

                    <NavLink className="btn btn-play">
                      Start Today <i class="ri-play-fill"></i>
                    </NavLink>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>
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
      </div>
    </>
  );
};

export default Teacher;
