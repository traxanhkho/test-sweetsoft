import React, { Component } from "react";

class MenuChild extends Component {
  render() {
    return (
      <ul className="navbar-menu_child">
        <li>
          <a href="#">Phòng Hướng Biển</a>
        </li>
        <li>
          <a href="#">Phòng Hướng Núi</a>
        </li>
        <li>
          <a href="#">Phòng Hướng Thành Phố</a>
        </li>
      </ul>
    );
  }
}

export default MenuChild;
