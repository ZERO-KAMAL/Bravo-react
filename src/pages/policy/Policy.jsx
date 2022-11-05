import React from "react";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "./Policy.scss";

const policy = () => {
  return (
    <>
      <CommonSection title="Privacy Policy" />
      <div className="wrapper">
        <div class="generic__inner__part sectionPadding">
          <Container>
            {/* <div className="sectionTitle">
              <h6>
                <span>Our Humble</span> Beginning!
              </h6>
            </div> */}
            <Row className="justify-content-center">
              <Col md={10} lg={10}>
                <div class="inner__description__part">
                  <div>
                    <p>
                      <strong>What are cookies?</strong>A cookie is a small file
                      that can be placed on your device that allows us to
                      recognize and remember you. It is sent to your browser and
                      stored on your computer’s hard drive or tablet or mobile
                      device. When you visit our sites, we may collect
                      information from you automatically through cookies and
                      other tracking technologies.
                    </p>

                    <p>
                      <strong>What are web beacons?</strong>
                      Web Beacon is a transparent graphic image placed on
                      websites/e-mails to monitor user activity. Web beacons are
                      similar to cookies and are often used in combination with
                      cookies.
                    </p>

                    <p>
                      <strong>What do we use cookies for?</strong>
                      Like most providers of online services, we use cookies to
                      provide, secure and improve our services, including by
                      remembering your preferences, recognizing you when you
                      visit our website and personalizing and tailoring ads to
                      your interests. To accomplish these purposes, we also may
                      link information from cookies with other personal
                      information we hold about you.
                    </p>

                    <p>
                      <strong>What are the different types of cookies?</strong>
                      <strong>First-party cookies </strong>
                      First-party cookies are placed on your device directly by
                      us. For example, we use first-party cookies to adapt our
                      website to your browser’s language preferences and to
                      better understand your use of our website.
                      <strong>Third-party cookies</strong>
                      Third-party cookies are placed on your device by our
                      partners and service providers. For example, we use
                      third-party cookies to measure user numbers on our website
                      or to enable you to share content with others across
                      social media platforms.
                      <strong>Session cookies </strong>
                      Session cookies are used for a variety of reasons,
                      including to learn more about your use of our website
                      during one single browser session and to help you to use
                      our website more efficiently. Session cookies last only
                      until you close your browser.
                      <strong>Persistent cookies</strong>
                      Persistent cookies are primarily used to help you quickly
                      sign-in to our website again and for analytical purposes.
                      Persistent cookies have a longer lifespan and aren't
                      automatically deleted when you close your browser.
                      <strong>
                        Based on functionality, cookies can be classified as
                        below:
                      </strong>
                    </p>

                    <div class="table-responsive">
                      <table class="table table-bordered table-header-custom">
                        <thead>
                          <tr>
                            <th>Functionality</th>
                            <th>Description</th>
                            <th>Name of cookie</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Necessary cookies</td>
                            <td>
                              These cookies are strictly necessary to provide
                              you with services available through our website
                              and to use some of its features, such as access to
                              secure areas.
                            </td>
                            <td>ncell_website</td>
                          </tr>
                          <tr>
                            <td>Analytics cookies</td>
                            <td>
                              These cookies help us understand how our website
                              is being used, how effective marketing campaigns
                              are, and help us customize and improve our
                              websites for you.
                            </td>
                            <td>_ga</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      By using our website, you consent to the use of these
                      cookies. If you do not wish to accept any cookies or
                      certain types of cookies/web beacons, you can change your
                      browser’s settings to delete cookies that have already
                      been set and to not accept new cookies.
                    </p>

                    <p>
                      <strong>Cookie preferences</strong>
                      Users can mostly control their cookie preferences by
                      managing the browser settings. For more information about
                      these controls and to exercise your cookie preferences,
                      visit your browser or device’s help material. Please
                      however note, that, if you delete cookies or do not accept
                      them, you might not be able to use all of the features we
                      offer, you may not be able to store your preferences, and
                      some of our pages might not get displayed properly.
                    </p>

                    <p>
                      <strong>Changes to this cookie policy</strong>
                      We may periodically update this policy to comply with
                      privacy regulations, describe new website features, or to
                      add and/or remove cookies that we use.
                    </p>

                    <p>
                      <strong>Other information</strong>
                      For more information on how Ncell Axiata manages your
                      personal data received through the website, please read
                      Ncell Axiata’s privacy notice at:{" "}
                      <a
                        class="color"
                        href="https://webapi.ncell.axiata.com/upload/Form/Ncell_Axiata_Privacy_Notice_for_Customers.pdf"
                      >
                        Privacy notice for Customers
                      </a>
                    </p>

                    <p>
                      <strong>How to contact us</strong>
                      If you have any questions or concerns about this policy or
                      its implementation, please contact us at{" "}
                      <a
                        class="color"
                        href="mailto: data.privacy@ncell.axiata.com"
                      >
                        data.privacy@ncell.axiata.com
                      </a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default policy;
