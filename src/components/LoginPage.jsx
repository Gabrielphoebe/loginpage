import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';  // Importing API utility

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize the navigate function

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent form default behavior
    try {
      // Send login request to the backend API
      const response = await api.post('/login', { email, password });
      console.log(response.data);  // You can log the response for debugging
      alert(response.data); // Display the response message (success or error)
      
      // Check the response and redirect accordingly
      if (response.data.includes('ADMIN')) {
        navigate('/admin-dashboard');  // Navigate to Admin Dashboard
      } else if (response.data.includes('RECEPTION')) {
        navigate('/reception-dashboard');  // Navigate to Reception Dashboard
      }
    } catch (error) {
      console.error(error);
      alert('Login failed! Please check your credentials and try again.');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
