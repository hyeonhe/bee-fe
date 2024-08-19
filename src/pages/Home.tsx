import { Button } from "antd";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function Home() {
  const cookies = new Cookies();

  return (
    <>
      <Link to="/login">
        <Button>로그인</Button>
      </Link>
      <Link to="/signup">
        <Button>회원가입</Button>
      </Link>
      {cookies.get("accessToken") ? (
        <Link to="/mypage">
          <Button>마이페이지</Button>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}
