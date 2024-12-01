import React, { useState } from 'react';
import { api } from '../services/api';  // Importing API utility
import { useNavigate } from 'react-router-dom';  // Importing the useNavigate hook for routing

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('ADMIN');
  const navigate = useNavigate();  // Initialize the navigate function

  // Handle Sign-Up
  const handleSignUp = async (e) => {
    e.preventDefault();  // Prevent form default behavior
    try {
      // Send sign-up request to the backend API
      const response = await api.post('/signUp', { email, password, userRole: role });
      console.log(response.data);  // You can log the response for debugging
      alert('Sign-up successful!');
      
      // Redirect to login page after successful sign-up
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Sign-up failed! Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="ADMIN">ADMIN</option>
          <option value="RECEPTION">RECEPTION</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
