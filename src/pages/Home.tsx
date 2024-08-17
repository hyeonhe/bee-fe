import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/login">
        <Button>로그인</Button>
      </Link>
      <Link to="/signup">
        <Button>회원가입</Button>
      </Link>
    </>
  );
}
