import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, login1, addTodo, increase } from "../redux/user";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log("cc: ", user);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "내 이름", email: "email@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
      <button
        onClick={() => {
          dispatch(login("email@gmail.com"));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(login1("1"));
        }}
      >
        Login2
      </button>
      <button
        onClick={() => {
          dispatch(increase({ name: "tt", age: 1 }));
        }}
      >
        addTodo
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
      {/*
      <p> Name : {user.name} </p>
      <p> Age : {user.age} </p>
      <p> Email : {user.email} </p>
     */}
    </div>
  );
};

export default Login;
