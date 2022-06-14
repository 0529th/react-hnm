import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Button, Offcanvas } from "react-bootstrap";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const checkLogin = () => {
    if (authenticate === false) {
      goToLogin();
    } else {
      setAuthenticate(false);
    }
  };

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      // 입력한 검색어를 읽어와서 url 바꿔줌
      let keyword = e.target.value;
      navigate(`?q=${keyword}`);
      handleClose();
    }
  };
  const goToProductAll = () => {
    navigate("/");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        <div className="onlyMobile" onClick={handleShow}>
          <div class="hamburger type1">
            <div class="menu_icon">
              <span class="border border1"></span>
              <span class="border border2"></span>
              <span class="border border3"></span>
            </div>
          </div>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className="search-form">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                  type="text"
                  placeholder="제품검색"
                  onKeyPress={(e) => search(e)}
                />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="menu-list-mobile">
              {menuList.map((menu) => (
                <li key={menu}>{menu}</li>
              ))}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      {/*  */}
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div className="login-link" onClick={checkLogin}>
            {authenticate === true ? "로그아웃" : "로그인"}
          </div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg"
          alt="logo"
          onClick={goToProductAll}
          className="navbar-logo"
        />
      </div>
      <div className="menu-area onlyDesktop">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-form-desktop">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="제품검색"
            onKeyPress={(e) => search(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
