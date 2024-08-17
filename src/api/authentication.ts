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
