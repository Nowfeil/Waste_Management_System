import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    console.log('Submitting login data:', loginData);

    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', data);

      if (response.status===200) {
        console.log('Login successful, navigating to home');
        navigate('/');
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      console.log('Error:', err);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <main className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">Log In</button>
        </form>
        {message && <p>{message}</p>}
        <p>Don't have an account? <Link to="/signup">Sign up here</Link>.</p>
      </main>
    </div>
  );
}
