import React, { Component } from "react";
import { toast } from "react-toastify";

export default class FormRegister extends Component {
  state = {
    data: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.data.length === 0) {
      toast.error("vui lòng nhập thông tin!");
      return;
    }

    localStorage.setItem("data", this.state.data);
    toast.success("Gửi thông tin thành công.");
  };

  handleChange = (e) => {
    this.setState({ data: e.target.value });
  };

  render() {
    return (
      <div id="form-section">
        <div className="bg-form">
          <div className="container form-group">
            <h4>ĐĂNG KÝ NHẬN TIN</h4>
            <h1>NHẬN TIN MIỄN PHÍ</h1>
            <form>
              <input
                type="text"
                id="form-register"
                placeholder="Nhập email"
                onChange={(e) => this.handleChange(e)}
              />
              <button className="btn" onClick={(e) => this.handleSubmit(e)}>
                GỬI NGAY
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
