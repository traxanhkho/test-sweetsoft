import React, { Component } from "react";
import MenuChild from "./MenuChild";
import qr from "../../images/logo/qr-code.png";

class NavbarMenu extends Component {
  render() {
    if (this.props.qr) {
      return (
        <ul className="navbar-menu_qr">
          <img src={qr} alt="" />
        </ul>
      );
    }

    return (
      <ul className="navbar-menu">
        <li>
          <a href="#">Supperior</a>
          <MenuChild />
        </li>
        <li>
          <a href="#">Deluxe</a>
          <MenuChild />
        </li>
        <li>
          <a href="#">Senior Deluxe</a>
          <MenuChild />
        </li>
        <li>
          <a href="#">President</a>
        </li>
      </ul>
    );
  }
}

export default NavbarMenu;
