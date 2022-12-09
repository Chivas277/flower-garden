import axios from "axios";

const BASE_URL = "http://localhost:8000/v1/";
//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjNmNjAzOWY0OGE1M2U4MjJiNWZiYyIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzA1MzYzNTIsImV4cCI6MTY3MzU2MDM1Mn0.y4rytXLoTFSq1tnKUq61p_E1c1_xXLcVblsZ0Siec4U";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
