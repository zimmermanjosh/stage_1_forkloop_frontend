// Mock authentication service for testing
import { testUser } from "./config.jsx";

// Simulate network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock JWT token
const mockToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ0ZXN0X3VzZXJfMTIzNDUiLCJlbWFpbCI6Imp0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0ODk0MDAwfQ.mock_signature";

// Mock user database (in real app this would be backend)
const users = [
  {
    ...testUser,
    _id: "test_user_12345",
  },
];

// Mock register function
export const mockRegister = async ({ name, avatar, email, password }) => {
  await delay(500); // Simulate network delay

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Create new user
  const newUser = {
    _id: `user_${Date.now()}`,
    name,
    avatar,
    email,
    password, // In real app, this would be hashed
  };

  users.push(newUser);

  return {
    token: mockToken,
    user: {
      _id: newUser._id,
      name: newUser.name,
      avatar: newUser.avatar,
      email: newUser.email,
    },
  };
};

// Mock login function
export const mockLogin = async ({ email, password }) => {
  await delay(500); // Simulate network delay

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return {
    token: mockToken,
    user: {
      _id: user._id,
      name: user.name,
      avatar: user.avatar,
      email: user.email,
    },
  };
};

// Mock token validation
export const mockCheckToken = async (token) => {
  await delay(300);

  if (token !== mockToken) {
    throw new Error("Invalid token");
  }

  return {
    _id: testUser._id,
    name: testUser.name,
    avatar: testUser.avatar,
    email: testUser.email,
  };
};

// Mock profile update
export const mockUpdateUserProfile = async (name, avatar) => {
  await delay(400);

  // Find and update test user
  const userIndex = users.findIndex((u) => u._id === testUser._id);
  if (userIndex !== -1) {
    users[userIndex].name = name;
    users[userIndex].avatar = avatar;
  }

  return {
    _id: testUser._id,
    name,
    avatar,
    email: testUser.email,
  };
};

// Check if we should use mock auth (development mode without backend)
export const shouldUseMockAuth = () => {
  return (
    import.meta.env.MODE === "development" &&
    window.location.hostname === "localhost"
  );
};
