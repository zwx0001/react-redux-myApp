import React, { Component } from "react";
import Head from "components/Head/Head";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  handleClick() {
    let username = this.refs.username.value;
    let pwd = this.refs.pwd.value;
    axios
      .get("/api/login", {
        params: {
          username,
          pwd
        }
      })
      .then(res => {
        if (res.data.code === 1) {
          const { getToken } = this.props;
          alert("登录成功");
          getToken(res.data.token);
          this.props.history.push("/home");
        } else if (res.data.code === 2) {
          alert("登录失败");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="wrap">
        <Head tit={"登录页面"} />
        <div className="box">
          <div>
            <p>用户名:</p>
            <input type="text" ref="username" />
          </div>
          <div>
            <p>密码:</p>
            <input type="password" ref="pwd" />
          </div>
          <button onClick={this.handleClick.bind(this)}>登录</button>
        </div>
        <p>
          <Link to="/register">新用户注册</Link>
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state.limit;
};
const mapDispatchToProps = dispatch => {
  return {
    getToken(newToken) {
      dispatch({ type: "TOKEN", payload: newToken });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
