import { emailAvailablity } from "api/user";
import { useState } from "react";

// 회원가입
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [isAvailEmail, setIsAvailEmail] = useState<boolean | null>(null);

  async function emailCheck() {
    const data = await emailAvailablity({ email });
    setIsAvailEmail(data);
  }

  return (
    <div className="w-96 h-96 border border-black border-solid flex flex-col items-center mx-auto">
      <h1>회원가입</h1>
      <div className="flex flex-col">
        <input
          value={email}
          className="border border-black border-solid"
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-[#bdbdbd]" onClick={emailCheck}>
          중복 확인
        </button>
        {isAvailEmail ? (
          <span>사용가능한 이메일입니다.</span>
        ) : (
          isAvailEmail === false && <span>이미 가입한 이메일입니다.</span>
        )}
        <input
          className="border border-black border-solid"
          placeholder="비밀번호"
        />
      </div>
    </div>
  );
}
