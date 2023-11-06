import React from "react";
import { Link } from "react-router-dom";
import Ctn01 from "../../assets/images/bogdanenduro.png";
import Ctn02 from "../../assets/images/bogdanwithoutbg.png";
import Ctn03 from "../../assets/images/Motocross-Motorcycle.png";
import Ctn04 from "../../assets/images/bogdan5.png";

function ContactUS() {
  return (
    <>
      <section className="contact_us_section">
        <div className="right_shape position-absolute">
          <img src={Ctn01} alt="img" />
        </div>
        <div className="left_shape position-absolute">
          <img src={Ctn02} alt="img" />
        </div>
        <div className="container">
          <div className="section_title text-center">
            <span
              className="icon"
              data-aos="fade-down"
              data-aos-duration={1500}
            >
              <img src={Ctn03} alt="img" height={300} width={300} />
            </span>
            <span
              className="sub_text mb-1"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              Contact us
            </span>
            <h2 data-aos="fade-up" data-aos-duration={1500}>
              Get in touch with us
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                <img className="radius_img" src={Ctn04} alt="img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact_box">
                <ul
                  className="contact_listing"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <li>
                    <p className="sub_title">Call us</p>
                    <div className="cnt_block">
                      <Link to="tel:+40765569064">+40 765 569 064</Link>
                      <span>
                        <i className="icofont-ui-call" />
                      </span>
                    </div>
                    <div className="cnt_block">
                      <Link to="tel:+40765569064">+40 765 569 064</Link>
                      <span>
                        <i className="icofont-whatsapp" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <p className="sub_title">Email us</p>
                    <div className="cnt_block">
                      <Link to="mailto:"> popa.bogdan33@yahoo.ro </Link>
                      <span>
                        <i className="icofont-envelope-open" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <p className="sub_title">Find us</p>
                    <div className="cnt_block">
                      <p>Bucium sat, sinca Brasov City, Romania </p>
                      <span>
                        <i className="icofont-location-pin" />
                      </span>
                    </div>
                  </li>
                </ul>
                <form data-aos="fade-up" data-aos-duration={1500}>
                  <h3>Say hi, Don’t be shy!</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group text-right">
                    <button type="submit" className="btn btn_primary">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="map" data-aos="fade-up" data-aos-duration={1500}>
            <iframe
              title="pathfinderenduro"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35053.852249011376!2d25.058066025624562!3d45.74269653402108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sro!4v1699110981117!5m2!1sen!2sro"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUS;
