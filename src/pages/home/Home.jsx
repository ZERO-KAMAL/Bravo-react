import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import storyImg from "../../assets/images/story-img.svg";
import mission from "../../assets/images/mission.svg";
import value from "../../assets/images/value.svg";
import vision from "../../assets/images/vision.svg";
import ethics from "../../assets/images/ethics.svg";
import chat from "../../assets/images/chat.svg";
import mobile from "../../assets/images/mobile.svg";
import juno from "../../assets/images/juno.svg";
import ominbody from "../../assets/images/ominbody.svg";
import intro1 from "../../assets/images/intro1.jpg";
import smartImg1 from "../../assets/images/smartImg1.svg";
import smartImg2 from "../../assets/images/smartImg2.svg";
import video from "../../assets/video/video.mp4";
import videoImg from "../../assets/images/videoImg.jpg";
import Popup from "../../components/UI/pop-up/Popup";

import "./Home.scss";
import TestimonialSlider from "../../components/UI/testimonal/TestimonalSlider";

const Home = () => {
  const [btnPopup, setbtnPopup] = useState(false);
  const [open, setOpen] = useState();
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
      <section className="heroBanner">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={12} lg={6}>
              <div className="heroBanner__content">
                <h1>
                  Creating Future <br /> of Learning
                </h1>
                <h5>
                  Study any topic, anytime. Explore online NEB <br />
                  courses free of cost! 
                </h5>
                <NavLink className="btn btn-success" to="">
                  Explore Now <i class="ri-arrow-right-s-line me-3"></i>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="whyUs">
        <Container>
          <Row>
            <Col md={12} lg={4} sm={12}>
              <h2>
                Why Many People <strong>❤</strong> <span>Learnwithbravo</span>
              </h2>
            </Col>
            <Col md={12} lg={8} sm={12}>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiperItem  row g-0 d-flex">
                    <div className="item__img green col-md-4"></div>
                    <div className="item__content col-md-8">
                      <h4>Are you a Student?</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fringilla pellentesque libero orci.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiperItem  row g-0 d-flex">
                    <div className="item__img blue col-md-4"></div>
                    <div className="item__content col-md-8">
                      <h4>Are you a Student?</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fringilla pellentesque libero orci.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiperItem  row g-0 d-flex">
                    <div className="item__img green col-md-4"></div>
                    <div className="item__content col-md-8">
                      <h4>Are you a Student?</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fringilla pellentesque libero orci.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ourStory">
        {/* <div className="sectionTitle">
          <Container>
            <h6>Our Story</h6>
          </Container>
        </div> */}
        <Container>
          <Row className="justify-content-center">
            {/* <Col md={9} lg={9}>
              <div className="ourStory__desc">
                <img src={storyImg} alt="" />
                <div className="desc__content">
                  <p>
                    Learn with Bravos is a Nepali E-Learning Platform started
                    form 2022 that aims to provides the online education to
                    student digitally in both Nepali & English Languages.
                    Teaching style in Nepal has stayed same for decades and it
                    needs to be changed. Our vision at Bravos is to rectify and
                    evolve the way of teaching and learning that have been
                    happening for decades. We are able to create the overlying
                    learning experience for students and assist in their
                    excellent outcome. We have highly qualified and experienced
                    teachers. We believe that every students are different and
                    has different learning needs. We work interminably to solve
                    student’s problem and help them learn better using advance
                    technology. Our mission is to transform the old methodology
                    of teaching and learning to the modern system at a rapid
                    pace and provide world-class education in Nepal. Read More
                  </p>
                </div>
              </div>
            </Col> */}
            <Col md={12} lg={12}>
              <div className="ourStory__card sectionPadding">
                <div className="sectionTitle">
                  <h6>
                    <span>We Think </span> of Your Future
                  </h6>
                  <p>
                    learnwithbravos make your easy access to all NEB K10 courses
                    without any cost. you can simply login and get access to
                    courses from anywhere with simple process.{" "}
                  </p>
                </div>

                <Row>
                  <Col md={3} lg={3} sm={6} className="mt-3">
                    <div className="card__box green">
                      <img src={mission} alt="" />
                      <h6>Login</h6>
                      <p>
                        You can simply Login with EIAS credentials to get full
                        access.
                      </p>
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} className="mt-3">
                    <div className="card__box red">
                      <img src={vision} alt="" />
                      <h6>Explore NEB Courses </h6>
                      <p>
                        Explore all the NEB courses fron class one to class 10
                        with all subjects.
                      </p>
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} className="mt-3">
                    <div className="card__box grey">
                      <img src={ethics} alt="" />
                      <h6>Learn Free of Cost </h6>
                      <p>
                        Get Free access of all the courses you can simple
                        withour any investment.
                      </p>
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} className="mt-3">
                    <div className="card__box blue">
                      <img src={value} alt="" />
                      <h6>AQ solutions</h6>
                      <p>
                        Clear your doubts from our experts teachers, ask
                        questions and get answer instantly
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="videoBbanner sectionPadding">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={5} lg={5} sm={12}>
              <div className="sectionTitle text-start user__top-left">
                <h6>
                  The Nepal’s Best Online <br />{" "}
                  <span>Learning is at your fingertips!</span>
                </h6>
                <p>
                  Our story begins with the COVID pandamic, with the dire
                  experience of the world. Since pandamic, learning has been
                  changed forever without having any alternative. The teaching
                  style in Nepal has stayed the same for decades.
                  LearnWithBravos is stepping up into the future of learning in
                  Nepal by giving full access to NEB courses free of cost.
                  Students can now access their own class courses digitally from
                  any location at any time. 
                </p>
              </div>
            </Col>
            <Col md={6} lg={6} sm={12}>
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
            <NavLink className="btn btn-play mt-5">
              Start Today <i class="ri-play-fill"></i>
            </NavLink>
          </Row>
        </Container>
      </section>

      <section className="whyLearn sectionPadding">
        <div className="sectionTitle">
          <Container>
            <h6>
              Why Learn with <span>Bravos ?</span>
            </h6>
            <p>
              A software application that allows students to connect with their
              class teacher digitally via
            </p>
          </Container>
        </div>

        <Container>
          <Row>
            <Col md={4} lg={4} sm={6} className="mt-3">
              <div className="card">
                <div className="card__box">
                  <img src={chat} alt="" />
                  <h6>Chat</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6} className="mt-3">
              <div className="card">
                <div className="card__box">
                  <img src={chat} alt="" />
                  <h6>Chat</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6} className="mt-3">
              <div className="card">
                <div className="card__box">
                  <img src={chat} alt="" />
                  <h6>Chat</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6} className="mt-3">
              <div className="card">
                <div className="card__box">
                  <img src={chat} alt="" />
                  <h6>Chat</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6} className="mt-3">
              <div className="card">
                <div className="card__box">
                  <img src={chat} alt="" />
                  <h6>Chat</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6} className="mt-3">
              <div className="card">
                <div className="card__box">
                  <img src={chat} alt="" />
                  <h6>Chat</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ourFeatures sectionPadding">
        <div className="sectionTitle">
          <Container>
            <h6>
              Our <span>Features</span>
            </h6>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab
            </p>
          </Container>
        </div>
        <Container>
          <Row className="g-0">
            <Col lg={5} md={6} sm={6}>
              <ul className="ourFeatures__left d-flex align-items-center flex-column">
                <li>
                  <div className="items row g-0 d-flex">
                    <div className="item__content col-md-8">
                      <h4>E-Learning</h4>
                      <p>
                        We provides the user friendly E-learning platforms to
                        the student,so they can learn without any complication.
                      </p>
                    </div>
                    <div className="item__img col-md-4"></div>
                  </div>
                </li>
                <li>
                  <div className="items row g-0 d-flex">
                    <div className="item__content col-md-8">
                      <h4>Pre-recorded Classes</h4>
                      <p>
                        Student can easily learn from pre-recorded classes, who
                        were unable to attend physical classes or unable to
                        understand the topic can learn from anywhere at any
                        time.
                      </p>
                    </div>
                    <div className="item__img col-md-4"></div>
                  </div>
                </li>
                <li>
                  <div className="items row g-0 d-flex">
                    <div className="item__content col-md-8">
                      <h4>Access to own class teacher</h4>
                      <p>
                        Any student can connect personally with a teacher and
                        can ask questions and establish a personal learning
                        environment digitally.
                      </p>
                    </div>
                    <div className="item__img col-md-4"></div>
                  </div>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={6} sm={6} className="mobile__img">
              <img src={mobile} alt="" />
            </Col>
            <Col lg={5} md={6} sm={6}>
              <ul className="ourFeatures__right d-flex align-items-center flex-column">
                <li>
                  <div className="items row g-0 d-flex">
                    <div className="item__content col-md-8">
                      <h4>School’s Live Classes</h4>
                      <p>
                        LMS provide rich platforms for teacher to host live
                        classes from anywhere and student can join through the
                        provided link.
                      </p>
                    </div>
                    <div className="item__img col-md-4"></div>
                  </div>
                </li>
                <li>
                  <div className="items row g-0 d-flex">
                    <div className="item__content col-md-8">
                      <h4>Notes and solutions</h4>
                      <p>
                        Get all materials such as notes & solution, all students
                        can access to their own teachers notes & solution of any
                        subject and they can download too.
                      </p>
                    </div>
                    <div className="item__img col-md-4"></div>
                  </div>
                </li>
                <li>
                  <div className="items row g-0 d-flex">
                    <div className="item__content col-md-8">
                      <h4>Digital doubts solving</h4>
                      <p>
                        Slove your doutbs from your best teacher, you can ask
                        the question easily and can get an answer from the same
                        teacher until the you get clear about the doubts.
                      </p>
                    </div>
                    <div className="item__img col-md-4"></div>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ourIntro">
        <Container>
          <Row className="align-items-center sectionPadding  g-lg-5 g-md-5">
            <Col md={7} lg={7} sm={12}>
              <div className="sectionTitle text-start">
                <h6>
                  Our <span> Smart</span> Teacher
                </h6>
                <p className="text-start w-100">
                  With the help of Learn with Bravos teachers can easily create
                  videos without any investment and post on LMS. This helps
                  teachers to teach from anywhere and make clear about the
                  topics to the student. Not every student would be comfortable
                  raising queries or answering questions in class. An LMS is a
                  perfect platform for a teacher to make clear about the doubts
                  to students. Teachers can improve teaching with modern
                  technology with our feature that is rich learning platform
                  that saves your time and provides more active learning
                  experiences for your students.
                </p>
                <NavLink to="" className="links mt-3 d-flex align-items-center">
                  Learn More <i class="ri-arrow-right-s-line me-3"></i>
                </NavLink>
              </div>
            </Col>
            <Col md={5} lg={5} sm={12}>
              <img src={smartImg1} alt="" className="ourIntro__img" />
            </Col>
          </Row>
          <Row className=" sectionPadding flex-row-reverse align-items-center g-lg-5 g-md-5">
            <Col md={7} lg={7} sm={12}>
              <div className="sectionTitle text-start">
                <h6>
                  Our <span>Smart</span> Student
                </h6>
                <p className="text-start w-100">
                  Student can easily learn any topics, any subject from their
                  favorite teacher. Student can access the prerecorded video
                  classes or live classes from the teacher and can be clear
                  about their doubts on any subjects. It will be easy for
                  student to learn 24*7 from anywhere with our E-learning
                  platforms. Student can enjoy the process of learning whatever
                  they want.
                </p>
                <NavLink to="" className="links mt-3 d-flex align-items-center">
                  Learn More <i class="ri-arrow-right-s-line me-3"></i>
                </NavLink>
              </div>
            </Col>
            <Col md={5} lg={5} sm={12}>
              <img src={smartImg2} alt="" className="ourIntro__img" />
            </Col>
          </Row>
        </Container>
      </section>

      <TestimonialSlider />

      <section className="client sectionPadding">
        <Container>
          <Row>
            <Col>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centerInsufficientSlides
                autoplay={1500}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                className="ClientSwiper"
              >
                <SwiperSlide>
                  <div className="item">
                    <div className="item__img">
                      <img src={juno} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="item__img">
                      <img src={ominbody} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="item__img">
                      <img src={ominbody} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="item__img">
                      <img src={juno} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="item__img">
                      <img src={ominbody} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="item__img">
                      <img src={ominbody} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="faq sectionPadding">
        <div className="sectionTitle">
          <h6>Frequently Asked Question</h6>
        </div>
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    What car can I get for USD1,500 and below?
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <strong>
                      This is the first item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">
                    Do you sell auto parts?
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <strong>
                      This is the second item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">
                    Do you list the manufactured year of your vehicles?
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <strong>
                      This is the third item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="4">
                    What car can I get for USD1,500 and below?
                  </AccordionHeader>
                  <AccordionBody accordionId="4">
                    <strong>
                      This is the third item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="5">
                    Do you sell auto parts?
                  </AccordionHeader>
                  <AccordionBody accordionId="5">
                    <strong>
                      This is the third item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </Col>
            <Col md={6}>
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="6">
                    What car can I get for USD1,500 and below?
                  </AccordionHeader>
                  <AccordionBody accordionId="6">
                    <strong>
                      This is the first item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="7">
                    Do you sell auto parts?
                  </AccordionHeader>
                  <AccordionBody accordionId="7">
                    <strong>
                      This is the second item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="8">
                    Do you list the manufactured year of your vehicles?
                  </AccordionHeader>
                  <AccordionBody accordionId="8">
                    <strong>
                      This is the third item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="9">
                    What car can I get for USD1,500 and below?
                  </AccordionHeader>
                  <AccordionBody accordionId="9">
                    <strong>
                      This is the third item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="10">
                    Do you sell auto parts?
                  </AccordionHeader>
                  <AccordionBody accordionId="10">
                    <strong>
                      This is the third item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>
        </Container>
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
    </>
  );
};

export default Home;
