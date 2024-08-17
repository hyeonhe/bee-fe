import api from "./config";

export async function emailAvailablity({ email }: { email: string }) {
  return await api
    .post("/user/email/availability", { email })
    .then((response) => response.data);
}
