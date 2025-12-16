import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { questionState, questionText } from "redux/question";
import SpreadResult from "util/SpreadResult";
import { init } from "../../redux/card";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  const [mobileHeaderState, setMobileHeaderState] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question.value);
  const [tag, setTag] = useState([]);
  // const questionState = useSelector((state) => state.questionState.value);

  // console.log("g헤더 : ", SpreadResult(question?.question).length === 3);

  const refreshBtn = () => {
    // console.log(";cc;,", Object.keys(router));
    dispatch(questionState(""));
    switch (window.location.href.split("/taro")[1]) {
      case "/one":
        dispatch(init({ cardCount: 1, selectedCard: null, reverseCard: null }));
        break;
      case "/three":
        dispatch(init({ cardCount: 3, selectedCard: null, reverseCard: null }));
        break;
      default:
        break;
    }
  };

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
            "is-disabled": question?.question === "",
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
            <Link to="/taro/three">
              쓰리 카드
              <span>
                {/* {} */}
                <SpreadResult qustion={question?.question} count={3} />
              </span>
            </Link>
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
          <li className="">
            <Link to="/taro/all-card">모든 카드 설명 보기</Link>
          </li>
        </ul>
        <div className="header-menu">
          <div
            className="requestion"
            onClick={() => {
              dispatch(questionText(""));
              dispatch(questionState(false));
              navigate("/");
            }}
          >
            다시 질문하기
          </div>
          {
            window.location.href.split("/").length > 4 &&
            <div className="refresh" onClick={refreshBtn}>
              다시 고르기
            </div>
          }
        </div>
      </header>
    </>
  );
};

export default Header;
