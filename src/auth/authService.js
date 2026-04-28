import client, { setAccessToken } from "../api/client";

export async function login(data) {
  const res = await client.post("/auth/login", data);
  setAccessToken(res.data.accessToken);
  return res.data;
}

export async function logout() {
  await client.post("/auth/logout");
  setAccessToken(null);
}

export async function fetchMe() {
  const res = await client.get("/auth/me");
  return res.data;
}

export async function refresh() {
  const res = await client.post("/auth/refresh");
  setAccessToken(res.data.accessToken);
  return res.data;
}

export async function register(data) {
  return await client.post("/auth/register", data);
}
