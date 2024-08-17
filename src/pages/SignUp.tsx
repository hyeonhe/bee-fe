import { Button, Input } from "antd";
import { signUp, verifyEmail } from "api/authentication";
import { emailAvailablity } from "api/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAvailEmail, setIsAvailEmail] = useState<boolean | null>(null);
  const [userCode, setUserCode] = useState("");
  const navigate = useNavigate();

  // 사용 가능한 이메일인지 체크하는 함수
  async function emailCheck() {
    const data = await emailAvailablity({ email });
    setIsAvailEmail(data);
  }

  // 인증코드 요청하는 함수
  async function verifyCode() {
    const data = await signUp(email, password);
    if (data) {
      alert("인증코드가 이메일로 전송되었습니다.");
    } else alert("비밀번호를 다시 확인해주세요.");
  }

  // 회원가입하는 함수
  async function submit() {
    const data = await verifyEmail(email, userCode);
    if (data) {
      alert("회원가입이 완료되었습니다!");
      navigate("/");
    } else alert("인증코드가 다릅니다.");
  }

  return (
    <div className="w-96 h-96 border border-black border-solid flex flex-col items-center mx-auto">
      <h1>회원가입</h1>
      <div className="flex flex-col">
        <Input
          value={email}
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={emailCheck}>중복 확인</Button>
        {isAvailEmail ? (
          <span>사용가능한 이메일입니다.</span>
        ) : (
          isAvailEmail === false && <span>이미 가입한 이메일입니다.</span>
        )}
        <Input
          placeholder="비밀번호(알파벳, 숫자, 특스기호 포함 최소 8자)"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={verifyCode}>인증요청</Button>
        <Input
          placeholder="인증코드"
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
        />
        <Button onClick={submit}>회원가입</Button>
      </div>
    </div>
  );
}
