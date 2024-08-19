import { useQuery } from "@tanstack/react-query";
import { Input, Select } from "antd";
import { Gender, getUser, updateUser, User, UserUpdateInfo } from "api/user"; // Assuming you have an updateUser function
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Mypage() {
  const navigate = useNavigate();
  const { data: userInfo } = useQuery<User>({
    queryKey: ["userInfo"],
    queryFn: async () => await getUser(),
  });

  const { control, handleSubmit, reset } = useForm<UserUpdateInfo>({
    defaultValues: {
      fullName: "",
      nickName: "",
      gender: Gender.Male, // Default value
      phoneNumber: "",
      companyName: "",
      streetAddress: "",
    },
  });

  useEffect(() => {
    if (userInfo) {
      reset({
        fullName: userInfo.fullName,
        nickName: userInfo.nickName,
        gender: userInfo.gender,
        phoneNumber: userInfo.phoneNumber,
        companyName: userInfo.companyName,
        streetAddress: userInfo.streetAddress,
      });
    }
  }, [userInfo, reset]);

  const onSubmit = async (data: UserUpdateInfo) => {
    try {
      console.log(data);
      const updatedUser = await updateUser(data);
      console.log("User info updated:", updatedUser);
      alert("정보 수정이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("Failed to update user info:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mx-auto">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label>이메일</label>
          <Input value={userInfo?.email} readOnly={true} />
          <label htmlFor="fullName">이름</label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <label htmlFor="nickName">닉네임</label>
          <Controller
            name="nickName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <label htmlFor="gender">성별</label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                <Select.Option value={Gender.Male}>남성</Select.Option>
                <Select.Option value={Gender.Female}>여성</Select.Option>
                <Select.Option value={Gender.NonBinary}>
                  논바이너리
                </Select.Option>
                <Select.Option value={Gender.Other}>기타</Select.Option>
                <Select.Option value={Gender.PreferNotToSay}>
                  비공개
                </Select.Option>
              </Select>
            )}
          />
          <label htmlFor="phoneNumber">전화번호</label>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => <Input type="tel" {...field} />}
          />
          <label htmlFor="companyName">회사명</label>
          <Controller
            name="companyName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <label htmlFor="streetAddress">주소</label>
          <Controller
            name="streetAddress"
            control={control}
            render={({ field }) => <Input {...field} />}
          />

          <Input type="submit" value={"수정하기"} />
        </form>
      </div>
    </>
  );
}
