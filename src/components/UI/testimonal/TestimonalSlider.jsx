import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Testimonial.scss";

const TestimonialSlider = () => {
  return (
    <section className="testimonial sectionPadding">
      <div className="sectionTitle">
        <h6>What our <span>students</span> have to say about us</h6>
        <p>
          We are being introduced by our student. See how our student say about
          us.
        </p>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={7}>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={1500}
              pagination={true}
              modules={[Navigation]}
              centeredSlides={true}
              navigation={true}
              className="testimonialSwiper"
            >
              <SwiperSlide>
                <div className="item ">
                  <div className="item__box ">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt=""
                      className="item-img"
                    />
                    <p className="item-desc">
                      <i class="ri-double-quotes-l"></i>
                      This is the best e learning platform in Nepal for student.
                      The best thing about this platform is that we can makes
                      our doubts clear asking unlimited time to teacher.
                    </p>
                    <h6 className="item-title">Student Name</h6>

                    <div className="item-rating">
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-half-line"></i>
                      <i class="ri-star-half-line"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSlider;
