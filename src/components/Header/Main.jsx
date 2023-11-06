import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
// import MenuImg from "../../assets/images/right_menu_table.png";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiOutlineWhatsApp, AiOutlineCloseCircle } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillPinMapFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
function Main() {
  const [active, setActive] = useState();
  const [Nav, setNav] = useState(false);
  const [Home, setHome] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    closeMenu();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {active && (
        <div
          className="menu-backdrop"
          style={{ opacity: "1", visibility: "visible" }}
        ></div>
      )}
      <header className={`fixed ${menuOpen ? "menu-open" : ""}`}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="image" width={190} />
            </Link>
            <button
              className={`navbar-toggler ${menuOpen ? "open" : ""}`}
              type="button"
              onClick={toggleMenu}
            >
              <span
                className="navbar-toggler-icon"
                onClick={() => setHome(Home === true ? false : true)}
              >
                <span className={`toggle-wrap ${menuOpen ? "active" : ""}`}>
                  <span className="toggle-bar"></span>
                </span>
              </span>
            </button>
            <div
              className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item has_dropdown">
                  <Link
                    className="nav-link"
                    to="/"
                    // to="#"
                    onClick={handleMenuItemClick}
                  >
                    Home
                  </Link>
                  {/* <span className="drp_btn">
                    <i className="icofont-rounded-down" />
                  </span> */}
                  {/* <div className={`sub_menu ${isDropdownOpen ? "open" : ""}`}>
                    <ul style={{ display: "block" }}>
                      <li>
                        <Link to="/">Home Defoult</Link>
                      </li>
                      <li>
                        <Link to="/home2">Home Slider Hero</Link>
                      </li>
                      <li>
                        <Link to="/home3">Home Dish List</Link>
                      </li>
                    </ul>
                  </div> */}
                </li>
                {/* <li className="nav-item has_dropdown">
                  <Link
                    className="nav-link"
                    to="#"
                    onClick={handleMenuItemClick}
                  >
                    MENU
                  </Link>
                  <span className="drp_btn">
                    <i className="icofont-rounded-down" />
                  </span>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <Link to="/menulist1">Menu List 1</Link>
                      </li>
                      <li>
                        <Link to="/menulist2">Menu List 2</Link>
                      </li>
                      <li>
                        <Link to="/menulist3">Menu List 3</Link>
                      </li>
                    </ul>
                  </div>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    onClick={handleMenuItemClick}
                  >
                    ABOUT US
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/ouractivities"
                    onClick={handleMenuItemClick}
                  >
                    OUR Activites
                  </Link>
                </li> */}
                <li className="nav-item has_dropdown">
                  <Link
                    className="nav-link"
                    to="#"
                    onClick={handleMenuItemClick}
                  >
                    Pages
                  </Link>
                  <span className="drp_btn">
                    {/* <i className="icofont-rounded-down" /> */}
                    <AiOutlineArrowDown />
                  </span>
                  <div className="sub_menu">
                    <ul>
                      {/* <li>
                        <Link to="/bloglist">Blog List </Link>
                      </li> */}
                      {/* <li>
                        <Link to="/blogdetail">Blog Details</Link>
                      </li> */}
                      {/* <li>
                        <Link to="/reservation1">reservation</Link>
                      </li> */}
                      {/* <li>
                        <Link to="/reservation2">reservation 2</Link>
                      </li> */}
                      {/* <li>
                        <Link to="/review">reviews</Link>
                      </li> */}
                      <li>
                        <Link to="/gallery">gallery</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact"
                    onClick={handleMenuItemClick}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item contact_number">
                  <Link className="nav-link" to="tel:+18001234578">
                    <span>book a trip :</span> +4 0765 569 064
                  </Link>
                </li>
                <li className="d-lg-none">
                  <Link
                    // to="/reservation1"
                    to="/contact"
                    className="btn btn_primary"
                    onClick={handleMenuItemClick}
                  >
                    FIND A TRIP
                  </Link>
                </li>
              </ul>
            </div>

            <div className="action_bar">
              <Link
                to="/contact"
                className="btn btn_primary"
                onClick={handleMenuItemClick}
              >
                FIND A TRIP
              </Link>
              <div className="bar" onClick={() => setNav(true)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {Nav && (
        <div className={`right_sidemenu ${Nav && "active"}`}>
          <span className="close_rightmenu" onClick={() => setNav(false)}>
            {/* <i className="icofont-close-circled" /> */}
            <AiOutlineCloseCircle />
          </span>
          <div className="menu_inner_content">
            <Link to="#" className="side_logo">
              <img src={logo} alt="image" width={300} />
            </Link>
            <ul className="contact_listing">
              <li>
                <p className="sub_title">Call us</p>
                <div className="cnt_block">
                  <Link to="tel:+11234567890">+4 0765 569 064</Link>
                  <span>
                    {/* <i className="icofont-ui-call" /> */}
                    <BiPhoneCall />
                  </span>
                </div>
                <div className="cnt_block">
                  <Link to="tel:+10987654321"> +4 0765 569 064</Link>
                  <span>
                    {/* <i className="icofont-whatsapp" /> */}
                    <AiOutlineWhatsApp />
                  </span>
                </div>
              </li>
              <li>
                <p className="sub_title">Email us</p>
                <div className="cnt_block">
                  <Link to="mailto:"> popa.bogdan33@yahoo.ro </Link>
                  <span>
                    {/* <i className="icofont-envelope-open" /> */}
                    <SlEnvolopeLetter />
                  </span>
                </div>
              </li>
              <li>
                <p className="sub_title">Find us</p>
                <div className="cnt_block">
                  <p>Sinca Bucium St, Brasov City, 507201, Romania</p>
                  <span>
                    {/* <i className="icofont-location-pin" /> */}
                    <BsFillPinMapFill />
                  </span>
                </div>
              </li>
            </ul>
            <Link to="#" className="btn btn_primary">
              book a trip
            </Link>
            <figure className="tab_img">
              {/* <img src={MenuImg} alt="img" /> */}
            </figure>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
