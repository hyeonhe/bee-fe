import api from "./config";

export enum Gender {
  Male = "Male",
  Female = "Female",
  NonBinary = "NonBinary",
  Other = "Other",
  PreferNotToSay = "PreferNotToSay",
}

export interface UserUpdateInfo {
  fullName?: string;
  nickName?: string;
  gender?: Gender | undefined;
  phoneNumber?: string;
  companyName?: string;
  streetAddress?: string;
}

export interface User extends UserUpdateInfo {
  id: number;
  email: string;
}

export async function getUser() {
  return await api
    .get("/user")
    .then((response: { data: User }) => response.data);
}

export async function updateUser({
  fullName,
  nickName,
  gender,
  phoneNumber,
  companyName,
  streetAddress,
}: UserUpdateInfo) {
  try {
    return await api
      .patch("/user", {
        fullName,
        nickName,
        gender,
        phoneNumber,
        companyName,
        streetAddress,
      })
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser() {
  try {
    await api.delete("/user").then((response) => response.data);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function emailAvailablity({ email }: { email: string }) {
  return await api
    .post("/user/email/availability", { email })
    .then((response) => response.data);
}
