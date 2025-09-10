import React, { useState } from "react";
import { testUser } from "../../utils/config.jsx";
import { login, register } from "../../utils/auth.jsx";
import "./MockAuthDemo.css";

const MockAuthDemo = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await login({
        email: testUser.email,
        password: testUser.password,
      });
      setResponse(result);
      // Store token for testing
      localStorage.setItem("jwt", result.token);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const testRegister = async () => {
    setLoading(true);
    setError(null);
    try {
      // Try registering a new user
      const result = await register({
        email: "newuser@test.com",
        password: "password123",
        name: "New Test User",
        avatar: "https://i.pravatar.cc/300?img=25",
      });
      setResponse(result);
      localStorage.setItem("jwt", result.token);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const clearData = () => {
    setResponse(null);
    setError(null);
    localStorage.removeItem("jwt");
  };

  return (
    <div className="mock-auth-demo">
      <h3>🧪 Mock Authentication Demo</h3>

      <div className="test-user-info">
        <h4>Test User Credentials:</h4>
        <ul>
          <li>
            <strong>Email:</strong> {testUser.email}
          </li>
          <li>
            <strong>Password:</strong> {testUser.password}
          </li>
          <li>
            <strong>Name:</strong> {testUser.name}
          </li>
          <li>
            <strong>Avatar:</strong>{" "}
            <img src={testUser.avatar} alt="avatar" width="40" height="40" />
          </li>
        </ul>
      </div>

      <div className="demo-buttons">
        <button onClick={testLogin} disabled={loading}>
          {loading ? "Testing..." : "Test Login"}
        </button>
        <button onClick={testRegister} disabled={loading}>
          {loading ? "Testing..." : "Test Register"}
        </button>
        <button onClick={clearData}>Clear Results</button>
      </div>

      {error && (
        <div className="error-display">
          <h4>❌ Error:</h4>
          <pre>{error}</pre>
        </div>
      )}

      {response && (
        <div className="response-display">
          <h4>✅ Success Response:</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MockAuthDemo;
