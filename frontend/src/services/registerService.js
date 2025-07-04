import axios from "axios";

export const registerUser = async (data) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  console.log("✅ API BASE URL =", baseUrl);
  return await axios.post(`${baseUrl}/api/register`, {
    name: data.fullName, // 🔁 Rename to match backend
    email: data.email,
    password: data.password,
  });
};
