import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 해야할일
// 1. 페이지 구성 : 전체상품페이지, 상품상세페이지, 로그인
/* 리액트 라우터 설치 / 페이지 구성 */
// 1-1 nav 바 구성
// 2. 전체상품페이지: 전체상품 보임
/* json-server db.json */
// 3. 로그인 버튼 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일 페이지 누르면, 로그인이 안될경우 로그인페이지로 리다이렉트
// 4. 로그인이 되어있을경우, 상품디테일 페이지 볼 수 있다.
// 5. 로그아웃 버튼 클릭하면 로그아웃이 된다
// 6. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true: 로그인 상태, false: 로그아웃 상태

  useEffect(() => {
    console.log("ddd", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
