import React, { useRef, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import { Container } from "reactstrap";

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const closeMenu = () => menuRef.current.classList.toggle("hide__menu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between ">
          <div className="logo">
            <img src={logo} alt="logo" className="logo" />
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center justify-content-center gap-5">
              <div className="mobile__menu" onClick={closeMenu}>
                <i class="ri-close-fill"></i>
              </div>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/feature">features</NavLink>

              <div class="dropdown">
                <NavLink class="dropbtn">
                  User
                  {/* <span>
                    <i className="ri-arrow-down-s-line"></i>
                  </span> */}
                </NavLink>
                <div class="dropdown-content">
                  <NavLink to="/student">Student</NavLink>
                  <NavLink to="/teacher">Teacher</NavLink>
                </div>
              </div>
              <NavLink to="/contact">Contact</NavLink>

              <div className="button__links d-flex flex-column flex-md-row flex-lg-row align-items-center justify-content-center">
                <NavLink to="" className="btn btn-primary">
                  Student Login
                </NavLink>
                <NavLink
                  to=""
                  className="btn btn-primary mt-3 mt-md-0 mt-lg-0  ms-md-3 ms-lg-3"
                >
                  Teacher Login
                </NavLink>
              </div>
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
