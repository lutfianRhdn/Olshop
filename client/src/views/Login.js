import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import InputLabel from "../containers/InputLabel";
import Button from "../containers/Button";
import { Link } from "react-router-dom";
import { LoginAction } from "../redux/actions/AuthAction";
import useLocalStorage from "../config/useLocalStorage";
import FlashMessage from "../containers/FlashMessage";

export const Login = (props) => {
  const email = useRef();
  const password = useRef();
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [user, setUser] = useLocalStorage("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    props
      .login({
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        setUser(res);
        console.log(user);
        props.history.push("/");
      })
      .catch((err) => {
        setMessage(err.message);
        console.log(err.errors);
        if (err.errors !== undefined) {
          setErrors(err.errors);
        }
      });
  };
  return (
    <div style={{ backgroundColor: "#EDF2EF" }}>
      <div className="container mx-auto py-20 px-20 ">
        <div
          className="bg-white shadow-lg flex justify-center items-center"
          style={{ height: "80vh" }}
        >
          <img
            src="https://cdn.maubelajarapa.com/wp-content/uploads/2021/03/03114920/happy-people-shopping-online_74855-5865.jpg"
            alt=""
            className="w-1/2"
          />
          <div className="w-1/2 bg-gray-200 h-full flex flex-col py-20 items-center">
            <h1 className="text-5xl font-thin">
              {" "}
              <span className="font-bold"> LOG</span>IN
            </h1>
            <form className="my-auto w-full" onSubmit={handleSubmit}>
              <FlashMessage message={message} type="error" />
              <InputLabel
                ref={email}
                className="my-5"
                label="Email"
                error={errors.email}
              />
              <InputLabel
                ref={password}
                className="my-5"
                label="Password"
                type="password"
                error={errors.password}
              />
              <div className="flex w-full justify-end pr-10 items center">
                <Link to="/register" className="italic mx-2 text-blue-400">
                  I don't have Account
                </Link>
                <Button className="" type="submit" title="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(LoginAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
