import api from "./config";

export async function refreshTokens({
  refreshToken,
}: {
  refreshToken: string;
}) {
  return await api
    .post("/authentication/refresh-tokens", { refreshToken })
    .then((response) => response.data);
}

export async function resendVerification() {
  return await api
    .post("/authentication/resend-verification")
    .then((response) => response.data);
}

export async function signIn(email: string, password: string) {
  try {
    return await api
      .post("/authentication/sign-in", { email, password })
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function signUp(email: string, password: string) {
  try {
    return await api
      .post("/authentication/sign-up", { email, password })
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function verifyEmail(email: string, otp: string) {
  try {
    return await api
      .post("/authentication/verify-email", { email, otp })
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
    return false;
  }
}
