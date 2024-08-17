import { Button, Input } from "antd";
import { signIn } from "api/authentication";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// 로그인
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();
  const navigate = useNavigate();

  // event: React.FormEvent<HTMLFormElement>
  async function login() {
    // event.preventDefault();
    const data = await signIn(email, password);
    if (data) {
      cookies.set("accessToken", data.accessToken, { path: "/" });
      cookies.set("refreshToken", data.refreshToken, { path: "/" });
      navigate("/");
    } else {
      alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  }

  return (
    <div className="w-96 h-96 border border-black border-solid flex flex-col items-center mx-auto">
      <h1>로그인</h1>
      {/* <form onSubmit={login} className="flex flex-col"> */}
      <div className="flex flex-col">
        <Input
          value={email}
          placeholder="이메일"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          placeholder="비밀번호"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={login}>로그인</Button>
      </div>
      {/* </form> */}
    </div>
  );
}
