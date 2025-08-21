import React, { useState, useContext } from 'react';
import { register, login, checkToken, updateUserProfile } from '../../utils/auth.jsx';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.jsx';
import './AuthTest.css';

const AuthTest = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testType, setTestType] = useState('');
  const currentUser = useContext(CurrentUserContext);

  // Test user credentials
  const testUser = {
    name: 'Test User',
    email: `test_${Date.now()}@example.com`, // Unique email each time
    password: 'TestPass123!',
    avatar: 'https://via.placeholder.com/150/FF6B35/FFFFFF?text=TU'
  };

  const existingUser = {
    email: 'test@forkloop.com', // Use a known test account if you have one
    password: 'password123'
  };

  const runTest = async (testFunction, testName) => {
    setLoading(true);
    setError(null);
    setTestType(testName);
    
    try {
      const result = await testFunction();
      setResults(result);
      console.log(`✅ ${testName} Success:`, result);
    } catch (err) {
      setError(err.message);
      console.error(`❌ ${testName} Error:`, err);
    } finally {
      setLoading(false);
    }
  };

  const testUserRegistration = async () => {
    console.log('🔐 Testing user registration...');
    const result = await register(testUser);
    return {
      type: 'registration',
      message: 'User registration successful',
      data: result
    };
  };

  const testUserLogin = async () => {
    console.log('🔐 Testing user login...');
    const result = await login(existingUser);
    
    if (result.token) {
      // Also test token validation
      const tokenCheck = await checkToken(result.token);
      return {
        type: 'login',
        message: 'Login successful',
        token: result.token,
        user: tokenCheck
      };
    }
    return result;
  };

  const testTokenValidation = async () => {
    console.log('🔐 Testing token validation...');
    const token = localStorage.getItem('jwt');
    
    if (!token) {
      throw new Error('No JWT token found in localStorage. Please login first.');
    }
    
    const result = await checkToken(token);
    return {
      type: 'token_validation',
      message: 'Token is valid',
      user: result,
      token: token
    };
  };

  const testProfileUpdate = async () => {
    console.log('🔐 Testing profile update...');
    const token = localStorage.getItem('jwt');
    
    if (!token) {
      throw new Error('No JWT token found. Please login first.');
    }

    const updateData = {
      name: 'Updated Test User',
      avatar: 'https://via.placeholder.com/150/2E7D32/FFFFFF?text=UTU'
    };

    const result = await updateUserProfile(updateData, token);
    return {
      type: 'profile_update',
      message: 'Profile updated successfully',
      data: result
    };
  };

  const testFullAuthFlow = async () => {
    console.log('🔄 Testing full authentication flow...');
    
    try {
      // Step 1: Register
      console.log('Step 1: Registering new user...');
      const registerResult = await register(testUser);
      
      // Step 2: Login
      console.log('Step 2: Logging in...');
      const loginResult = await login({ 
        email: testUser.email, 
        password: testUser.password 
      });
      
      // Step 3: Validate token
      console.log('Step 3: Validating token...');
      const tokenResult = await checkToken(loginResult.token);
      
      return {
        type: 'full_auth_flow',
        message: 'Full authentication flow completed',
        steps: {
          registration: registerResult,
          login: loginResult,
          tokenValidation: tokenResult
        }
      };
    } catch (error) {
      console.log('Note: Registration may fail if user exists, trying login only...');
      
      // Fallback: just try login
      const loginResult = await login({ 
        email: testUser.email, 
        password: testUser.password 
      });
      
      const tokenResult = await checkToken(loginResult.token);
      
      return {
        type: 'auth_flow_fallback',
        message: 'Authentication flow completed (login only)',
        steps: {
          login: loginResult,
          tokenValidation: tokenResult
        }
      };
    }
  };

  const clearResults = () => {
    setResults(null);
    setError(null);
    setTestType('');
  };

  const clearAuthData = () => {
    localStorage.removeItem('jwt');
    setResults(null);
    setError(null);
    setTestType('');
    console.log('🧹 Cleared authentication data');
  };

  return (
    <div className="auth-test">
      <h2>🔐 Authentication Test Component</h2>
      
      {currentUser && (
        <div className="current-user-info">
          <h3>Current User:</h3>
          <p><strong>Name:</strong> {currentUser.name}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
          <p><strong>ID:</strong> {currentUser._id}</p>
        </div>
      )}
      
      <div className="test-buttons">
        <button 
          onClick={() => runTest(testUserRegistration, 'User Registration')}
          disabled={loading}
        >
          Test Registration
        </button>
        
        <button 
          onClick={() => runTest(testUserLogin, 'User Login')}
          disabled={loading}
        >
          Test Login
        </button>
        
        <button 
          onClick={() => runTest(testTokenValidation, 'Token Validation')}
          disabled={loading}
        >
          Test Token
        </button>
        
        <button 
          onClick={() => runTest(testProfileUpdate, 'Profile Update')}
          disabled={loading}
        >
          Test Profile Update
        </button>
        
        <button 
          onClick={() => runTest(testFullAuthFlow, 'Full Auth Flow')}
          disabled={loading}
        >
          Test Full Flow
        </button>
        
        <button onClick={clearResults}>
          Clear Results
        </button>
        
        <button onClick={clearAuthData} className="danger">
          Clear Auth Data
        </button>
      </div>

      <div className="test-credentials">
        <h4>Test Credentials:</h4>
        <p><strong>New User Email:</strong> {testUser.email}</p>
        <p><strong>Password:</strong> {testUser.password}</p>
        <p><strong>Existing User:</strong> {existingUser.email} / {existingUser.password}</p>
      </div>

      {loading && (
        <div className="test-status loading">
          🔄 Testing {testType}...
        </div>
      )}

      {error && (
        <div className="test-status error">
          ❌ <strong>Error:</strong> {error}
        </div>
      )}

      {results && (
        <div className="test-results">
          <h3>✅ {testType} Results:</h3>
          
          {results.type === 'login' && (
            <div>
              <p><strong>Login Status:</strong> {results.message}</p>
              <p><strong>Token:</strong> {results.token ? 'Received ✅' : 'Missing ❌'}</p>
              {results.user && (
                <div>
                  <p><strong>User Name:</strong> {results.user.name}</p>
                  <p><strong>User Email:</strong> {results.user.email}</p>
                  <p><strong>User ID:</strong> {results.user._id}</p>
                </div>
              )}
            </div>
          )}

          {results.type === 'token_validation' && (
            <div>
              <p><strong>Token Status:</strong> {results.message}</p>
              <p><strong>User Name:</strong> {results.user.name}</p>
              <p><strong>User Email:</strong> {results.user.email}</p>
              <p><strong>Token Preview:</strong> {results.token.substring(0, 20)}...</p>
            </div>
          )}

          {results.type === 'full_auth_flow' && (
            <div>
              <p><strong>Flow Status:</strong> {results.message}</p>
              <h4>Steps Completed:</h4>
              <ul>
                {results.steps.registration && <li>✅ Registration successful</li>}
                {results.steps.login && <li>✅ Login successful</li>}
                {results.steps.tokenValidation && <li>✅ Token validation successful</li>}
              </ul>
            </div>
          )}
          
          <details>
            <summary>Raw Response (Click to expand)</summary>
            <pre>{JSON.stringify(results, null, 2)}</pre>
          </details>
        </div>
      )}
    </div>
  );
};

export default AuthTest;