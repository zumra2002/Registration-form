import axios from "axios";

export const registerUser = async (data) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  console.log("✅ API BASE URL =", baseUrl);
  return await axios.post(`${baseUrl}/api/register`, {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    password: data.password,
  });
};
