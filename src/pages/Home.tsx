import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Button>
        <Link to="/signin">로그인</Link>
      </Button>
      <Button>
        <Link to="/signup">회원가입</Link>
      </Button>
    </>
  );
}
