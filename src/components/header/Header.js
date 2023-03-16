import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "./header.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [mobileHeaderState, setMobileHeaderState] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileHeaderState(false);
  }, [location]);
  return (
    <>
      <header
        className={classNames("", {
          // 'is-fixed': headerType === 'fixed'
        })}
      >
        <div
          className={classNames("header-btn", {
            "is-show": mobileHeaderState,
          })}
          onClick={() => setMobileHeaderState(!mobileHeaderState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={classNames("", {
            "is-show": mobileHeaderState,
          })}
        >
          <li>
            <Link to="/taro">메인</Link>
          </li>
          <li>
            <Link to="/taro/one">원 오라클</Link>
          </li>
          <li>
            <Link to="/taro/three">쓰리 카드</Link>
          </li>
          <li className="disabled">
            <Link to="/alternatively">양자택일</Link>
          </li>
          <li className="disabled">
            <Link to="/hexagram">헥사그램</Link>
          </li>
          <li className="disabled">
            <Link to="/celtic-cross">켈틱 크로스</Link>
          </li>
          <li className="disabled">
            <Link to="/horseshoe">호스슈</Link>
          </li>
          <li className="disabled">
            <Link to="/three">호로스코프</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
