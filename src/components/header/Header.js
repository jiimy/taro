import React from "react";
import { Route, Link, Routes } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/one">원 오라클</Link>
        </li>
        <li>
          <Link to="/three">쓰리 카드</Link>
        </li>
        <li className="disabled">
          <Link to="/three">양자택일</Link>
        </li>
        <li className="disabled">
          <Link to="/three">헥사그램</Link>
        </li>
        <li className="disabled">
          <Link to="/three">호스슈</Link>
        </li>
        <li>
          <Link to="/three">호로스코프</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
