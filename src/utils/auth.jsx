import { checkResponse } from "./api.jsx";
import { BASE_URL } from "./config.jsx";
import {
  mockRegister,
  mockLogin,
  mockCheckToken,
  mockUpdateUserProfile,
  shouldUseMockAuth,
} from "./mockAuth.jsx";

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const register = ({ name, avatar, email, password }) => {
  // Use mock auth if backend is not available
  if (shouldUseMockAuth()) {
    console.log("🧪 Using mock authentication for register");
    return mockRegister({ name, avatar, email, password });
  }

  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, avatar, email, password }),
  });
};

export const login = ({ email, password }) => {
  // Use mock auth if backend is not available
  if (shouldUseMockAuth()) {
    console.log("🧪 Using mock authentication for login");
    return mockLogin({ email, password });
  }

  return request(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
};

export const checkToken = (token) => {
  // Use mock auth if backend is not available
  if (shouldUseMockAuth()) {
    console.log("🧪 Using mock authentication for token check");
    return mockCheckToken(token);
  }

  return request(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// Update user profile
export const updateUserProfile = (name, avatar) => {
  // Use mock auth if backend is not available
  if (shouldUseMockAuth()) {
    console.log("🧪 Using mock authentication for profile update");
    return mockUpdateUserProfile(name, avatar);
  }

  const token = localStorage.getItem("jwt");
  return request(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
};
