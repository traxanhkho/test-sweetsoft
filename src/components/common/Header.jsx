import React, { Component } from "react";
import logo from "../../images/logo/header.png";
import vi from "../../images/language/vi.jpg";
import kor from "../../images/language/kor.jpg";
import ru from "../../images/language/ru.jpg";
import cn from "../../images/language/cn.jpg";
import NavbarMenu from "./NavbarMenu";
import "../../css/home.scss";

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container header-section">
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <input type="checkbox" id="toggler" ref={this.toggler} />
          <div className="navbar">
            <ul>
              <li>
                <a href="#">TRANG CHỦ</a>
              </li>
              <li>
                <a href="#">
                  PHÒNG <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <NavbarMenu />
              </li>
              <li>
                <a href="#">KHUYẾN MÃI</a>
              </li>
              <li>
                <a href="#">
                  DỊCH VỤ{" "}
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <NavbarMenu />
              </li>
              <li>
                <a href="#">HÌNH ẢNH</a>
              </li>
              <li>
                <a href="#">TIN TỨC</a>
              </li>
              <li>
                <a href="#">ĐIỂM ĐẾN</a>
              </li>
              <li>
                <a href="#">
                  LIÊN HỆ{" "}
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <NavbarMenu qr={true} />
              </li>
            </ul>
          </div>
          <div className="language">
            <button>
              <img src={vi} alt="lang-img" />
              <i className="fa fa-chevron-down"></i>
            </button>
            <ul>
              <li>
                <img src={vi} alt="lang-img" />
              </li>
              <li>
                <img src={kor} alt="lang-img" />
              </li>
              <li>
                <img src={ru} alt="lang-img" />
              </li>
              <li>
                <img src={cn} alt="lang-img" />
              </li>
            </ul>
          </div>
          <label htmlFor="toggler" className="fa fa-bars"></label>
        </div>
      </header>
    );
  }
}
