import { useState } from "react";

// 로그인
export default function SignIn() {
  const [email, setEmail] = useState("");
  return (
    <div className="w-96 h-96 border border-black border-solid flex flex-col items-center mx-auto">
      <h1>로그인</h1>
      <div className="flex flex-col">
        <input
          value={email}
          className="border border-black border-solid"
          placeholder="이메일"
        />
        <input
          className="border border-black border-solid"
          placeholder="비밀번호"
        />
      </div>
    </div>
  );
}
