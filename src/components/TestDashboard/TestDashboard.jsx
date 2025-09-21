import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApiTest from "../ApiTest/ApiTest.jsx";
import AuthTest from "../AuthTest/AuthTest.jsx";
import MockAuthDemo from "../MockAuthDemo/MockAuthDemo.jsx";
import AddRecipeDemo from "../AddRecipeDemo/AddRecipeDemo.jsx";
import "./TestDashboard.css";

const TestDashboard = () => {
  const [activeTab, setActiveTab] = useState("api");

  const tabs = [
    { id: "api", label: "🧪 API Tests", component: ApiTest },
    { id: "auth", label: "🔐 Auth Tests", component: AuthTest },
    { id: "mock", label: "🧪 Mock Auth", component: MockAuthDemo },
    { id: "recipe", label: "🍽️ Recipe Search", component: AddRecipeDemo },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="test-dashboard">
      <div className="dashboard-header">
        <h1>🧪 ForkLoop Test Dashboard</h1>
        <p>Test your API and authentication functionality</p>

        <div className="console-info">
          <h3>🖥️ Console Commands:</h3>
          <div className="console-commands">
            <code>window.testAPI.runQuickTest()</code> - Quick API test
            <br />
            <code>window.testAPI.testSearch(&apos;pasta&apos;)</code> - Test
            recipe search
            <br />
            <code>window.testAPI.runAllTests()</code> - Run all API tests
          </div>
        </div>
      </div>

      <div className="tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {ActiveComponent && <ActiveComponent />}
      </div>

      <div className="dashboard-footer">
        <h3>📚 Available Test Routes:</h3>
        <ul>
          <li>
            <Link to="/api-test">
              📡 API Tests Only
            </Link>
          </li>
          <li>
            <Link to="/auth-test">
              🔐 Auth Tests Only
            </Link>
          </li>
          <li>
            <Link to="/tests">
              🎛️ Full Test Dashboard
            </Link>
          </li>
        </ul>

        <div className="api-status">
          <h4>🌐 API Configuration:</h4>
          <p>
            <strong>Spoonacular API:</strong>{" "}
            {import.meta.env.VITE_API_URL ? "✅ Configured" : "❌ Missing"}
          </p>
          <p>
            <strong>Backend API:</strong>{" "}
            {import.meta.env.VITE_BASE_URL ? "✅ Configured" : "❌ Missing"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestDashboard;
